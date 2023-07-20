import { Button } from 'antd';
import './Cart.css';
import { useState } from 'react';
interface productProps {
    title: string;
    description: string;
    price: string;
    image: string;
}

const Product: React.FC<productProps> = ({ title, description, price, image }) => {

    const [number,setNember] = useState(1);
    const handleIncrease = () => {
        if(number <= 99 )setNember(number + 1)
    }
    const handleDecrease = () => {
        if(number > 0 )setNember(number - 1)
    }
    return (
        <><div className='product'>
            <img
                src={image}
                className="productPhoto"
                alt="product"
            />
            <div className="productContent">
                <b className='productTitle'>{title}</b>
                <p className='productDescribe'>{description}
                </p>
                <h4 className="productProfile"> {price} VND</h4>
            </div>
        <div style={{display: "inline"}}>
        <Button size='small' style={{textAlign: 'center',}} onClick={handleIncrease}>+</Button>
        <b> {number} </b>
        <Button size='small' style={{textAlign: 'center',}} onClick={handleDecrease}>-</Button>
        </div>
        </div></>
    )
}
export default Product;