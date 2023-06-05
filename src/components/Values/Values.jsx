import "./styles.css"

const Value = ({ image: Image, title, text}) => {
    return(
        <div className="value">
            <div id="icon"><Image /></div>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default Value;