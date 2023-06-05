import "./styles.css"
import Information from "./Components/Information";
import Logo from "../Logo/Logo";
import { CgFacebook } from "react-icons/cg"
import { RiInstagramFill } from "react-icons/ri"
import { BsTwitter } from "react-icons/bs"
import Network from "../Network/Network";

const Footer = () => {
    return (
        <div className="footerCotainer">

            <div className="footer">
                <div className="content">
                <Logo />
                <p>We help you find your dream product</p>
                
                <div className="icons">
                <Network 
                page={"https://www.facebook.com/home"}
                image={<CgFacebook id="facebookIcon"/>}/>

                <Network 
                page={"https://www.instagram.com/"}
                image={<RiInstagramFill id="instagramIcon" />}/>

                <Network 
                page={"https://twitter.com/"}
                image={<BsTwitter id="twitterIcon" />}/>
                </div>
                </div>

                <div className="information">
                <Information 
                title={"Information"}
                topic={"About"}
                topic2={"Product"}
                topic3={"Blog"}
                />
                <Information 
                title={"Company"}
                topic={"Community"}
                topic2={"Career"}
                topic3={"Our Story"}
                />
                <Information 
                title={"Contact"}
                topic={"Getting Started"}
                topic2={"Pricing"}
                topic3={"Resources"}
                />
                </div>
                
            </div>
            <div className="rights">
                <p>2023 all Right Reserved Term of use FINDLE</p>
            </div>
        </div>
    )
}

export default Footer;