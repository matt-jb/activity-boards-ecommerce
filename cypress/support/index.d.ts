/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    getIframeBody(): Chainable<any>;
    fillUserForm(valid: boolean): Chainable<any>;
  }
}
