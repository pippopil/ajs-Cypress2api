import user from "../fixtures/user.json";
import updatedUser from "../fixtures/update-user.json";

describe("API tests of the PetStore", () => {
  it("Should create a user", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      body: user,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
    cy.request({
      method: "GET",
      url: `https://petstore.swagger.io/v2/user/${user.username}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.eq(user);
    });
  });

  it("Should update a user", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      body: user,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
    cy.request({
      method: "PUT",
      url: `https://petstore.swagger.io/v2/user/${user.username}`,
      body: updatedUser,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
    cy.request({
      method: "GET",
      url: `https://petstore.swagger.io/v2/user/${updatedUser.username}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.eq(updatedUser);
    });
  });

  it("Should delete a user", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      body: user,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
    cy.request({
      method: "DELETE",
      url: `https://petstore.swagger.io/v2/user/${user.username}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});