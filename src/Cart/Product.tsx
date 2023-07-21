import { Button } from 'antd';
import './Cart.css';
import { useState } from 'react';
interface productProps {
    title: string;
    description: string;
    price: number;
    image: string;
}

const Product: React.FC<productProps> = ({ title, description, price, image }) => {

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
                <h4 className="productProfile"> {addSpaceToNumber(price)} VND</h4>
            </div>
        <div style={{display: "inline"}}>
        <Button size='small' style={{textAlign: 'center',margin: '20px'}} onClick={handleIncrease}>+</Button>
        <b> {number} </b>
        <Button size='small' style={{textAlign: 'center',margin: '20px'}} onClick={handleDecrease}>-</Button>
        </div>
        </div></>
    )
}
export default Product;