const messages = require("./messagesData");

exports.handler = async function(event, context) {
  if (event.httpMethod === "GET") {
    const lastMessage = messages[messages.length - 1];
    return {
      statusCode: 200,
      body: JSON.stringify(lastMessage)
    };
  }

  return {
    statusCode: 405,
    body: "Method Not Allowed"
  };
};