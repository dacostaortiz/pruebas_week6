class EditPostPage {
  elements = {
    postTitleInput: () => cy.get("textarea[placeholder='Post title']"),
    contentInput: () => cy.get(".koenig-editor__editor"),
    firstPost: () => cy.get(".gh-list-row.gh-posts-list-item").first(),
    navigateToPosts: () =>
      cy.get("a[href='#/posts/?type=draft']").contains("Posts"),
  };

  editPost(title, content) {
    if (title) {
      this.elements.postTitleInput().clear().type(title, { force: true });
      cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    }
    if (content) {
      this.elements.contentInput().clear().type(content, { force: true });
      cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    }
  }
}

export const editPostPage = new EditPostPage();
