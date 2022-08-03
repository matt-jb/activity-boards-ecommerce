describe("Wish List", () => {
  before(() => {
    cy.clearLocalStorage();
    cy.visit("http://localhost:3000/login");
    cy.contains("Zaloguj się przez Email").click();
    cy.get("input#email").type("test@example.com");
    cy.get("input#password").type("TestTest123");
    cy.get("[data-testid=login-submit-btn]").click();
    cy.wait(2000);
  });

  it("Adds products to Wish List from Product Details Page", () => {
    cy.get("[data-testid=product-card-cta-more]").first().click();
    cy.contains("Dodaj do listy życzeń").click();
    cy.get("[data-testid=wish-list-toggler]").click();
    cy.get("[data-testid=dropdown-product]")
      .should("exist")
      .should("be.visible");
  });

  it("Correctly toggles adding products to Wish List from Product Card Component", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-testid=product-card]")
      .first()
      .within(() => {
        cy.get("[data-testid=heart-wish-list-icon]")
          .should("have.css", "color", "rgb(255, 112, 138)")
          .click()
          .should("have.css", "color", "rgb(68, 68, 68)")
          .click();
      });
    cy.get("[data-testid=wish-list-toggler]").click();
    cy.get("[data-testid=dropdown-product]")
      .should("exist")
      .should("be.visible");
  });

  it("Has working product controls", () => {
    cy.get("[data-testid=wish-list-add-to-cart]").click();
    cy.get("[data-testid=wish-list-bin]").click();
    cy.get("[data-testid=dropdown-product]").should("not.exist");
    cy.get("[data-testid=side-bar-bg]").click("left");
    cy.get("[data-testid=cart-counter]").contains("1");
    cy.get("[data-testid=product-card]")
      .first()
      .within(() => {
        cy.get("[data-testid=heart-wish-list-icon]").click();
      });
    cy.get("[data-testid=wish-list-toggler]").click();
    cy.get("[data-testid=dropdown-product]").should("exist");
    cy.contains("Wyczyść listę życzeń").click();
    cy.get("[data-testid=dropdown-product]").should("not.exist");
    cy.get("[data-testid=side-bar-close]").click();
    cy.get("[data-testid=side-bar-bg]").should("not.exist");
  });
});
