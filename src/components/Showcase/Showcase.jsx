import "./style.css"
import { BsArrowRightShort } from 'react-icons/bs'
import ProductCard from "../Cards/ProductCard/productCard"

const Showcase = () => {
    return (
        <div className="showcaseContainer">
            <div className="bestSellers">
                <h1>Best Sellers</h1>
                <p>The easiest way to find the most wanted products</p>
                <button>
                    See more<BsArrowRightShort />
                </button>
            </div>
            
            <ProductCard 
             img={""}
             title={""}
             price={""}/>
        </div>

    )
}

export default Showcase;