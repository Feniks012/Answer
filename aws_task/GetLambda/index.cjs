const { DynamoDBClient, QueryCommand } = require("@aws-sdk/client-dynamodb");

exports.handler = async (event) => {
  let response;
  let user_id = event.pathParameters.user_id;

  try {
    const parameters = {
      TableName: "user",
      KeyConditionExpression: "user_id = :user_id",
      ExpressionAttributeValues: {
        ":user_id": { S: user_id },
      },
    };
    console.log(parameters);
    const client = new DynamoDBClient({});
    const command = new QueryCommand(parameters);
    const resp = await client.send(command);
    const userItem = resp.Items[0];
    const user = {
      age: userItem.age.N,
      name: userItem.name.S,
      id: userItem.user_id.S,
    };
    console.log(user);

    response = {
      isBase64Encoded: false,
      statusCode: 200,
      headers: { headerName: "headerValue" },
      body: `User data is ${JSON.stringify(user)}`,
    };
  } catch (error) {
    console.log(error);
    response = {
      isBase64Encoded: false,
      statusCode: 404,
      headers: { headerName: "headerValue" },
      body: `Can't find user with id ${user_id}`,
    };
  }
  console.log(event);
  return response;
};
