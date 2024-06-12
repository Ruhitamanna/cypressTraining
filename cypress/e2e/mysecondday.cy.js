describe("My second day testsuite", () => {
  it("visit and validate the wikipedia url", () => {
    //Visit webpage: wikipedia
    cy.log("Visiting Wikipedia");
    cy.visit("https://www.wikipedia.org/");
    let url = cy.url();
    //cy.log(url);
    cy.url().should("eq", "https://www.wikipedia.org/");
  });
























  

});
