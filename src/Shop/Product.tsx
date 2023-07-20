import "./Shop.css";
import { useState } from "react";
import BuyProduct from "./BuyProduct";


interface product {
    title: string;
    description: string;
    price: string;
    image: string;
    color: string;
    rating: number;

}
interface productProps {
    product: product;

    onClick: (product: product) => void
}




const Product: React.FC<productProps> = ({ onClick, product }) => {

    const [showBuyProduct, setBuyProduct] = useState<boolean>(false);

    const handleShowBuyProduct = () => {
        onClick(product);
    }

    const handleCloseBuyProduct = () => {
        setBuyProduct(false)
    }


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
            <div className="Rating">

                {stars.map((star) => (
                    <img key={star.key} src={star.src} alt={star.alt} />
                ))}
            </div>
        );
    }


    return (
        <div className="Product" onClick={handleShowBuyProduct}>
            <img
                src={product.image}
                className="productPhoto"
                alt="product"
            />
            <div className="productContent">
                <b className='productTitle'>{product.title}</b>
                <h4 className="productPrice"> {product.price} VND</h4>
                <StarRender />
            </div>
            {/* {showBuyProduct && <BuyProduct title={title} description={description} price={price} image={image} color={color} rating={rating}/>} */}
        </div>

    )
}

export default Product;