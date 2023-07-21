import "./Shop.css";

import Product from "./Product";
import BuyProduct from "./BuyProduct";
import { Col } from "react-bootstrap";
import Search from "antd/es/input/Search";
import type { MenuProps } from 'antd';
import { Dropdown, Space, Input } from 'antd';
import { FilterFilled } from "@ant-design/icons"
import { useState } from "react";
let products = [
    {
        price: 6940000,
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
    price: number;
    image: string;
    color: string;
    rating: number;

}




const Shop: React.FC = () => {
    


    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <div>
              <p>Giá</p>

              <div style={{display: 'inline'}}><p>Từ:</p> <Input className="text" value={"0 VNĐ"}/></div>

              <div style={{display: 'inline'}}> <p>Đến:</p> <Input className="text" value={"10 000 000 VNĐ"}/></div>
            </div>
          ),
        },
        {
          key: '2',
          label: (
            <div>
              <p>Đánh giá</p>

              <div style={{display: 'inline'}}>  <p>Từ:</p> <Input className="text" value={"1 sao"}/></div>

             <div style={{display: 'inline'}}> <p>Đến:</p> <Input className="text" value={"5 sao"}/> </div>
            </div>
          ),

        }
      ];

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
                    <h4 style={{ paddingLeft: '15px' }}>Shop</h4>


                    <div style={{ justifyContent: 'flex-end', display: 'inline-flex', paddingLeft: '15px'}}>
                        <div>Shop</div>
                        <div style={{
                            fontSize: '150%', position: 'absolute',right: '250px', top: '25px'

                        }}>
                            <Search placeholder=" " style={{ width: 200 }} />
                            <Dropdown menu={{ items }} trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>

                                    <FilterFilled/>
                                    </Space>
                                </a>
                            </Dropdown>

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