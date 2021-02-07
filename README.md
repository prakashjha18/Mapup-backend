# Mapup-Back-end

## Usage

### ES Modules in Node

We us ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

### Env Variables
you need to have either MONGO_URI from atlas or have Mongo db installed in local system

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = mongodb://localhost:27017/mapup

JWT_SECRET=anything
```

### Install Dependencies 

```
npm install
```

### Run

```
npm run dev

```
### POSTMAN TESTING

import the collections and environment from postman folder to test

### routes

All incoming requests and response is stored in backend/logs.txt
Screenshots in scrennshots folder

1) REGISTER : http://localhost:5000/api/users/
TYPE:POST
 
Input :
```
{
    "name":"abs",
    "email":"mgf@example.com",
    "password":"123456"
}
```
Output :
```
{
    "_id": "601f265a2fc61ba67e8c7268",
    "name": "abs",
    "email": "mgf@example.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMWYyNjVhMmZjNjFiYTY3ZThjNzI2OCIsImlhdCI6MTYxMjY1NDE3MSwiZXhwIjoxNjE1MjQ2MTcxfQ.3zWl-FWbewWV8oitf3HOUtf26uMXZDhtEZxlzA97PQc"
}
```
2) LOGIN : http://localhost:5000/api/users/login (with Bearer token)
TYPE:POST

Input :
```
{
    "email":"newf@example.com",
    "password":"123456"
}
```
Output :
```
{
    "_id": "601f1b5e15ebd1890a04740a",
    "name": "abs",
    "email": "newf@example.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMWYxYjVlMTVlYmQxODkwYTA0NzQwYSIsImlhdCI6MTYxMjY1NTUxMiwiZXhwIjoxNjE1MjQ3NTEyfQ.K-n9aT0eG5zStMS6Oyd3CBs6fEoekO7rTmA8rpIoB4E"
}
```

3) GET PROFILE : http://localhost:5000/api/users/profile (with Bearer token from login or register)
TYPE:GET

Output :
```
{
    "_id": "601f1b5e15ebd1890a04740a",
    "name": "abs",
    "email": "newf@example.com"
}
```
4) INTERSECTIONS : http://localhost:5000/api/products//intersections (with Bearer token login or register)
TYPE:POST

Input :
```
{
    "type": "LineString",
    "coordinates": [ [126, -11], [129, -21]]
}
```
Output :
```
{
    "intersections": [
        {
            "id": "L02",
            "points": [
                [
                    127.43478260869566,
                    -15.782608695652174
                ]
            ]
        }
    ],
    "time": 15.930911995470524
}
```
## License

The MIT License

Copyright (c) 2020 Prakash Jha

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
