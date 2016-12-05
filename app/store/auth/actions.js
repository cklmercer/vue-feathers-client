import { mutations } from './mutations'

export default {
    // Login
    login({commit}, auth) {
        commit(mutations.LOGIN, auth)
    },

    // Logout
    logout({commit}) {
        commit(mutations.LOGOUT)
    }
}
