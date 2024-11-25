import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const segments = [
    { name: 'Hungry', image: '/placeholder.svg?height=300&width=200' },
    { name: 'Khwaab', image: '/placeholder.svg?height=300&width=200' },
    { name: 'Zid', image: '/placeholder.svg?height=300&width=200' },
    { name: 'Lifakat', image: '/placeholder.svg?height=300&width=200' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">BookMyShow</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="container px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold">Featured Segments</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment) => (
            <Card key={segment.name} className="overflow-hidden">
              <CardContent className="p-0">
                <Link href={`/segment/${segment.name.toLowerCase()}`}>
                  <div className="relative">
                    <Image
                      src={segment.image}
                      alt={segment.name}
                      width={200}
                      height={300}
                      className="w-full object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h2 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                      {segment.name}
                    </h2>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

