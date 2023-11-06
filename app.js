/*
console.log('Hello nodejs!');

console.log('Running the project...');
const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    if (['/index.html'.toUpperCase(), '/'].indexOf(request.url.toUpperCase()) >= 0) {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                response.writeHead(500, { 'Content-Type': 'text/html' })
                response.end('Internal Server Error ' + err)
                return
            }
            response.writeHead(200, { 'Content-Type': 'text/html' })
            response.end(data)
        })
        return
    }
    else if (request.url == '/api/todos/1') {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.write(`{"id": 1, "task": "learn js"}`)
        response.end(); //end the response
    }    
    else if (request.url == '/page1.html') {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write(`<h1 style="color:green">Welcome to my home page</h1>`)
        response.end(); //end the response
    }
    else {
        // write a response to the client
        response.writeHead(500, { 'Content-Type': 'text/html' })
        response.write(`You tried to browse to url: ${request.url} which is not supported`);
        response.end(); //end the response
    }



}).listen(3000); //the server object listens on port 8080


console.log('Hello nodejs..');
let sequential_id = 8
const users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
    }]

function get() {
    return users;
}
function get_by_id(id) {
    // search and return from the json array the record with the given id
    // if not found return { }
const the_users = users.filter(user => user.id === id)
return the_users.length > 0 ? the_users[0] : { };

}
function post(user) {
    // insert the new user with the correct id (sequential)
const new_user = {...user, id: ++sequential_id }
users.push(new_user)
return new_user
}
function put(id, user) {
    // if id exists then replace all fields with the given user
    // if not -- insert this user (with the correct id)
    const the_users = users.filter(user => user.id === id)
    if (the_users.length ==0){
        return post(user)
    }
const index = users.indexOf(the_users[0])
users[index] = { id: id, ...user}
}
function patch(id, user) {
    // if id exists then update only the fields given in the user
    // if not -- do nothing
    const the_users = users.filter(user => user.id === id)
    if (the_users.length ==0){
        return;
    }
    const index = users.indexOf(the_users[0])
    users[index = {...users[index], ...user}]
const update_fields = {"username": "Raz"}
    
}
function delete_by_id(id) {
    // if id exists then rewmove it from the array
    const the_users = users.filter(user => user.id === id)
    if (the_users.length ==0){
        return false;
    }
    const index = indexOf(the_users[0])
    users.splice(index , 1)
    return true;
}

console.log(get());
console.log(get(4));
post ( {
        "name": "Avi hameleh",
        "username": "avi_ham",
        "email": "avi_ham@gmail.com"})
put (10, {
        "name": "Avi hameleh",
        "username": "avi_ham",
        "email": "avi_ham@gmail.com"})      
patch (10, {
        "name": "Avi cohen",
        "username": "avi_cohen",
        "email": "avi_cohen@gmail.com"})      
console.log(get());
delete_by_id(9)
console.log(get_by_id(9));
*/



const express = require('express')
const body_parser = require('body-parser')

const app = express()
const port = 3000
app.use(body_parser.json())

app.get('/api/users', (request , response) => {
    response.json(get())
})
app.get('/api/users/:id', (request , response) => {
    const user_id = parseInt(request.params.id)
    const user = response.json(get_by_id(user_id))
if(user){
    response.json(user)
}
else{
    response.status(404).json({"error": 'cannot'})
}
app.listen(port, () => {
console.log('l');
})
})
