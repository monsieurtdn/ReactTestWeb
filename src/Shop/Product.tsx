import "./Shop.css";

interface productProps {
    title: string;
    description: string;
    price: number;
    image: string;
    color: string;
    rating: number;
}




const Product: React.FC<productProps> = ({ title, description, price, image, color, rating }) => {

    const StarRender = () => {
        // Tạo một mảng chứa thông tin về 5 hình ảnh
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push({
                src: 'star.img',
                alt: 'Hình ảnh star',
                key: i, // Cần phải có một key duy nhất cho mỗi thẻ trong React
            });
        }
        return (
            <div>
                {/* Sử dụng map để render các thẻ <img> từ mảng images */}
                {stars.map((star) => (
                    <img key={star.key} src={star.src} alt={star.alt} />
                ))}
            </div>
        );
    }


    return (
        <div className="Product">
            <img
                src={image}
                className="productPhoto"
                alt="product"
            />
            <div className="productContent">
                <b className='productTitle'>{title}</b>
                <h4 className="productProfile"> {price} VND</h4>
                <StarRender />
            </div>
        </div>
    )
}
export default Product;