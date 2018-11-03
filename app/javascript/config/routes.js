import Home from '../modules/home'
import Contact from '../modules/contact'
import Menu from '../modules/menu'

const routes = [
  { path: '/',
    component: Home,
    key: 'Home'
  },
  { path: '/contact',
    component: Contact,
    key: 'Contact'
  },
  { path: '/menu',
    component: Menu,
    key: 'Menu'
  }
]

export default routes

const navRoutes = routes.reduce((prev, curr) => {
  return [...prev, ...(curr.key !== 'Home' ? [curr] : [])]
}, [])

export { navRoutes }
