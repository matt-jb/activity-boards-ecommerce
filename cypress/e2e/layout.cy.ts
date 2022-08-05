describe("Layout on all pages", () => {
  before(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Has all of the core elements", () => {
    cy.get("[data-testid=info-bar]").contains("Wysyłka i zwrot");
    cy.contains("Ręcznie wykonane tablice manipulacyjne");
    cy.contains("Personalizacja");

    cy.get("[data-testid=main-nav]").contains("Sklep");
    cy.contains("Kategorie");

    cy.get("[data-testid=user-nav");
    cy.contains("Szukaj");
    cy.contains("Zaloguj");
    cy.contains("Koszyk");

    cy.get("[data-testid=page-title]").should("exist").should("be.visible");

    cy.get("[data-testid=footer]").contains("Kącik aktywności");
    cy.contains("Zakupy");
    cy.contains("Sklep");
    cy.contains("Blog");
    cy.contains("Kontakt");
  });

  it("Has a working pagination with the correct length", () => {
    cy.get("[data-testid=product-card]")
      .should("have.length", 4)
      .contains("Do koszyka");

    cy.get("[data-testid=pagination]").contains("1");
    cy.contains("2");
  });
});

export {};
