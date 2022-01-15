module.exports = {
    post: {
        tags: ["Push"],
        description: "Push note",
        operationId: "postNote",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Note"
                    }
                },
            },
        },
        responses: {
            201: {
                description: "Note was pushed"
            },
            400: {
                description: "Error throwen by pushbullet"
            }
        },
    },
};