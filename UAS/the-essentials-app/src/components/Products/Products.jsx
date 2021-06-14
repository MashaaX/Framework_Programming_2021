import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product'

const products = [
    { id: 1, name: 'Shoes', description: 'Yeezy', price: 'Rp.8000', image: 'https://cdn.shopify.com/s/files/1/0255/9429/8467/products/yeezy-450-cloud-white-h68038_6_umreo3_1800x1800.jpg'},
    { id: 2, name: 'Gun', description: 'Mac-10', price: 'Rp.9000', image: 'https://photo.weaponsystems.net/image/s-lightbox/n-MAC-10/--/img/ws/fa_smg_mac10_v1.jpg'},
];

const Products = () => {
    return(
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product = { product } />
                    </Grid>
                ) )}
            </Grid>
        </main>
    )
};

export default Products;