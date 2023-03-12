const engineer = require("../lib/engineer");

test("Can set GitHub account via constructor", function () {
  const testResult = "GitHubUser";
  const emp = new engineer("Mohamad", 1, "test@test.com", testResult);
  expect(emp.github).toBe(testResult);
});

test("getRole() should return 'engineer'", function () {
  const testResult = "engineer";
  const emp = new engineer("Mohamad", 1, "test@test.com", testResult);
  expect(emp.github).toBe(testResult);
});

test("getRole() should return 'engineer'", function () {
  const testResult = "engineer";
  const emp = new engineer("Mohamad", 1, "test@test.com", "GitHubUser");
  expect(emp.getRole()).toBe(testResult);
});

test("Can get Github username via getGithub()", function () {
  const testResult = "GitHubUser";
  const emp = new engineer("Mohamad", 1, "test@test.com", testResult);
  expect(emp.getGithub()).toBe(testResult);
});
