import Home from './components/Home'
// import User from './components/user/User'
import UserDetail from './components/user/UserDetail'
import UserEdit from './components/user/UserEdit'
import UserStart from './components/user/UserStart'
import Header from './components/Header'

// const User = resolve => {
//   require.ensure(['./components/user/User'], () => {
//     resolve(require('./components/user/User'))
//   }, 'user')
// }

const User = () => import('./components/user/User')

export const routes = [
  { path: '/', name: 'home', components: {
    default: Home,
    'header-top': Header
  }},
  { path: '/user', component: User,
    children: [
      { path: ':id', component: UserDetail},
      { path: ':id/edit', component: UserEdit, name: 'userEdit'},
      { path: '', component: UserStart}
    ]
  },
  { path: '*', redirect: { name: 'home'}}
]
