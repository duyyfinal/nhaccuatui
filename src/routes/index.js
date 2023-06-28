import Home from '../pages/Home'
import Hearing from '../pages/Hearing'
import Ranking from '../pages/Ranking'
import Profile from '../pages/Profile'
import { DefaultLayout, HeaderOnly } from '../components/Layout'

const publicRoutes = [
    {path: '/', component:Home, layout: DefaultLayout},
    {path: '/hearing', component:Hearing , layout:null},
    {path: '/ranking', component:Ranking},
    {path: '/profile', component:Profile, layout: HeaderOnly},
]

const privateRoutes = [

]
export {publicRoutes, privateRoutes}