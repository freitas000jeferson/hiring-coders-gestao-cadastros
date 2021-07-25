import IRoute from "../interfaces/IRoute"
import HomePage from '../view/Home';
import ProductPage from '../view/Product'
const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true
    },
    {
        path: '/product/:id',
        name: 'Product Page',
        component: ProductPage,
        exact: false
    },
]

export default routes;