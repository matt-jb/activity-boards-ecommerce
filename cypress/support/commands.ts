/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import "cypress-iframe";

Cypress.Commands.add("getIframeBody", () => {
  // get the iframe > document > body
  // and retry until the body element is not empty
  return (
    cy
      .get("iframe")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      // wraps "body" DOM element to allow
      // chaining more Cypress commands, like ".find(...)"
      // https://on.cypress.io/wrap
      .then(cy.wrap)
  );
});

Cypress.Commands.add("fillUserForm", (valid = true) => {
  valid ? cy.get("#fName").type("Test") : cy.get("#fName").clear();
  valid ? cy.get("#lName").type("Testowy") : cy.get("#lName").clear();
  cy.get("#phoneNumber")
    .clear()
    .type(valid ? "123123123" : "123a23123");
  valid
    ? cy.get("#addressL1").type("Mój adres 12/34")
    : cy.get("#addressL1").clear();
  valid ? cy.get("#city").type("Wrocław") : cy.get("#city").clear();
  cy.get("#zipCode")
    .clear()
    .type(valid ? "01-234" : "01abcd2");
  cy.get("#notes").type("To są testowe notatki");
});
