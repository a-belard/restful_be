/** Login and signup */
module.exports = {
  "/user/signup": {
    post: {
      tags: ["Users"],
      summary: "Signup",
      description: "Signup a new user",
      operationId: "signup",
      consumes: ["application/json"],
      produces: ["application/json"],
      parameters: [
        {
          in: "body",
          name: "body",
          description: "Signup a new user",
          required: true,
          schema: {
            type: "object",
            properties: {
              names: {
                type: "string",
                description: "User names",
              },
              email: {
                type: "string",
                description: "User email",
              },
              phone: {
                type: "string",
                description: "User phone",
              },
              nationalId: {
                type: "string",
                description: "User national id",
              },
              password: {
                type: "string",
                description: "User password",
              },
              confirmPassword: {
                type: "string",
                description: "User confirm password",
              },
            },
          },
        },
      ],
      responses: {
        201: {
          description: "User created successfully",
          schema: {
            type: "object",
            properties: {
              success: {
                type: "boolean",
                description: "Success",
              },
              token: {
                type: "string",
                description: "Token",
              },
            },
          },
        },
      },
    },
  },
  "/user/login": {
    post: {
      tags: ["Users"],
      summary: "Login",
      description: "Login a user",
      operationId: "login",
      consumes: ["application/json"],
      produces: ["application/json"],
      parameters: [
        {
          in: "body",
          name: "body",
          description: "Login a user",
          required: true,
          schema: {
            type: "object",
            properties: {
              email: {
                type: "string",
                description: "User email",
              },
              password: {
                type: "string",
                description: "User password",
              },
            },
          },
        },
      ],
      responses: {
        200: {
          description: "User logged in successfully",
          schema: {
            type: "object",
            properties: {
              success: {
                type: "boolean",
                description: "Success",
              },
            },
          },
        },
      },
    },
  },
};
