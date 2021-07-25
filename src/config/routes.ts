import IRoute from "../interfaces/IRoute"
import HomePage from '../view/Home';
import ProductPage from '../view/Product'
import CreateAccountPage from '../view/CreateAccount';
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
    {
        path: '/create-account',
        name: 'Create Account',
        component: CreateAccountPage,
        exact: false,
    }
]

export default routes;