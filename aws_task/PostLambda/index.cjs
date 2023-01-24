const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");
const uuid = require("uuid");
const UUID = uuid.v4();

exports.handler = async (event) => {
  let response;
  try {
    const parameters = {
      TableName: "user",
      Item: {
        user_id: { S: UUID },
        name: { S: event.name },
        age: { N: `${event.age}` },
      },
    };
    console.log(parameters);
    const client = new DynamoDBClient({});
    const command = new PutItemCommand(parameters);
    console.log(await client.send(command));

    response = {
      body: `Succesfull create user  Your ID : ${UUID}`,
    };
  } catch (error) {
    console.log(error);
    response = { body: error.message };
  }

  return response;
};
