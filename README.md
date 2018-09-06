# auth-app
This is an example of an excercise project implementing the `JWT` authentication with` Express JS` using the `passport` and` passport-jwt` libraries. Inside it still uses dummy data or fake user data. You can adjust it.

## Quick Start
Clone this project and run the command to install the required packages.

```
$ cd auth-app-expressjs
$ npm install
```

Don't forget to install nodemon:
```
$ npm install -g nodemon
```

Then run:
```
$ nodemon index.js
```

## API
When the server is running, you can get tokens with:

```
endpoint: /token
method: post
body: {
  email: "sarah@mail.com", 
  password: "sarah123"
}

response:
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.aUb_nRvvc16eD6ZVrHJWVhi0GwjeZpdAIKtHIQa8IpI"
}
```

To prove your token is working, you need to access:
```
endpoint: /
method: get
headers: {
  Authorization: "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.aUb_nRvvc16eD6ZVrHJWVhi0GwjeZpdAIKtHIQa8IpI"
}

response:
{
  "id": 2,
  "name": "Sarah",
  "email": "sarah@mail.com",
  "password": "sarah123"
}
```

