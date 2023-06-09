import GENERAL_CONSTANTS from "../constants";

const ghostUrl = Cypress.env("ghostUrl");

const CONSTANTS = {
  ERROR_LABELS: [
    "Please enter a site title.",
    "Please enter a name.",
    "Please enter an email.",
    "Password must be at least 10 characters long",
  ],
  MAIN_ERROR_LABEL: "Please fill out every field correctly to set up your site.",
  INVALID_EMAIL_ERROR: "Invalid Email.",
};

beforeEach(() => {
  const signupUrl = `${ghostUrl}/ghost/#/setup`;

  cy.visit(signupUrl);
});

describe("Create ghost account", () => {
  it("should not create a new ghost account when all inputs are empty", () => {
    cy.get(
      "button[data-test-button='setup']"
    ).click();

    cy.get("p.response")
      .should("have.length", 4)
      .each((response, index) => {
        expect(Cypress.$(response).text()).to.contain(
          CONSTANTS.ERROR_LABELS[index]
        );
      });

    cy.get("p.main-error")
      .should("have.length", 1)
      .should("contain", CONSTANTS.MAIN_ERROR_LABEL);
  });

  it("should not create a new ghost account when email is invalid", () => {
    cy.get("input[name='blog-title']").type(GENERAL_CONSTANTS.SITE_TITLE);
    cy.get("input[name='name']").type(GENERAL_CONSTANTS.VALID_NAME);
    cy.get("input[name='email']").type(GENERAL_CONSTANTS.INVALID_EMAIL);
    cy.get("input[name='password']").type(GENERAL_CONSTANTS.VALID_PASSWORD);

    cy.get(
      "button[data-test-button='setup']"
    ).click();

    cy.get("p.response")
      .should("have.length", 4)
      .should("contain", CONSTANTS.INVALID_EMAIL_ERROR);
  });

  it("should not create a new ghost account when password has less than 10 characters", () => {
    cy.get("input[name='blog-title']").type(GENERAL_CONSTANTS.SITE_TITLE);
    cy.get("input[name='name']").type(GENERAL_CONSTANTS.VALID_NAME);
    cy.get("input[name='email']").type(GENERAL_CONSTANTS.VALID_EMAIL);
    cy.get("input[name='password']").type(GENERAL_CONSTANTS.INVALID_PASSWORD);

    cy.get(
      "button[data-test-button='setup']"
    ).click();

    cy.get("p.response")
      .should("have.length", 4)
      .should("contain", CONSTANTS.ERROR_LABELS[3]);
  });

  it("should create a new ghost account when all inputs are valid", () => {
    cy.get("input[name='blog-title']").type(GENERAL_CONSTANTS.SITE_TITLE);
    cy.get("input[name='name']").type(GENERAL_CONSTANTS.VALID_NAME);
    cy.get("input[name='email']").type(GENERAL_CONSTANTS.VALID_EMAIL);
    cy.get("input[name='password']").type(GENERAL_CONSTANTS.VALID_PASSWORD);

    cy.get(
      "button[data-test-button='setup']"
    ).click();


    cy.visit(`${ghostUrl}/ghost/#/signout`);
    cy.wait(10000);
    // cy.get("input[name='identification']").type(GENERAL_CONSTANTS.VALID_EMAIL);
    // cy.get("input[name='password']").type(GENERAL_CONSTANTS.VALID_PASSWORD);
    // cy.get("button.login").click();
  });
});
