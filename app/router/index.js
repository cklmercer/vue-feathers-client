// Import controllers.
import AppController from './app-controller'

// Export application router.
export default {
    mode: 'history',
    routes: [
        ...AppController
    ]
}
