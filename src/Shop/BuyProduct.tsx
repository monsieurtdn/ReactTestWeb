import "./Shop.css";
import Product from "./Product";
import { Button } from "react-bootstrap";
import Shop from "./Shop";
import React from "react";
import { useState } from "react";
import Search from "antd/es/input/Search";
import { FilterFilled } from "@ant-design/icons"



interface product {

    title: string;
    description: string;
    price: string;
    image: string;
    color: string;
    rating: number;

}



const BuyProduct: React.FC<any> = ({ product }) => {
    const StarRender = () => {

        const stars = [];
        for (let i = 0; i < product.rating; i++) {
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
                            <div style={{ position: 'sticky', backgroundColor: '#fff', zIndex: '1', top: '100px', left: '200px', borderBottom: '1px solid #000' }}>
                    <h4 style={{ paddingBottom: '10px', paddingLeft: '15px' }}>Shop</h4>


                    <div style={{ justifyContent: 'flex-end', display: 'inline-flex', paddingLeft: '15px', paddingBottom: '15px' }}>
                        <div>Shop / Product</div>
                        <div style={{ right: '100px', position: 'absolute' }}>
                            <Search placeholder=" " style={{ width: 200 }} />

                            <FilterFilled style={{ fontSize: '150%' }} />
                        </div>
                    </div>

                </div>
            <div className="Product">
                <>

                    <img
                        src={product.image}
                        className="productPhoto"
                        alt="product"
                    />
                    <img
                        src={product.color}
                        className="productColor"
                        alt="product"
                    />
                </>
                <div className="productContent">
                    <b className='productTitle'>{product.title}</b>
                    <b className='productDescribe'>{product.description}</b>
                    <h4 className="productPrice"> {product.price} VND</h4>
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