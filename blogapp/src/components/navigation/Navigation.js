import Button from "@/components/button/Button"

export default function Navigation() {
    return (
        <div>
            <div
                style={{
                    border: "2px solid red",
                    padding: "1rem" // 16px
                }}>
                <Button href="/" buttonText="Home" />
                <Button href="/contact" buttonText="Contact" />
                <Button href="https://x.com/tarasowski" buttonText="Twitter or X" />
                <Button href="https://github.com/tarasowski" buttonText="Github" />
            </div>
        </div>
    )
}