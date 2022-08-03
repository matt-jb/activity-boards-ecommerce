describe("Payments", () => {
  beforeEach(() => {
    cy.clearLocalStorage("activity-boards-cart");
    cy.visit("http://localhost:3000/");
  });

  it("Works with valid data", () => {
    // Need to fill out the User Form first
    cy.get("[data-testid=product-card-btn-add-to-cart]").first().click();
    cy.get("[data-testid=cart-counter]").contains("1").click();
    cy.contains("Do kasy").click();
    cy.url().should("include", "/details");
    cy.fillUserForm(true);
    cy.contains("Kup z obowiązkiem zapłaty").click();

    // iFrame may load over 9000 ms
    cy.wait(9001);
    cy.getIframeBody().find("#Field-numberInput").type("4242424242424242");
    cy.getIframeBody().find("#Field-expiryInput").type("1025");
    cy.getIframeBody().find("#Field-cvcInput").type("123");
    cy.contains("Zapłać teraz").click();
  });
});
