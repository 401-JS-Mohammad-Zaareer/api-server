# LAB - 04

## api server

### Author: Mohammad Za'areer

- [tests report](https://github.com/401-JS-Mohammad-Zaareer/api-server/actions)
- [front-end](https://api-server-mongodb.herokuapp.com/)

### Setup

#### `.env` requirements

- `PORT` - Port Number
- `MONGODB_URI` - Remote DB

#### Running the app

- `npm start`
- Endpoint: `/animal`
  - Returns array of Objects

    ```javascript
    [
        {
           "_id": "609c3d737f7a2f13f4d8147d",
           "name": "mealworm",
           "class": "Invertebrates",
           "age": 1,
           "__v": 0
        },
        {
           "_id": "609e5a197f7a2f13f4d81483",
           "name": "shark",
           "class": "Fish",
           "age": 2,
           "__v": 0
        }
    ]
    ```
- Endpoint: `/game`
  - Returns array of Objects
  
    ``` javascript
    [
        {
           "_id": "609c3e387f7a2f13f4d8147e",
           "name": "Call of Duty",
           "size": 50,
           "level": 100,
           "__v": 0
        },
        {
           "_id": "609e59517f7a2f13f4d8147f",
           "name": "GTA",
           "size": 5,
           "level": 6,
           "__v": 0
         }
    ]
    ```
#### Tests

- Unit Tests: `npm run test`
- Lint Tests: `npm run lint`

#### UML
![UML Diagram](uml.png)