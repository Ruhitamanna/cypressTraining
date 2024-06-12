/*
EXERCISE 4: "HELLO WORLD" SEARCH
Please create a second test case that
1. navigates to the Wikipedia website(https://www.wikipedia.org/).
2. verifies the loaded website URL.
3. type the text "Hello World!" into the search box.
4. sends the search query by pressing the Enter key or Search key.
5. checks whether the Wikipedia article with the heading "Hello World!" is displayed.
Copy the test case and adjust the check to check for an incorrect result element that cannot be found.
Attention: disable chromeWebSecurity in cypress config to redirect wiki search to insecure HTTP page 
 may:
 chromeWebSecurity: false,
 Then restart Cypress Runner
*/

describe("Exercise 4", () => {
  it("Hello world search and validation", () => {
    // validation of Wikipedia
    cy.visit("https://www.wikipedia.com");
    let actualUrl = cy.url();
    cy.log(actualUrl);

    let expectedUrl = "https://www.wikipedia.org/";
    cy.log(expectedUrl);

    cy.url().should("eq", expectedUrl);
    // let inputName = "Hello world";
    cy.get("#searchInput").clear().type("Hello World");
    cy.get('[data-jsl10n="search-input-button"]').click();
    cy.get("#firstHeading").contains("Hello World");
  });
});
