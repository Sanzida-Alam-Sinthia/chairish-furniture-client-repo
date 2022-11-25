import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Blogs from '../Pages/Blogs/Blogs';
import Home from '../Pages/Home/Home';
import Login from '../Pages/login/Login';
import MyWishlist from '../Pages/My Wishlist/MyWishlist';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/wishlist',
                element: <MyWishlist></MyWishlist>
            },
            {
                path: '/login',
                element: <Login></Login>
            },

        ]
    }
])

export default router;