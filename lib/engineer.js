const staff = require("./employee");

class engineer extends staff {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getRole() {
    return "engineer";
  }

  getGithub() {
    return this.github;
  }
}

module.exports = engineer;
