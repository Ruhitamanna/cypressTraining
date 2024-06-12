describe("My first testsuite", () => {
  beforeEach("log to console", () => {
    cy.log("This log is made in beforeEach hook");
  });

  it("passesMy First testcase", () => {
    cy.visit("https://example.cypress.io");
  });

  it("Hello  World", () => {
    cy.log("Hello World!");
  });
});
