describe("User form", () => {
  beforeEach(() => {
    cy.clearLocalStorage("activity-boards-cart");
    cy.visit("http://localhost:3000/");
  });

  it("Validates the data correctly", () => {
    cy.get("[data-testid=product-card-btn-add-to-cart]").first().click();
    cy.get("[data-testid=cart-counter]").contains("1").click();
    cy.contains("Do kasy").click();
    cy.url().should("include", "/details");

    cy.fillUserForm(true);
    cy.contains("Imię i nazwisko są wymagane.").should("not.exist");
    cy.contains("Adres jest wymagany.").should("not.exist");
    cy.contains("Kod pocztowy jest wymagany.").should("not.exist");
    cy.contains("Podaj kod pocztowy w formacie XX-XXX.").should("not.exist");
    cy.contains("Musisz podać miasto.").should("not.exist");
    cy.contains("Musisz podać numer telefonu.").should("not.exist");
    cy.contains(
      "Podaj numer telefonu jako ciąg 9 cyfr, bez spacji i myślników."
    ).should("not.exist");
    cy.contains("Numer telefonu jest zbyt długi.").should("not.exist");

    cy.fillUserForm(false);
    cy.contains("Imię i nazwisko są wymagane.").should("exist");
    cy.contains("Adres jest wymagany.").should("exist");
    cy.contains("Kod pocztowy jest zbyt długi.").should("exist");
    cy.contains("Musisz podać miasto.").should("exist");
    cy.contains(
      "Podaj numer telefonu jako ciąg 9 cyfr, bez spacji i myślników."
    ).should("exist");
  });
});

export {};
