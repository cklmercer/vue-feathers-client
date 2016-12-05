import feathers from 'feathers-client'
import socketio from 'feathers-socketio/client'

const io = require('socket.io-client')
const socket = io('http://localhost:3030')

const api = feathers()
    .configure(feathers.hooks())
    .configure(socketio(socket))
    .configure(feathers.authentication({ storage: window.localStorage }))

export default api
