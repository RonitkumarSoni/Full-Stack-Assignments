# Postman Testing Data

Run each question from its own folder:

```bash
npm start
```

If `npm start` is not present, run:

```bash
node server.js
```

## Basic Server & Routing

Q01: `GET http://localhost:5000/`

Q02: `GET http://localhost:5002/api/message`

Q03: `POST http://localhost:5000/api/user`

```json
{
  "name": "Ronit"
}
```

Q04: `PUT http://localhost:5000/api/user`

```json
{
  "name": "Rahul"
}
```

Q05: `DELETE http://localhost:5005/api/user`

## Middleware

Q06: Open any route in that server and check terminal logs.

Q07: Open any route in that server and check timestamp in terminal.

Q08: `GET /profile?token=123`

Q09: `GET /admin`

## Request Handling

Q10: `GET /search?name=Ronit`

Q11: `GET http://localhost:5011/user/101`

Q12: `POST /api/user`

```json
{
  "name": "Ronit"
}
```

Q13: `POST http://localhost:5013/api/user`

```json
{
  "name": "Ronit"
}
```

For bad request:

```json
{}
```

## CRUD In Memory

Q14: `POST /users`

```json
{
  "id": 1,
  "name": "Ronit"
}
```

Q15: `GET http://localhost:5015/users`

Q16: `GET http://localhost:5016/users/1`

Q17: `PUT http://localhost:5017/users/1`

```json
{
  "name": "Updated Ronit"
}
```

Q18: `DELETE http://localhost:5018/users/1`

## Async & Error Handling

Q19: Hit the async route from that server.

Q20: Hit the try-catch route from that server.

Q21: Hit the error route from that server.

## Real Features

Q22: Add `.env` inside Q22 folder:

```env
PORT=5022
```

Q23: `GET http://localhost:5023/api/users`

Q24: `GET /users?page=1&limit=2`

Q25: `GET /users?name=ron`

Q26: `GET http://localhost:5026/users?order=asc`

Q26 descending: `GET http://localhost:5026/users?order=desc`

## Authentication Basics

Q27: `POST /hash-password`

```json
{
  "password": "123456"
}
```

Q28: `POST http://localhost:5028/compare-password`

```json
{
  "password": "123456",
  "hashedPassword": "$2a$10$exampleHashFromQ27"
}
```

Use the real hash returned by Q27.

Q29: `POST http://localhost:5029/login`

```json
{
  "email": "test@gmail.com"
}
```

Q30: Send JWT token in headers:

```txt
Authorization: Bearer <token>
```
