module.exports = {
    get: {
        tags: ["Device"],
        description: "Get devices",
        operationId: "getDevices",
        parameters: [],
        responses: {
            200: {
                description: "Devices was found",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Devices"
                        }
                    },
                },
            },
        },
    },
};