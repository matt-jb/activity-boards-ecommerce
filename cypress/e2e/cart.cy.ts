describe("Cart functionalities", () => {
  beforeEach(() => {
    cy.clearLocalStorage("activity-boards-cart");
    cy.visit("http://localhost:3000/");
  });

  it("Adds correctly to cart", () => {
    cy.get("[data-testid=product-card-btn-add-to-cart]").first().click();
    cy.get("[data-testid=cart-counter]").contains("1");
    cy.get("[data-testid=product-card-cta-more]").first().click();
    cy.contains("Dodaj do koszyka").click();
    cy.get("[data-testid=cart-counter]").contains("2");
  });

  it("Performs operations on cart correctly", () => {
    cy.get("[data-testid=product-card-btn-add-to-cart]").click({
      multiple: true,
    });
    cy.get("[data-testid=cart-counter]").contains("4").click();
    cy.url().should("include", "/cart");
    cy.get("[data-testid=order-controls]").should("have.length", 4);
    cy.get("[data-testid=minus-btn]").first().click();
    cy.get("[data-testid=order-controls]").should("have.length", 3);
    cy.get("[data-testid=x-btn]").first().click();
    cy.get("[data-testid=order-controls]").should("have.length", 2);
    cy.get("[data-testid=plus-btn]").first().click();
    cy.get("[data-testid=order-qty]").first().contains("2");
    cy.contains("Usuń wszystko z koszyka").click();
    cy.get("[data-testid=order-controls]").should("not.exist");
    cy.contains("Twój koszyk jest pusty.");
  });
});
