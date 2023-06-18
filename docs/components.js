// user: names, email, phone, nationalId, password, role, status, createdAt, updatedAt
//model owner is made up of names,national ID, phone number, address
// component schemas
module.exports = {
  components: {
    schemas: {
      User: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "User id",
          },
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
          role: {
            type: "string",
            description: "User role",
          },
          status: {
            type: "boolean",
            description: "User status",
          },
          createdAt: {
            type: "string",
            description: "User created at",
          },
          updatedAt: {
            type: "string",
          },
        },
      },
      Owner: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "Owner id",
          },
          names: {
            type: "string",
            description: "Owner names",
          },
          nationalId: {
            type: "string",
            description: "Owner national id",
          },
          phone: {
            type: "string",
            description: "Owner phone",
          },
          address: {
            type: "string",
            description: "Owner address",
          },
          createdAt: {
            type: "string",
            description: "Owner created at",
          },
          updatedAt: {
            type: "string",
          },
        },
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};
