const express = require('express');
const app = express();
const DB = require('./database.js');

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;  //A ta said that startup should be hosted on localport:4000
                                                                //and simon was localport:3000, so I switched the vals
// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetScores
apiRouter.get('/events', (_req, res) => {
  const events = await DB.getEvents();
  res.send(events);
});

// SubmitScore
apiRouter.post('/events', (req, res) => {
  DB.addEvents(req.body);
  const events = await DB.getEvents();
  // scores = updateEvents(req.body, events);

  res.send(events);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});