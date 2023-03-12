// node modules
const inquirer = require("inquirer");
const fs = require("fs");
const createTeam = require("./src/landing-page");

//library (lib) module
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");

// responds array
const newMemberData = [];

// Array object
const quests = async () => {
  const response = await inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your ID number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "list",
      message: "What is your position?",
      name: "role",
      choices: ["Engineer", "Intern", "Manager"],
    },
  ]);

  // in case of manager position selection, ask these 👇
  if (response.role === "Manager") {
    const mngrResp = await inquirer.prompt([
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
      },
    ]);
    const mngrNew = new manager(
      response.name,
      response.id,
      response.email,
      mngrResp.officeNumber
    );
    newMemberData.push(mngrNew);

    // if engineer's position selected then ask these questions 👇
  } else if (response.role === "Engineer") {
    const githubResponse = await inquirer.prompt([
      {
        type: "input",
        message: "What is your github username?",
        name: "github",
      },
    ]);

    const engNew = new engineer(
      response.name,
      response.id,
      response.email,
      githubResponse.github
    );
    newMemberData.push(engNew);

    // if intern's position selected then ask these questions 👇
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
    newMemberData.push(internNew);
  }
};

async function promptQsts() {
  await quests();

  const memberResp = await inquirer.prompt([
    {
      name: "addMember",
      type: "list",
      choices: ["Add a new member", "Create team"],
      message: "What would you like to do next?",
    },
  ]);

  if (memberResp.addMember === "Add a new member") {
    return promptQsts();
  }
  return createNewTeam();
}

promptQsts();

function createNewTeam() {
  console.log(newMemberData);
  fs.writeFileSync("./output/index.html", createTeam(newMemberData), "utf-8");
}
