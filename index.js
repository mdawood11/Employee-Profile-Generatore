const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");
const createTeam = require("./src/landing-page");
const inquirer = require("inquirer");
const fs = require("fs");

const newData = [];

const questions = async () => {
  const response = await inquirer.prompt([
    {
      type: "input",
      message: "Please enter your name",
      name: "name",
    },
    {
      type: "input",
      message: "Please enter your ID number",
      name: "id",
    },
    {
      type: "input",
      message: "Enter your email address",
      name: "email",
    },
    {
      type: "list",
      message: "What is your position?",
      name: "role",
      choices: ["Engineer", "Intern", "Manager"],
    },
  ]);

  if (response.role === "Manager") {
    const responseManager = await inquirer.prompt([
      {
        type: "input",
        message: "Please enter your office number",
        name: "officeNumber",
      },
    ]);
    const managerNew = new manager(
      response.name,
      response.id,
      response.email,
      responseManager.officeNumber
    );
    newData.push(managerNew);
  } else if (response.role === "Engineer") {
    const githubResponse = await inquirer.prompt([
      {
        type: "input",
        message: "Please enter your github username",
        name: "github",
      },
    ]);

    const engineerNew = new engineer(
      response.name,
      response.id,
      response.email,
      githubResponse.github
    );
    newData.push(engineerNew);
  } else if (response.role === "Intern") {
    const internResp = await inquirer.prompt([
      {
        type: "input",
        message: "What university did you attend?",
        name: "school",
      },
    ]);
    const internNew = new intern(
      response.name,
      response.id,
      response.email,
      internResp.school
    );
    newData.push(internNew);
  }
};

async function promptReturn() {
  await questions();

  const memberResp = await inquirer.prompt([
    {
      name: "addMore",
      type: "list",
      choices: ["Add a new member", "Create team"],
      message: "What would you like to do next?",
    },
  ]);

  if (memberResp.addMore === "Add a new member") {
    return promptReturn();
  }
  return createNewTeam();
}

promptReturn();

const createNewTeam = () => {
  console.log(newData);
  fs.writeFileSync("./output/index.html", createTeam(newData), "utf-8");
};
