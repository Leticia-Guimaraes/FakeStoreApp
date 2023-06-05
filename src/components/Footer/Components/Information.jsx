import "./styles.css"

const Information = ({  title, topic, topic2, topic3 }) => {
    return (
        <div className="informationContainer">
            <h1>{title}</h1>
            <p>{topic}</p>
            <p>{topic2}</p>
            <p>{topic3}</p>

        </div>
    )
}

export default Information;