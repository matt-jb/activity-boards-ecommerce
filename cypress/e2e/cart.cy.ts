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

describe("User form and payments", () => {
  beforeEach(() => {
    cy.clearLocalStorage("activity-boards-cart");
    cy.visit("http://localhost:3000/");
  });

  it.only("Works with valid data", () => {
    cy.get("[data-testid=product-card-btn-add-to-cart]").first().click();
    cy.get("[data-testid=cart-counter]").contains("1").click();
    cy.contains("Do kasy").click();
    cy.url().should("include", "/details");
    cy.get("#fName").type("Test");
    cy.get("#lName").type("Testowy");
    cy.get("#phoneNumber").type("123123123");
    cy.get("#addressL1").type("Mój adres 12/34");
    cy.get("#city").type("Wrocław");
    cy.get("#zipCode").type("01-234");
    cy.get("#notes").type("To są testowe notatki");
    cy.contains("Kup z obowiązkiem zapłaty").click();

    // Payments
    cy.wait(9001);
    // cy.get("#card-element").within(() => {
    //   cy.fillElementsInput("cardNumber", "4242424242424242");
    //   cy.fillElementsInput("cardExpiry", "1025");
    //   cy.fillElementsInput("cardCvc", "123");
    //   cy.fillElementsInput("postalCode", "90210");
    // });
  });
});
