# API Development and Documentation Final Project

## Wills Blog App





POST user 


Request : {
    "first_name": "Sammy",
    "last_name": "Lewis",
    "role": "user",
    "disable_account": false,
    "facebook_link": "https://me",
    "linkedIn_link":"https://me",
    "instagram_link":"https://",
    "github_link": "https://me",
    "nick_name": "lewisCreed"
}

Response:
{
  "success": true,
  "user": {
    "disable_account": false,
    "facebook_link": "https://me",
    "github_link": "https://me",
    "id": 2,
    "instagram_link": "https://",
    "linkedIn_link": "https://me",
    "nick_name": "lewisCreed",
    "role": "user"
  }
}

POST Category

Request 
{
    "type": "Politics"
}

Response
{
  "success": true
}

