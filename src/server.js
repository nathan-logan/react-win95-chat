const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyCFFZVJpkt_4u_3_QrWM1AOKlXItcEMCao",
  authDomain: "win95chat-39f2c.firebaseapp.com",
  databaseURL: "https://win95chat-39f2c.firebaseio.com",
  projectId: "win95chat-39f2c",
  storageBucket: "win95chat-39f2c.appspot.com",
  messagingSenderId: "644023211847",
  appId: "1:644023211847:web:6ca3c104f558d6c481de62",
  measurementId: "G-HM7SE8HYXV"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const activeUsersDoc = db.collection('active_users').doc('active_users');

// store current active users in firebase

const removeActiveUser = async (displayName) => {
  console.log(`removing ${displayName} from active users`);
  if (!displayName) return;
  activeUsersDoc.update(
    { users: firebase.firestore.FieldValue.arrayRemove(displayName) }
  )
}

const addActiveUser = async (displayName) => {
  console.log(`adding ${displayName} to active users`);
  if (!displayName) return;
  activeUsersDoc.update(
    { users: firebase.firestore.FieldValue.arrayUnion(displayName) }
  )
}

const getActiveUsers = async () => {
  console.log('fetching active users...')
  return activeUsersDoc.get().then(function (doc) {
    if (doc.exists) {
      return doc.data().users;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });
}

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => res.sendFile(__dirname, '/index.html'));

io.on('connect', async (socket) => {
  console.log('Socket connected..');
  socket.num_connections = Object.keys(io.sockets.sockets).length;

  socket.on('message', (msg) => {
    console.log('message received:', msg);
    io.emit('message', msg);
  });

  socket.on('new_connection', async (displayName) => {
    addActiveUser(displayName).then(
      async () => {
        const storedActiveUsers = await getActiveUsers();
        console.log('new_connection storedActiveUsers: ', storedActiveUsers);
        socket.display_name = displayName;
        io.emit('new_connection', { displayName, numConnections: storedActiveUsers.length, activeUsers: storedActiveUsers });
      }
    );
  });

  socket.on('disconnect', async function () {
    removeActiveUser(socket.display_name).then(
      async () => {
        const storedActiveUsers = await getActiveUsers();
        const newArray = storedActiveUsers;
        newArray.splice(newArray.indexOf(socket.display_name));
        console.log('disconnect storedActiveUsers: ', newArray);
        io.emit('new_disconnection', { displayName: socket.display_name, numConnections: newArray.length, activeUsers: newArray });
      }
    );
  });
});

const port = process.env.PORT || 3001;
app.set('port', port);

http.listen(port, () => {
  console.log('listening on *:3001');
});