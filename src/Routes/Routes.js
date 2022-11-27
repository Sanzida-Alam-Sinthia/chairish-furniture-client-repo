import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Blogs from '../Pages/Blogs/Blogs';
import CatagorizedProducts from '../Pages/Home/Catagories/CatagorizedProducts';
import Home from '../Pages/Home/Home';
import Login from '../Pages/login/Login';
import MyWishlist from '../Pages/My Wishlist/MyWishlist';
import SignUp from '../Pages/SignUp/SignUp';

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
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/products/:category_id',
                element: <CatagorizedProducts></CatagorizedProducts>,
                loader: ({ params }) => fetch(`http://localhost:5000/products?category_id=${params.category_id}`)

            }


        ]
    }
])

export default router;