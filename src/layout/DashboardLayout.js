import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-base-200 text-base-content ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  ">
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers" className='font-bold text-center text-2xl'>All users</Link></li>
                                <li><Link to="/dashboard/allsellers" className='font-bold text-center text-2xl'>All Sellers</Link></li>
                                <li><Link to="/dashboard/allbuyers" className='font-bold text-center text-2xl'>All Buyers</Link></li>

                            </>
                        }
                        {
                            isSeller && <>
                                <li><Link to="/dashboard/addproduct" className='font-bold text-center text-2xl'>Add Product</Link></li>
                                <li><Link to="dashboard/myproduct" className='font-bold text-center text-2xl'>My Products</Link></li>
                            </>
                        }

                        {
                            isBuyer &&
                            <li><Link to="/dashboard/myorders" className='font-bold text-center text-2xl'>My Orders</Link></li>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;