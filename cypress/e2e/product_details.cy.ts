describe("Product details page", () => {
  before(() => {
    indexedDB.deleteDatabase("firebaseLocalStorageDb");
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
    // More Wish List testing in ./wish_list.cy.ts
    cy.contains("Dodaj do listy życzeń").click();
    cy.url().should("include", "/login");
  });
});
