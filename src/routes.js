import MapPage from './components/booking/map/page.vue'
import ServicePage from './components/booking/service/page.vue'

export default [{
        name: 'map',
        path: '/',
        component: MapPage,
        meta: {
            auth: false
        },
    },
    {
        name: 'services',
        path: '/services',
        component: ServicePage,
        meta: {
            auth: false
        }
    }
]