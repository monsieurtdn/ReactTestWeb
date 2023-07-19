import "./Shop.css";
import { useState } from "react";
import BuyProduct from "./BuyProduct";


interface productProps {
    title: string;
    description: string;
    price: number;
    image: string;
    color: string;
    rating: number;
    onClick?: (event: MouseEvent) => void
}




const Product: React.FC<productProps> = ({ onClick, title, description, price, image, color, rating }) => {

    const [showBuyProduct, setBuyProduct] = useState<boolean>(false);

    const handleShowBuyProduct = () => {
        setBuyProduct(true);
        console.log(1)
    }
    
    const handleCloseBuyProduct = () => {
        setBuyProduct(false)
    }


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
        <div className="Product" onClick={handleShowBuyProduct}>
            <img
                src={image}
                className="productPhoto"
                alt="product"
            />
            <div className="productContent">
                <b className='productTitle'>{title}</b>
                <h4 className="productPrice"> {price} VND</h4>
                <StarRender />
            </div>
            {showBuyProduct && <BuyProduct title={title} description={description} price={price} image={image} color={color} rating={rating}/>}
        </div>
       
    )
}

export default Product;