import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const url = `http://localhost:5000/allbookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url,
                {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                }
            );
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className="text-3xl mb-5 mt-8 ml-5">{user?.displayName}'s Booked Products</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Booked Product Name</th>
                            <th>Booked Product Price</th>
                            {/* <th>Date</th>
                            <th>Time</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                {/* <td>{user.displayName}</td> */}
                                <td>{product.products}</td>
                                <td>${product.resell_price}</td>
                                {/* <td>{product.appointmentDate}</td>
                                <td>{product.slot}</td> */}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;