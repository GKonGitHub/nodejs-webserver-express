const { response } = require('express')
const express = require('express')

const app = express()

let notes = [  
    {
        id: 1,
        content: "HTML is easy",
        date: "2022-05-30T17:30:31.098Z",
        important: true
      },
      {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2022-05-30T18:39:34.091Z",
        important: false
      },
      {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2022-05-30T19:20:14.298Z",
        important: true
      }
  ]





app.use(express.json())



app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html")
});
  


app.get('/api/notes', (request, response) => {
    response.json(notes)
  })


  app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    
    if (note) {
      response.json(note)
    } else {
      response.status(404).end()
      
    }
  })

  app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
    response.status(204).end()    
  }
    
  )
 
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.post('/api/notes/', (request, response) => {
    if (!request.body) return response.sendStatus(400);    
    console.log( request.body );
    console.log('Got body:', request.body);
    response.sendStatus(200).end()
  })



const PORT = 3001

app.listen(PORT , () => {

    console.log('Server is running on port ${PORT}')

})

