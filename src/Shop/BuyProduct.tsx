import "./Shop.css";
import Product from "./Product";
import { Button } from "react-bootstrap";
import Shop from "./Shop";
import React from "react";
import { useState } from "react";

interface productProps {
    title: string;
    description: string;
    price: string;
    image: string;
    color: string;
    rating: number;
}



const BuyProduct: React.FC<productProps> = ({ title, description, price, image, color, rating }) => {
    const StarRender = () => {
       
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push({
                src: 'stars.svg',
                alt: 'Hình ảnh star',
                key: i, 
            });
        }
        return (
            <div className="Product">
            
                {stars.map((star) => (
                    <img key={star.key} src={star.src} alt={star.alt} />
                ))}
            </div>
        );
    }
    return (
        <>
        <p className="note">Shop / Product</p>
        <div className="Product">
            <>

            <img
                src={image}
                className="productPhoto"
                alt="product"
            />
                        <img
                src={color}
                className="productPhoto"
                alt="product"
            />
            </>
            <div className="productContent">
                <b className='productTitle'>{title}</b>
                <b className='productDescribe'>{description}</b>
                <h4 className="productPrice"> {price} VND</h4>
                <StarRender />
                <>
                <Button variant="primary" size="lg"> Mua ngay</Button>
                <Button variant="success" size="lg"> Thêm vào giỏ hàng</Button>
                </>
            </div>
        </div>
        </>
    )
}
export default BuyProduct;