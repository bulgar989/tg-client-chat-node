const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require('input') // npm i input
const CronJob = require('cron').CronJob;

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origins: ['http://localhost:8080']
    }
});

app.get('/', (req, res) => {
    res.send('<h1>Hey Socket.io</h1>');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('my message', (socket) => {
        console.log(socket);
    });
    socket.emit('foo', 'sdfsdfgdfsdfsdfdfggdf')
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});

/*
const apiId = 10340139
const apiHash = '2aa33cb1d3d67c59fb75e410d49c607b'
const stringSession = new StringSession('1AgAOMTQ5LjE1NC4xNjcuNDEBu5Z8PwoL+jpcPYG/cv+byK6o4+NBDWDR5pftDRtV3aogxvq3iwXyz9ewezRt6smX0E9YsyYG7k4+ashAx+WHBEqlhuqCcxJIryk299nJggplpM1/YKG4Os9FuukS3lRGjvA/5ldn6auQg+jrI8spl5tcSht5PvXfpBqfJoXLEabb7DwqiWLSqrP9OHCU3A8Ax6ZawECIwXgtSBazfcbk7I0jPQKgVTNSL2OfV8JtIUzFjTa1zPrMuTsAa+VZAYS4jwpja5c+zrqalv7YYK2KghDn4h4fT/upaf5RFnovE+ibZrbz/dDGz2SDcXpZQDWbeGqrrrcOKoeEv9AckR6QFkQ='); // fill this later with the value from session.save()

const client = new TelegramClient(stringSession, apiId, apiHash, {});

let count = 0;
//let job = new CronJob('/20 * * * * *', function() {
(async function run() {
    await client.connect(); // This assumes you have already authenticated with .start()

    const result = await client.invoke(
        new Api.messages.SendMessage({
            peer: -702877163,
            message: "Hello there!",
            randomId: BigInt("-4156887774564"),
            noWebpage: true,
            scheduleDate: 43,
        })
    );
    console.log(result); // prints the result
})()
//}, null, true, 'Europe/Moscow');

//job.start();
*/

/*
(async () => {
    console.log('Loading interactive example...')
    const client = new TelegramClient(stringSession, apiId, apiHash, { connectionRetries: 5 })
    await client.start({
        phoneNumber: async () => await input.text('number ?'),
        password: async () => await input.text('password?'),
        phoneCode: async () => await input.text('Code ?'),
        onError: (err) => console.log(err),
    });
    console.log('You should now be connected.11')
    console.log(client.session.save()) // Save this string to avoid logging in again


    /*
    await client.sendMessage('me', { message: 'Hello!' });

    const result = await client.invoke(
        new Api.channels.CreateChannel({
            title: "крутая группа",
            about: "some string here",
            megagroup: false,
            forImport: true,
            geoPoint: new Api.InputGeoPoint({
                lat: 8.24,
                long: 8.24,
                accuracyRadius: 43,
            }),
            address: "some string here",
        })
    );

    console.log(result); // prints the result

     */
//})()
