import "./style.css"
import Value from "../Values/Values";
import { RiPlantLine } from "react-icons/ri"
import { BsBoxSeam } from "react-icons/bs"
import { FiPhoneOutgoing } from "react-icons/fi"

const AboutUs = () => {
    return (
    <div className="aboutUsContainer">
        <div className="aboutUs">
            <h1>About us</h1>
            <p>Order now and appreciate the beauty of nature</p>
        </div>
        <div className="values">
        <Value 
        image={ RiPlantLine }
        title={'Large Assortment'}
        text={'we offer many different types of products with fewer variations in each category.'}
        />
        <Value 
        image={ BsBoxSeam }
        title={'Fast & Free Shipping'}
        text={'4-day or less delivery time, free shipping and an expedited delivery option.'}
        />
        <Value 
        image={ FiPhoneOutgoing }
        title={'24/7 Support'}
        text={'answers to any business related inquiry 24/7 and in real-time.'}
        />
        </div>

    </div>
    )
}

export default AboutUs;