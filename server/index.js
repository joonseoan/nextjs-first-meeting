
const next = require('next')
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const filePath = './data.json';
const movieData = require(filePath);
const pathToFile = path.join(__dirname, filePath);
const PORT = process.env.PORT || 3000;

app.prepare().then(() => {

  const server = express();
  server.use(bodyParser.json());

  server.get('/api/v1/movies', (req, res) => {
      return res.json(movieData);
  });

  server.get('/api/v1/movies/:id', (req, res) => {
      const { id } = req.params;
      const movie = movieData.find(movie => id === movie.id);
      if(!movie) throw new Error('Unable to get movie');
      return res.json(movie);
  });

  server.post('/api/v1/movies', (req, res) => {
      const movieInput = req.body;
      movieInput.id = Math.random().toString(36).substr(2, 5);
      movieData.push(movieInput);

      const jsonData = JSON.stringify(movieData, null, 2);
      fs.writeFile(pathToFile, jsonData, err => {
          //   "send" for message
          if(err) { return res.status(422).send(err) };

          return res.send('Movie successfully added')
      });

    //   return res.json({ ...movieInput });
  });

  server.patch('/api/v1/movies/:id', (req, res) => {
      const { id } = req.params;
      const updateMovie = req.body;
      const movieIndex = movieData.findIndex(movie => movie.id === id);
      movieData[movieIndex] = updateMovie;

    //   console.log(movieData)
      
      const jsonData = JSON.stringify(movieData, null, 2);
      fs.writeFile(pathToFile, jsonData, err => {
          //   "send" for message
          if(err) { return res.status(422).send(err) };

          return res.json(updateMovie)
      });
  });

  server.delete('/api/v1/movies/:id', (req, res) => {
      const { id } = req.params;
      // [ !!!!!!!!!!!!!!!!!!!IMPORTANT!!!!!!!!!!!!!!!!!!!! ]
      // WHEN WE USE JSON and "fs", we still need to use JSON file name.
      // A new variable name "filteredData" is not immedittely able to write (fs) the Json data.
      // const filteredData = movieData.filter(movie => movie.id !== id);

      // That is why we used splice instead of "splice" instead of filter.
      const movieIndex = movieData.findIndex(m => m.id === id)
      movieData.splice(movieIndex, 1)

      const jsonData = JSON.stringify(movieData, null, 2);
      fs.writeFile(pathToFile, jsonData, err => {
          //   "send" for message
          if(err) { return res.status(422).send(err) };

          return res.json(`Deleted Movie id: ${id}`);
      });
  });

  //   // sending html.
  server.get('/faq', (req, res) => {
      res.send(`
        <html>
            <head>
                <body>
                    <h1>Hello Next.js Server</h1>
                </body>
            </head>
        </html>
      `);
  });
  
  // For all nextjs server, not express server
  // server.get('*', (req, res) => {
  //   return handle(req, res);

  //   // return json value only in the browser
  //   // return res.json({ message: 'Hello, it is first next js server'})
  // })

  // server.post('*', (req, res) => {
  //   return handle(req, res);
  // })
  

  // without use(handle)
  server.use(handle).listen(PORT, (err) => {
      if (err) throw err
      console.log('> Ready on port ' + PORT)
  })
});







// const next = require('next')
// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');

// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()
// const filePath = './data.json';
// // get file's data
// const movieData = require(filePath);
// // make a path to file
// const pathToFile = path.join(__dirname, filePath);
// const PORT = process.env.PORT || 3000;

// app.prepare().then(() => {

//   const server = express();

//   // because http/https request does not support object.
//   // we need to change req.body to json format.   
//   server.use(bodyParser.json());

//   server.get('/api/vi/movies', (req, res) => {
//       return res.json(movieData);
//   });

//   server.get('/api/vi/movies/:id', (req, res) => {
//       const { id } = req.params;
//       const movie = movieData.find(movie => id === movie.id);
//       if(!movie) throw new Error('Unable to get movie');
//       return res.json(movie);
//   });

//   server.post('/api/vi/movies', (req, res) => {

//       // need to get body-parser
//       const movieInput = req.body;
//       movieInput.id = Math.random().toString(36).substr(2, 5);
//       movieData.push(movieInput);
//       console.log('__dirname: ', __dirname)
//     //   const pathToFile = path.join(__dirname, filePath);
//       console.log('pathToFile:  ====> ', pathToFile);

//       const jsonData = JSON.stringify(movieData, null, 2);
//       fs.writeFile(pathToFile, jsonData, err => {
//           //   "send" for message
//           if(err) { return res.status(422).send(err) };

//           return res.send('Movie successfully added')
//       });

//     //   return res.json({ ...movieInput });
//   });

//   server.patch('/api/vi/movies/:id', (req, res) => {
//       const { id } = req.params;
//       const movie = req.body;
//       return res.json({ message: `Updating Post id: ${id} ${movie} `});
//   });

//   server.delete('/api/vi/movies/:id', (req, res) => {
//       const { id } = req.params;
//       const deletedMovieList = movieData.filter(movie => movie.id !== id);
//       const jsonData = JSON.stringify(deletedMovieList, null, 2);
//       fs.writeFile(pathToFile, jsonData, err => {
//           //   "send" for message
//           if(err) { return res.status(422).send(err) };

//           return res.send(`Deleted Movie id: ${id}`);
//       });
//   });

//   //   // sending html.  
//   server.get('/faq', (req, res) => {
      
//   // if it is a file,
//       //   res.sendHTML()
//       res.send(`
//         <html>
//             <head>
//                 <body>
//                     <h1>Hello Next.js Server</h1>
//                 </body>
//             </head>
//         </html>
//       `);
//   });

//   // 2)
//   // * : handling all of the request.
//   server.get('*', (req, res) => {
//     // [ IMPORTANT ]
//     // next.js is handling requests and providing where we are navigating to.!!!
//     return handle(req, res)
    
//     // return json value only in the browser 
//     // return res.json({ message: 'Hello, it is first next js server'})
//   })
  
//   // without use(handle)
//   server.listen(PORT, (err) => {
//     if (err) throw err
//     console.log('> Ready on port ' + PORT)
//   })

//   // 1)
//   // [ Comment out]
//   // * : handling all of the request.
//   //   server.get('*', (req, res) => {
//   //     return handle(req, res)
//   //   })
  
//   // [ We can use this only ]
//   // "handle" argument returns here
//   //   server.get('*', (req, res) => {
//   //     return handle(req, res)
//   //   })
//   //   server.use(handle).listen(PORT, (err) => {
//   //     if (err) throw err
//   //     console.log('> Ready on port ' + PORT)
//   //   })
// });
