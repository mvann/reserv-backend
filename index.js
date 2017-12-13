var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var request = require('request');
var searchClover = require('./searchClover.js')

io.on('connection', (socket) => {
  console.log("Connected to:", socket.id);
  socket.on('search', (value) => {
    // request.get(
    //   'https://apisandbox.dev.clover.com/v3/merchants/' + '8T8VYFD236V4W' + '/items?=access_token=' + '37231e0b-b510-6a35-076d-7376cc13e791',
    //   (err, res, body) => {
    //     socket.emit('searchResult', JSON.parse(body));
    //   }
    // );
    var searchResult = searchClover(query);
    console.log(searchResult);
    socket.emit(
      'searchResult',
      [
        {
          name: "La Cantina",
          hours: "12 P.M. - 2 P.M., 4 P.M. - 6 P.M.",
          type: ["easy-eat", "quick", "fast", "all"],
          loading: false,
          url: "https://cantina.42.us.org/",
          img: "../images/GagAElu.jpg"
        },
        {
          name: "BJ's",
          hours: "11 A.M. - 11 P.M.",
          type: ["brewery", "steakhouse"],
          loading: false,
          url: "https://www.bjsrestaurants.com/",
          img: "../images/bjs.jpg"
        },
        {
          name: "Olive Garden",
          hours: "12 P.M. - 11 P.M.",
          type: ["italian", "winery", "fancy"],
          loading: false,
          url: "http://www.olivegarden.com/home",
          img: "../images/OliveGardenLogo3.png"
        },
        {
          name: "Chili's",
          hours: "",
          type: ["burgers", "family", "friendly", "all"],
          loading: false,
          url: "",
          img: ""
        }
      ]
    );
  });
});

const port = 8000;
http.listen(port, () => {
  console.log('listening on port ', port);
});
