import './Cart.css';

interface productProps {
    title: string;
    description: string;
    price: number;
    image: string;
}

const Product: React.FC<productProps> = ({ title, description, price, image }) => {
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
            <b>
                &emsp;  + &emsp;  1 &emsp;  - &emsp;
            </b>
        </div></>
    )
}
export default Product;