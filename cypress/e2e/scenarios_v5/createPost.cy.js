import GENERAL_CONSTANTS from "../constants";
const ghostUrl = Cypress.env("ghostUrl");

const CONSTANTS = {
  POST_TITLE: "Test post",
  POST_CONTENT: "Test post content",
};

beforeEach(() => {
  cy.visit(`${ghostUrl}/ghost/#/signin`);
  cy.get("input[name='identification']").type(GENERAL_CONSTANTS.VALID_EMAIL);
  cy.get("input[name='password']").type(GENERAL_CONSTANTS.VALID_PASSWORD);
  cy.get("button.login").click();

  cy.get("a[title='New post']").click();
});

describe("Create post", () => {
  it("should create a new post", () => {
    cy.get("textarea[placeholder='Post title']").type(CONSTANTS.POST_TITLE);
    cy.get(".koenig-editor__editor").type(CONSTANTS.POST_CONTENT);

    cy.get("button[data-test-button='publish-flow']").click();
    cy.get("button[data-test-button='continue']").click();

    cy.contains("Test post");
  });

  it("should create a new post with title '(untitled)' when no title is set", () => {
    cy.get(".koenig-editor__editor").type(CONSTANTS.POST_CONTENT);

    cy.get("button[data-test-button='publish-flow']").click();
    cy.get("button[data-test-button='continue']").click();
    cy.get("button[data-test-button='confirm-publish']").click();

    cy.contains("(Untitled)");
  });

  it("should not be able create a new post when it does not have content", () => {
    cy.get("textarea[placeholder='Post title']").type(CONSTANTS.POST_TITLE);

    cy.get("div.gh-publishmenu-trigger").should("not.exist");
  });

  it("should be able to unpublish a post", () => {
    cy.get("textarea[placeholder='Post title']").type(CONSTANTS.POST_TITLE);
    cy.get(".koenig-editor__editor").type(CONSTANTS.POST_CONTENT);

    cy.get("button[data-test-button='publish-flow']").click();
    cy.get("button[data-test-button='continue']").click();

  });

  it("should be able to add email only content", () => {

  });
});
