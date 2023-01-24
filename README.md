Method POST : https://00hv0rtch6.execute-api.us-east-1.amazonaws.com/prod/user
Using the Post method we can type name and age we can add the user to the database (as in the example). 
A useful program to check how this method works is "Postman". 
We choose the Post method and paste the link to the method, then choose the body and row sections and enter the following code.

Example:
{
    "name":"Jarek",
    "age":"23"
}

Method GET : https://00hv0rtch6.execute-api.us-east-1.amazonaws.com/prod/user/{user_id}
Using the Get method, we can check if a user with a given id exists and what data they have, and check the status code
Example:
https://00hv0rtch6.execute-api.us-east-1.amazonaws.com/prod/user/105c20c4-2a1a-4ed3-ac12-5a964b31458d