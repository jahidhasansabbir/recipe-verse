"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

export default function AuthButton() {
 return <Link href="/auth/log-in" className="button">Log in</Link>
}
