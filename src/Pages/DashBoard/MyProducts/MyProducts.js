import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyProducts = ({ sellerProduct }) => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const url = `http://localhost:5000/sellerproducts?email=${user?.displayName}`;

    const { data: products = [] } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            // {
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
            // }
            // );
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className="text-3xl mb-5 mt-8 ml-5">{user?.displayName}'s Selling Products</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            {/* <th>Date</th>
                            <th>Time</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products &&
                            products?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                {/* <td>{user.displayName}</td> */}
                                <td>{product.name}</td>
                                <td>{product.resell_price}</td>
                                {/* <td>{product.appointmentDate}</td>
                                <td>{product.slot}</td> */}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default MyProducts;