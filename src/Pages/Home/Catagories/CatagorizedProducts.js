import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';
import BookingModal from './BookingModal/BookingModal';

const CatagorizedProducts = () => {
    const category = useLoaderData();
    const [products, setProducts] = useState(null);

    return (
        <div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6 mb-8 p-7'>
                {
                    category.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        setProducts={setProducts}
                    ></ProductCard>)


                }
            </div>
            {
                products &&
                <BookingModal
                    products={products}
                    setProducts={setProducts}
                ></BookingModal>

            }
        </div>
    );
};


export default CatagorizedProducts;