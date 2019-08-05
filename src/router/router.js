import VueRouter from 'vue-router'
import Home from '../Screens/Home.vue'
import Contact from '../Screens/Contact.vue'
import Projects from '../Screens/Projects.vue'

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/contact', component: Contact },
        { path: '/projects', component: Projects }
    ]
})

