import Pusher from "pusher-js/react-native";

// Pusher.logToConsole = true;

const pusher = new Pusher('ce8821619298744c2d2d', {
    cluster: 'mt1'
});

const channel = pusher.subscribe('game');

export default channel

// import socketio from 'socket.io-client';
//
// import Echo from "laravel-echo"
//
// export default new Echo({
//     host: 'https://admin.mozart-vr.at',
//     broadcaster: 'socket.io',
//     client: socketio,
// });

