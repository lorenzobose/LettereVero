const messages = require("./messages");

exports.handler = async function(event, context) {
  if (event.httpMethod === "POST") {
    const newMessage = JSON.parse(event.body);
    newMessage.id = messages.length + 1;
    newMessage.dataCreazione = new Date().toISOString();
    messages.push(newMessage); 
    
    return {
      statusCode: 200,
      body: JSON.stringify(newMessage)
    };
  }

  return {
    statusCode: 405,
    body: "Method Not Allowed"
  };
};