import Link from "next/link"

export default function Header() {
  return (
      <header className="p-4 bg-background">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Logo</Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-foreground hover:text-primary">Home</Link>
            <Link href="/about" className="text-foreground hover:text-primary">About</Link>
            <Link href="/contact" className="text-foreground hover:text-primary">Contact</Link>
          </nav>
        </div>
      </header>
  )
}