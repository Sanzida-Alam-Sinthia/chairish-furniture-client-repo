import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layout/DashboardLayout';
import Main from '../layout/Main';
import Blogs from '../Pages/Blogs/Blogs';
import AddAProduct from '../Pages/DashBoard/AddAProduct';
import AllBuyers from '../Pages/DashBoard/AllBuyers';
import AllSellers from '../Pages/DashBoard/AllSellers';
import AllUsers from '../Pages/DashBoard/AllUsers';
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
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddAProduct></AddAProduct>
            },


            // {
            //     path: '/dashboard',
            //     element: <MyAppointment></MyAppointment>
            // },
            // {
            //     path: '/dashboard/allusers',
            //     element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            // },
            // {
            //     path: '/dashboard/adddoctor',
            //     element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            // },
            // {
            //     path: '/dashboard/managedoctors',
            //     element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            // },
        ]
    }

])

export default router;