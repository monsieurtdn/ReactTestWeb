import "./Shop.css";
import Product from "./Product";
import { Button } from "react-bootstrap";
import Shop from "./Shop";
import React from "react";
import { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";



interface product {

    title: string;
    description: string;
    price: number;
    image: string;
    color: string;
    rating: number;

}
function addSpaceToNumber(n: number) {
 
    const numberString = String(n);
    

    let formattedString = '';
    

    for (let i = 0; i < numberString.length; i++) {

      if (i > 0 && (numberString.length - i) % 3 === 0) {
        formattedString += ' ';
      }
      formattedString += numberString[i];
    }
    
    return formattedString;
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
            <div className="Product" style={{marginLeft:'-60px'}}>

                {stars.map((star) => (
                    <img key={star.key} src={star.src} alt={star.alt} />
                ))}
            </div>
        );
    }
    return (
        <>
            <div style={{ position: 'sticky', backgroundColor: '#fff', zIndex: '1', top: '100px', left: '200px', borderBottom: '1px solid #000' }}>
                <h4 style={{ paddingLeft: '15px' }}>Shop</h4>


                <div style={{ justifyContent: 'flex-end', display: 'inline-flex', paddingLeft: '15px' }}>
                    <div>Shop / Product</div>
                    <div style={{ right: '100px', position: 'absolute' }}>
                        <ShoppingCartOutlined style={{
                            fontSize: '150%', position: 'relative',
                            left: '-150px',
                            top: '-5px'
                        }} />
                    </div>
                </div>

            </div>
            <div className="Product">
                <div style={{
                    paddingLeft: "75px"
                }}>
                    <img
                        src={product.image}
                        height="400"
                        width="400"
                        alt="product"
                    />
                </div><div style={{
                    position: "relative",
                    top: "250px",
                    left: "-275px"
                }}>
                    <img
                        src={product.color}
                        height="150"
                        width="150"
                        alt="product"
                    />
                </div>


                <div className="buyContent">
                    <b style={{fontSize: '20px'}}>{product.title}</b>
                    <div style={{fontSize: '20px', fontWeight: 'normal'}}>{product.description}</div>
                    <h4 className="productPrice"> {addSpaceToNumber(product.price)} VND</h4>
                    <StarRender  />
                    <>
                        <Button variant="primary" style={{fontSize: '200%', marginRight:'25px'}}> Mua ngay</Button>
                        <Button variant="success" style={{fontSize: '200%'}}> Thêm vào giỏ hàng</Button>
                    </>


                </div>



            </div>
        </>
    )
}

export default BuyProduct;