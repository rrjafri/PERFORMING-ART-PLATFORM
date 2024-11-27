import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button";

const hosts =[
  { 
    name: 'The Gourmet Kitchen (Budget=₹1000/hr)', 
    image: '/zid/fine dining.png',
    cuisine: ['Fine Dining'] 
  },
  { 
    name: 'Spice Route (Budget=₹1500/hr)', 
    image: '/zid/indian.png',
    cuisine: ['Indian'] 
  },
  { 
    name: 'Sushi Master (Budget=₹1000/hr)', 
    image: '/zid/sussi.png',
    cuisine : ['Japanese']
  },
  { 
    name: 'La Pizzeria (Budget=₹1200/hr)', 
    image: '/zid/pizza.png',
    cuisine: ['Italian'] 
  },

]

export default function ZidHostPage() {
  return (
    <div className="min-h-screen bg-[#f5f1e8]">
      <header className="border-b bg-white/50 backdrop-blur-sm fixed w-full z-10">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              Charche
            </span>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-amber-600 to-amber-800 text-white hover:from-amber-700 hover:to-amber-900">
                Sign Up
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="container px-4 py-24">
        <h1 className="text-3xl font-bold mb-8">Zid - Featured Hosts</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hosts.map((host) => (
            <Card key={host.name} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={host.image}
                    alt={host.name}
                    width={200}
                    height={300}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h2 className="text-xl font-bold">{host.name}</h2>
                    <p className="mt-2 text-sm">{host.cuisine} Cuisine</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

