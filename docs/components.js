module.exports = {
    components: {
        schemas: {
            Devices: {
                type: "object",
                properties: {
                    accounts: {
                        type: "array",
                        description: "Not sure",
                        example: []
                    },
                    blocks: {
                        type: "array",
                        description: "Not sure",
                        example: []
                    },
                    channels: {
                        type: "array",
                        description: "Not sure",
                        example: []
                    },
                    chats: {
                        type: "array",
                        description: "Not sure",
                        example: []
                    },
                    clients: {
                        type: "array",
                        description: "Not sure",
                        example: []
                    },
                    contacts: {
                        type: "array",
                        description: "Not sure",
                        example: []
                    },
                    devices: {
                        type: "array",
                        description: "Not sure",
                        example: [{"active":true,
                            "iden":"ujz0MIzhz52sjvBHVYEb9M",
                            "created":1642280981.6127958,
                            "modified":1642280981.612798,
                            "type":"firefox",
                            "kind":"firefox",
                            "nickname":"Firefox",
                            "manufacturer":"Mozilla",
                            "model":"Firefox",
                            "app_version":362,
                            "pushable":true,
                            "icon":"browser"
                        }]
                    },
                    grants: {
                        type: "array",
                        description: "Not sure",
                        example: []
                    },
                    pushes: {
                        type: "array",
                        description: "Not sure",
                        example: []
                    },
                    profiles: {
                        type: "array",
                        description: "Not sure",
                        example: []
                    },
                    subscriptions: {
                        type: "array",
                        description: "Not sure",
                        example: []
                    },
                    texts: {
                        type: "array",
                        description: "Not sure",
                        example: []
                    }
                },
            },
            Note: {
                type: "object",
                properties: {
                    device: {
                        type: "string",
                        description: "Where to send push",
                        example: "ujz0MIzhz52sjvBHVYEb9M"
                    },
                    title: {
                        type: "string",
                        description: "What title push have",
                        example: "DNS down"
                    },
                    msg: {
                        type: "string",
                        description: "Message to be pushed",
                        example: "Cannot contact dns server, check it out"
                    }
                }
            },
            Link: {
                type: "object",
                properties: {
                    device: {
                        type: "string",
                        description: "Where to send push",
                        example: "ujz0MIzhz52sjvBHVYEb9M"
                    },
                    title: {
                        type: "string",
                        description: "What title push have",
                        example: "Cool github"
                    },
                    url: {
                        type: "string",
                        description: "What url push have",
                        example: "https://github.com/theredwiking"
                    },
                    msg: {
                        type: "string",
                        description: "Message to be pushed",
                        example: "Check out this github profile"
                    }
                }
            }
        },
    },
};
