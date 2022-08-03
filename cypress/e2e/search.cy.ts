describe("Search", () => {
  before(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Works as expected", () => {
    cy.get("[data-testid=search-icon]").click();
    cy.contains("Wyszukaj produkt");
    cy.wait(500); // necessary because of slide-in animation
    cy.get("[data-testid=search-input]").type("tab");
    cy.get("[data-testid=dropdown-product]")
      .should("exist")
      .should("be.visible");
    cy.get("[data-testid=search-input]").clear();
    cy.get("[data-testid=dropdown-product]").should("not.exist");
    cy.get("[data-testid=side-bar-close]").click();
    cy.get("[data-testid=side-bar-bg]").should("not.exist");
  });
});
