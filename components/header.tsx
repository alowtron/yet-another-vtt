import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  return(
    <header>
      <Link href="./">
        Home
      </Link>
      
      <UserButton />
    </header>
  )
}