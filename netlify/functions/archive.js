const messages = require("./messages");

exports.handler = async function(event, context) {
    if(event.httpMethod === "GET"){
        return{
            statusCode: 200,
            body: JSON.stringify(messages)
        }
    }

    return{
        statusCode: 405,
        body: "Method Not Allowed"
    };
};
