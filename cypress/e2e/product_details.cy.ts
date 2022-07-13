describe("Product details page - not logged in", () => {
  before(() => {
    cy.visit("http://localhost:3000/");
    cy.get("[data-testid=product-card-cta-more]").first().click();
  });

  it("Navigates to product details page", () => {
    cy.contains("Nazwa");
    cy.contains("Wymiary");
  });

  it("Gallery turns on and off", () => {
    cy.get("[data-testid=main-product-image]").click();
    cy.get("[data-testid=gallery-component]").should("be.visible");
    cy.get("[data-testid=main-gallery-mode-image]").should("be.visible");
    cy.get("[data-testid=gallery-component]").click("topLeft");
    cy.get("[data-testid=main-gallery-mode-image]").should("not.exist");
  });

  it("Can add product to cart", () => {
    cy.contains("Dodaj do koszyka").click();
    cy.get("[data-testid=cart-counter]").should("be.visible").contains("1");
  });

  it("Navitages to /login when wanting to add to Wish List", () => {
    cy.contains("Dodaj do listy życzeń").click();
    cy.url().should("include", "/login");
  });
});

describe("Product details page - logged in", () => {
  before(() => {
    cy.visit("http://localhost:3000/login");
    cy.contains("Zaloguj się przez Email").click();
    cy.get("input#email").type("test@example.com");
    cy.get("input#password").type("TestTest123");
    cy.get("[data-testid=login-submit-btn]").click();
    cy.wait(2000);
  });

  it("Adds products to Wish List", () => {
    cy.get("[data-testid=product-card-cta-more]").first().click();
    cy.contains("Dodaj do listy życzeń").click();
    cy.get("[data-testid=wish-list-toggler]").click();
    cy.get("[data-testid=dropdown-product]")
      .should("exist")
      .should("be.visible");
  });
});
