import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchProducts, fetchCategoryProducts } from '../utilis';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/productCard';
import { ALLOWED_CATEGORIES } from '../routes';
const Product = () => {
    const { category } = useParams; 
    const [allProducts, setAllProducts] = useState([]);
    const [Products, setProducts] = useState([]);
    const handleFilterProducts = (productCategory = null) => {
        if (productCategory) {
            const filterProducts = allProducts.filter(
                (product) => product.category === productCategory
            );
            
            setProducts(filterProducts);
        }
        else {
            setProducts(allProducts);
        }
    };
    useEffect(() => {
        if (!category) {
            const getProducts = async () => {
                const response = await fetchProducts();
                setProducts(response);
                setAllProducts(response);
            };
            getProducts().catch((error) => console.error(error));
        }
        else {
            const getCategoryProducts = async () => {
                const response = await fetchCategoryProducts(category);
                setProducts(response);
                setAllProducts(response);
            };
            getCategoryProducts().catch((error) => console.error(error));
        }

    }, [handleFilterProducts, category]);
    return (
        <div className='products-cont'>
            <div className='category-select'>
                <span className="select-cat-span" onClick={()=> handleFilterProducts(ALLOWED_CATEGORIES.All)}>All</span>
                <span className='select-cat-span' onClick={()=> handleFilterProducts(ALLOWED_CATEGORIES.Women)}>Women's</span>
                <span className='select-cat-span' onClick={()=> handleFilterProducts(ALLOWED_CATEGORIES.Men)}>Men's</span>
      <div className='product-card-cont'>
          {
                Products.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        categoryName={product.categoryName}
                        img={product.image}
                    title={product.title}       
                        productName={product.productName}
                        description={product.description}
                        price={product.price}
                        rating={product.rating}
                    
        
                    />
                ))
          }
      
                </div>
            </div>
        </div>
  )
}

export default Product
