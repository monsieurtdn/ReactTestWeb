import "./Shop.css";

import Product from "./Product";
import BuyProduct from "./BuyProduct";
import { Col } from "react-bootstrap";
import Search from "antd/es/input/Search";

import { FilterFilled } from "@ant-design/icons"
import { useState } from "react";
let products = [
    {
        price: '6 940 000',
        title: 'Điện thoại Samsung Galaxy A31',
        description: 'Galaxy A31 là mẫu smartphone tầm trung mới ra mắt đầu năm 2020 của Samsung. Thiết bị gây ấn tượng mạnh với ngoại hình thời trang, cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin khủng lên đến 5000 mAh.',
        image: 'product.svg',
        color: 'Color.svg',
        rating: 5,
    }
]


interface product {

    title: string;
    description: string;
    price: string;
    image: string;
    color: string;
    rating: number;

}




const Shop: React.FC = () => {


    const [filter, setFilter] = useState<boolean>(false);
    const handleShowFilter = () => {
        setFilter(true)
    }

    const [showAllProduct, setShowAllProduct] = useState<boolean>(true);

    // const 

    const [productState, setProductState] = useState<product>();
    const handleShowBuyProduct = (product: product) => {
        setProductState(product);
        setShowAllProduct(false);
    }
    const ProductRender = () => {
        const n = 6;
        const elements = [];

        for (let i = 0; i < n; i++) {
            elements.push(
                <Product
                    product={products[0]}
                    onClick={handleShowBuyProduct}
                />
            );
        }

        return (
            <div>
                <div style={{ position: 'sticky', backgroundColor: '#fff', zIndex: '1', top: '100px', left: '200px', borderBottom: '1px solid #000' }}>
                    <h4 style={{ paddingBottom: '10px', paddingLeft: '15px' }}>Shop</h4>


                    <div style={{ justifyContent: 'flex-end', display: 'inline-flex', paddingLeft: '15px', paddingBottom: '15px' }}>
                        <div>Shop</div>
                        <div style={{ right: '100px', position: 'absolute' }}>
                            <Search placeholder=" " style={{ width: 200 }} />

                            <FilterFilled style={{ fontSize: '150%' }} />
                        </div>
                    </div>

                </div>
                <div className="productList">{elements}</div>
            </div>
        )
    }
    console.log(productState);
    return (
        <>
            <Col className="shop">




                {showAllProduct && <ProductRender />}
                {!showAllProduct && <BuyProduct product={productState} />}
            </Col>
        </>
    )
}
export default Shop;