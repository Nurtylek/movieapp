import { getGreeting } from '../support/app.po';

describe('movieapp', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to movieapp!');
  });
});
