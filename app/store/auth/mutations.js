import state from './state'

export const mutations = {
    LOGIN: 'auth/LOGIN',
    LOGOUT: 'auth/LOGOUT'
}

export default {
    // Login
    [mutations.LOGIN](state, { token, user }) {
        state.token = token
        state.user = user
    },

    // Logout
    [mutations.LOGOUT](state) {
        state.token = null
        state.user = null
    }
}
