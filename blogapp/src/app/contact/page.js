import Navigation from "@/components/navigation/Navigation"

export default function ContactPage() {
    return (
        <div>
            <Navigation />
            <h1>Contact</h1>
            <form>
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Your email" />
                <button type="submit">Senden</button>
            </form>
        </div>
    )
}