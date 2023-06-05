import "./styles.css"

const Network = ({ image: Image, page}) => {
    return(
        <div className="network">
            <a href={page} target="blank">{Image}</a>
        </div>
    )
}

export default Network;