export default function Entry(props) {
    return (
    <div
    style={{
        border: "2px solid green"
    }}
    >
        <h1>{props.headline}</h1>
        <p>{props.content}</p>
    </div>
    )
}