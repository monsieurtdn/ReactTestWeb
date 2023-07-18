import { useState } from "react";
import "./Shop.css";
import Product from "./Product";

import { Col } from "react-bootstrap";
let products = [
    {
        price: 6940000,
        title: 'Điện thoại Samsung Galaxy A31',
        description: 'Galaxy A31 là mẫu smartphone tầm trung mới ra mắt đầu năm 2020 của Samsung. Thiết bị gây ấn tượng mạnh với ngoại hình thời trang, cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin khủng lên đến 5000 mAh.',
        image: 'image.jpg',
        color: 'color.jpg',
        rating: 5,
    }
]





const Shop: React.FC = () => {

    const [showBuyProduct, setBuyProduct] = useState<boolean>(false);

    const handleShowBuyProduct = () => {
        setBuyProduct(true)
    }

    const handleCloseBuyProduct = () => {
        setBuyProduct(true)
    }

    const ProductRender = () => {
        const n = 6;
        const elements = [];

        for (let i = 0; i < n; i++) {
            elements.push(<Product title={products[0].title} description={products[0].description} price={products[0].price} image={products[0].image} color={products[0].color} rating={products[0].rating} />);
        }

        return <div>{elements}</div>
    }
    return (
        <>
            <Col className="shop">
                <h4>Shop</h4>
                <p>Shop</p>

                <ProductRender />

            </Col>
        </>
    )
}
export default Shop;