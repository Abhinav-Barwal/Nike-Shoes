import Image from "next/image";
import { Product } from "@/app/data/page";

type CardsProps = {
  product: Product;
};


export default function Cards({ product }: CardsProps) {
    
    return (
        <div className="cards" key={product.id}>
            <div className="product-img">
                <Image src={product.image} alt="Nike Shoes Products" width={300} height={300}></Image>
            </div>
            <div className="product-info">
                <h6 className="title">{product.title}</h6>
                <h6 className="name">{product.name}</h6>
                <p className="type">{product.type}</p>
                <p className="price">MRP: {product.mrp}</p>
                <button className="addto-cart">+</button>
                <div className="varients">
                    {product.color.map((c,index) => (
                    <div className="varient-data" key={index}>
                        <Image src={c.image} alt="Nike Shoes Products" width={80} height={100}></Image>
                    </div>
                    ))}
                </div>
            </div>
            <i className="bi bi-heart like"></i>
            <span className="brand">NIKE</span>
        </div>
    )
}