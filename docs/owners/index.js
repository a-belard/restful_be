/**
 * Router.get('/api/v1/owner', protect, getAllOwners)
Router.post('/api/v1/owner/register', protect, registerOwner);
///get owner vehicles
Router.get('/api/v1/owner/:id/vehicles', protect, getOwnerVehicles);

 */

module.exports = {
  "/owner": {
    get: {
      security: [{ bearerAuth: [] }],
      tags: ["Owners"],
      summary: "Get all owners",
      description: "Get all owners",
      operationId: "getAllOwners",
      consumes: ["application/json"],
      produces: ["application/json"],
      responses: {
        200: {
          description: "OK",
        },
      },
    },
  },
  "/owner/register": {
    post: {
      security: [{ bearerAuth: [] }],
      tags: ["Owners"],
      summary: "Register owner",
      description: "Register owner",
      operationId: "registerOwner",
      consumes: ["application/json"],
      produces: ["application/json"],
      parameters: [
        {
          in: "body",
          name: "body",
          description: "Register owner",
          required: true,
          schema: {
            type: "object",
            properties: {
              names: {
                type: "string",
                description: "Owner names",
              },
              nationalID: {
                type: "string",
                description: "Owner national ID",
              },
              phone: {
                type: "string",
                description: "Owner phone",
              },
              address: {
                type: "string",
                description: "Owner address",
              },
            },
          },
        },
      ],
      responses: {
        201: {
          description: "Owner created successfully",
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
  "/owner/{id}/vehicles": {
    get: {
      security: [{ bearerAuth: [] }],
      tags: ["Owners"],
      summary: "Get owner vehicles",
      description: "Get owner vehicles",
      operationId: "getOwnerVehicles",
      consumes: ["application/json"],
      produces: ["application/json"],
      parameters: [
        {
          in: "path",
          name: "id",
          description: "Owner id",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "OK",
        },
      },
    },
  },
};
