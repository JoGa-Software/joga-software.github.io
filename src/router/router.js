import VueRouter from 'vue-router'
import Home from '../Screens/Home.vue'
import Contact from '../Screens/Contact.vue'
import Resume from '../Screens/Resume'
import DreamEC from '../Screens/DreamEC'
import SimpleMetronome from '../Screens/SimpleMetronome'

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/contact', component: Contact },
        { path: '/resume', component: Resume },
        { path: '/iosGame', component: DreamEC },
        { path: '/simpleMetronome', component: SimpleMetronome }
    ]
})

