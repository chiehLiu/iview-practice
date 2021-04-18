import Table from './components/table'
import Login from './components/login'
import Home from './components/home'
import Slider from './components/slider'
import Split from './components/split'
import MainPage from './components/mainPage'
import Scroll from './components/scroll'
import Upload from './components/upload'
import ManagePeople from './components/managePeople'
import ContentManage from './components/contentManage'






const routers = [{
        path: '',
        name: 'login',
        component: Login
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        props: true,
        children: [{
                path: 'Table',
                component: Table,
            },
            {
                path: 'Slider',
                component: Slider,
            },
            {
                path: 'Split',
                component: Split,
            },
            {
                path: 'MainPage',
                name: 'homepage',
                component: MainPage,
            },
            {
                path: 'scroll',
                name: 'scroll',
                component: Scroll,
            },
            {
                path: 'upload',
                name: 'upload',
                component: Upload,
            },
            {
                path: 'managepeople',
                name: 'managepeople',
                component: ManagePeople,
            },
            {
                path: 'contentmanage',
                name: 'contentmanage',
                component: ContentManage,
            }

        ]
    },

];
export default routers;