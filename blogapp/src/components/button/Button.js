"use client"
import Link from "next/link"

export default function Button(props) {
    //console.log("wie sieht mein props aus", props)
    return (
        <Link href={props.href}>
            <button type="button">{props.buttonText}</button>
        </Link>
    )
}