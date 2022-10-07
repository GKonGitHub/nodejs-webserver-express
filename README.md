Tutorial link:  https://fullstackopen.com/en/part3/node_js_and_express


Simple web server backend 

start script specified in package.json 
entry point specifies as index.js creating a  http server , specifying the with Content type header and port  and then listening on that port 
when the start script is run, we cnatest it out on the browser, which displays hello world 

if the port is in use, it runs an exception 

const http = require('http') 

- import Node's built-in web server module

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Hello World')
}) 
- createserver method of http module to create a new web server 

an event handler is registered to the server tht is called every time an http request is made to the server's address

the requestisresponsed with status code 200 with content type headerset to text/plain  
and the text to bereturned is hello world 

we then bind the http server to the app variable to listen to requests on port 3001

the backend server offers raw data in json format to the frontend 

instead of returning helloworld, we can return a json string 
notes array gets transformed into JSON with the JSON.stringify(notes)


Implementing our server code directly with Node's built-in http web server is possible. However, it is cumbersome, especially once the application grows in size.

Many libraries have been developed to ease server side development with Node, by offering a more pleasing interface to work with the built-in http module. These libraries aim to provide a better abstraction for general use cases we usually require to build a backend server. By far the most popular library intended for this purpose is express.

Install expressas a project dependency 

npm install express

the dependency is added to package.json

source code for the dependency is installed to the node_modules directory located in the root of the project

The versioning model used in npm is called semantic versioning.

The caret in the front of ^4.17.2 means that if and when the dependencies of a project are updated, the version of express that is installed will be at least 4.17.2. However, the installed version of express can also be one that has a larger patch number (the last number), or a larger minor number (the middle number). The major version of the library indicated by the first major number must be the same

npm update

to install the dependencies on another computer, run npm install

If the major number of a dependency does not change, then the newer versions should be backwards compatible. This means that if our application happened to use version 4.99.175 of express in the future, then all the code implemented in this part would still have to work without making changes to the code.

we can now turn our static web server into an express web server 

const express = require('express')
const app = express()

function used to create an express appication stored in the app variable 

event handler that is used to handle HTTP GET requests made to the application's / root
app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})


The event handler function accepts two parameters. The first request parameter contains all of the information of the HTTP request, and the second response parameter is used to define how the request is responded to

the request is answered by using the send method of the response object

In our code, the request is answered by using the send method of the response object. Calling the method makes the server respond to the HTTP request by sending a response containing the string <h1>Hello World!</h1>that was passed to the send method. Since the parameter is a string, express automatically sets the value of the Content-Type header to be text/html. The status code of the response defaults to 200.

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

calling this method makes the server respond to the HTTP reqpest by sending a response containing the notes arra y

wiht express ,we do not need to stringify the json 


adding nodemon
nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.

npm install --save-dev nodemon

By development dependencies, we are referring to tools that are needed only during the development of the application, e.g. for testing or automatically restarting the application, like nodemon.

These development dependencies are not needed when the application is run in production mode on the production server (e.g. Heroku).


node_modules/.bin/nodemon index.js

add it to packages.json as a script and run using npm run dev 

REST

singular things, like notes in the case of our application, are called resources in RESTful thinking. Every resource has an associated URL which is the resource's unique address.


create the unique address for resources by combining the name of the resource type with the resource's unique identifier.

define root url of service 

define the resource type for each resource 

that way, we can create a unique address for a particular element 

we can execute different operations on resources 

define the REST uniform interface, which is a consistent way of defining interfaces that make it possible for systems to cooperate 


Define REST endpoins based on use cases 


Curl command to test endpoint : 

curl -d "id=4&content=fulllstack&date=2022&important=true" -X POST http://localhost:3001/api/notes

https://www.geeksforgeeks.org/how-to-post-json-data-to-server/

We can now build this application by adding a database and customize  it to suit our use case 






























 




