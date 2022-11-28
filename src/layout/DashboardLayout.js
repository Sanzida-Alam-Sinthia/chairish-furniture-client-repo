import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../Pages/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
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
                        {/* <li><Link to="/dashboard">My Appointments</Link></li> */}

                        <li><Link to="/dashboard/addproduct">Add Product</Link></li>



                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers" className='font-bold text-center'>All users</Link></li>
                                <li><Link to="/dashboard/allsellers" className='font-bold text-center'>All Sellers</Link></li>
                                <li><Link to="/dashboard/allbuyers" className='font-bold text-center'>All Buyers</Link></li>

                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;