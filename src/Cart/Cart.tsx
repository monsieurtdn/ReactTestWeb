import { Col } from "react-bootstrap";
import Product from "./Product";
import './App.css';

let products = [
    {
        price: 6940000,
        title:'Điện thoại Samsung Galaxy A31',
        description:'Galaxy A31 là mẫu smartphone tầm trung mới ra mắt đầu năm 2020 của Samsung. Thiết bị gây ấn tượng mạnh với ngoại hình thời trang, cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin khủng lên đến 5000 mAh.',
        image: 'image.jpg',
    }
]

const Cart: React.FC = () => {
    return(
    <>
        <Col className='cart' >
            <h4>Cart</h4>
            <p className='note'>2 item in bag</p>

            <Product price={products[0].price} description={products[0].description} title={products[0].title} image={products[0].image}></Product>

            <Product price={products[0].price} description={products[0].description} title={products[0].title} image={products[0].image}></Product>


            <div className='calculate'>
        <table>
          <tr ><th className='price'>SubTotal</th><th className='priceNum'>13 880 000 VND</th></tr>
          <tr ><th className='price'>Tax</th><th className='priceNum'>1 388 000 VND</th></tr>
          <tr ><th className='price'>Total</th><th className='priceNum'>15 168 000 VND</th></tr>
        </table>
        </div>
           
        </Col>
    </>);
}

export default Cart;