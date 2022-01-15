module.exports = {
    post: {
        tags: ["Push"],
        description: "Push link",
        operationId: "postLink",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Link"
                    }
                },
            },
        },
        responses: {
            201: {
                description: "Link was pushed"
            },
            400: {
                description: "Error throwen by pushbullet"
            }
        },
    },
};