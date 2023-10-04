// we can pass props to our components
export default function Button(props) {
    return (
        <button style={{
            padding: "1rem",
            backgroundColor: "#a855f7"
        }}>{props.text}</button>
    )
}