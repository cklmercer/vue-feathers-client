import state from './state'

export default {
    'auth.token': state => state.token,
    'auth.user': state => state.user 
}
