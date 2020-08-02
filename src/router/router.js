import VueRouter from 'vue-router'
import Home from '../Screens/Home.vue'
import Contact from '../Screens/Contact.vue'
import Resume from '../Screens/Resume'
import DreamEC from '../Screens/DreamEC'
import LinkMultiplier from '../Screens/LinkMultiplier'
import LinkMultiplierPP from '../Screens/LinkMultiplierPP'
import SimpleKingJamesBiblePP from '../Screens/SimpleKingJamesBiblePP'
import SimpleMetronome from '../Screens/SimpleMetronome'
import TofuFighter from '../Screens/TofuFighter'
import Tetris from '../Screens/Tetris'
import NotFound from '../Screens/NotFound'

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/contact', component: Contact },
        { path: '/resume', component: Resume },
        { path: '/iosGame', component: DreamEC },
        { path: '/linkMultiplier', component: LinkMultiplier },
        { path: '/linkMultiplierPP', component: LinkMultiplierPP },
        { path: '/simpleKingJamesBiblePP', component: SimpleKingJamesBiblePP },
        { path: '/simpleMetronome', component: SimpleMetronome },
        { path: '/tofuFighter', component: TofuFighter },
        { path: '/tetris', component: Tetris },
        { path: '/*', component: NotFound },
    ]
})

