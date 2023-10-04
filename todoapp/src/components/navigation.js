import Link from "next/link"

export default function Navigation() {
    return (
        <nav style={{
            marginTop: "10px",
            display: "flex",
            gap: "1rem",
            backgroundColor: "#9ca3af",
            padding: "1rem"
        }}>
            <Link className="link" href="/">Home</Link>
            <Link className="link" href="/login">Login</Link>
            <Link className="link" href="/register">Register</Link>
            <Link className="link" href="/todos">Todos</Link>
            <Link className="link" href="/signout">Signout</Link>
        </nav>
    )
}