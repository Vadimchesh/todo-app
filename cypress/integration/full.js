const TODO_ITEM_ONE = 'buy some white';
const TODO_ITEM_TWO = 'feed the red';

const visitWithInitialTodos = () => {
  cy.visit('/');
};

describe('Todo React-Redux', function () {
  beforeEach(function () {
    cy.visit('/');
  });

  it('adds 2 todos', function () {
    cy.get('[data-cy="inputText"]')
      .type('learn testing{enter}')
      .type('be cool{enter}');
    cy.get('[data-cy="labelTaskText"]').should('have.length', 2);
  });

  context('When page is initially opened', function () {
    it('should focus on the todo input field', function () {
      cy.focused().should('have.attr', 'data-cy', 'inputText');
    });
  });

  context('No Todos', function () {
    it('should hide #main', function () {
      cy.get('[data-cy="labelTaskText"]').should('not.exist');
    });
  });

  context('New Todo', function () {
    it('should allow me to add todo items', function () {
      cy.get('[data-cy="inputText"]').type(TODO_ITEM_ONE).type('{enter}');
      cy.get('[data-cy="taskText"]').should('contain', TODO_ITEM_ONE);
    });

    it('should clear text input field when an item is added', function () {
      cy.get('[data-cy="inputText"]').type(TODO_ITEM_ONE).type('{enter}');
      cy.get('[data-cy="inputText"]').should('have.text', '');
    });

    it('does nothing without entered text', () => {
      cy.get('[data-cy="inputText"]').type('{enter}');
      cy.get('[data-cy="labelTaskText"]').should('have.length', 0);
    });
  });

  context('Item toogle', function () {
    it('should allow me to mark items as complete', function () {
      cy.get('[data-cy="inputText"]').type(TODO_ITEM_ONE).type('{enter}');
      cy.get('[data-cy="labelTaskText"]').type('click');
      cy.get('[data-cy="toogleTask"]').should('be.checked');
      cy.get('[data-cy="labelTaskText"]').type('click');
      cy.get('[data-cy="toogleTask"]').should('not.be.checked');
    });

    it('should delete item', () => {
      cy.get('[data-cy="inputText"]').type(TODO_ITEM_ONE).type('{enter}');
      cy.get('[data-cy="labelTaskText"]').should('have.length', 1);
      cy.get('[data-cy="deleteBtn"]').click({ force: true });
      cy.get('[data-cy="labelTaskText"]').should('have.length', 0);
    });

    context('Counter', function () {
      it('should display the current number of todo items', function () {
        cy.get('[data-cy="inputText"]').type(TODO_ITEM_ONE).type('{enter}');
        cy.get('[data-cy="countItemLeft"]').contains('1 item left');
        cy.get('[data-cy="inputText"]').type(TODO_ITEM_ONE).type('{enter}');
        cy.get('[data-cy="countItemLeft"]').contains('2 items left');
      });
    });
  });

  context('Clear completed button', function () {
    it('should remove completed items when clicked', function () {
      cy.get('[data-cy="inputText"]').type(TODO_ITEM_ONE).type('{enter}');
      cy.get('[data-cy="clearAllComplited"]').click();
      cy.get('[data-cy="labelTaskText"]').should('have.length', 1);
      cy.get('[data-cy="labelTaskText"]').click();
      cy.get('[data-cy="clearAllComplited"]').click();
      cy.get('[data-cy="labelTaskText"]').should('have.length', 0);
    });
  });
});
