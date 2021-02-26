const { useContext } = require('react');

describe('Input form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('App initialization', () => {
    it('Loads todos on page load', () => {
      cy.get('[data-cy=textTask]').should('have.length', 1);
    });
  });

  describe('Input form', () => {
    it('focuses inpit on load', () => {
      cy.focused().should('have.class', 'new-todo');
    });
    it('accept input"', () => {
      const typedText = 'Buy a vodka';

      cy.get('.new-todo').type(typedText).should('have.value', typedText);
    });

    context('Form submission', () => {
      beforeEach(() => {
        cy.server();
      });

      it('Adds a new todo on submit', () => {
        const itemText = 'Buy eggs';
        cy.route('POST', '/api/todos', {
          name: itemText,
          id: 1,
          isComplete: false,
        });

        cy.get('.new-todo')
          .type(itemText)
          .type('{enter}')
          .should('have.value', '');

        cy.get('[data-cy=textTask]').and('contain', itemText);
      });
    });
    describe('List items', () => {
      it('properly displays completed items', () => {
        cy.get('[data-cy=cy-task] ')
          .filter('.completed')
          .should('have.length', 1)
          .and('contain', 'Eggs')
          .find('.toggle')
          .should('be.checked');
      });

      it('Shows remaining todos in the footer', () => {
        cy.get('[data-cy=cy-count]').should('contain', 3);
      });
    });
  });
});
