import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const segments = [
  {
    name: 'BHOOK (Crowdfunding)',
    image: '/bhook/bhook.png',
    description: 'Invest In Creativity',
    details: 'A space for artists to fund their creative projects with support from their community and patrons.',
    gradient: 'from-amber-500 to-amber-700'
  },
  {
    name: 'KHWAAB (Theatre Show Booking)',
    image: '/khwaab/khwaab.png',
    description: 'Experience The Arts',
    details: 'A ticketing and event platform for theatre enthusiasts to discover and book live performances and workshops.',
    gradient: 'from-emerald-500 to-emerald-700'
  },
  {
    name: 'ZID (Venue-Artist Aggregation)',
    image: '/zid/zid.png',
    description: 'Connect And Create',
    details: 'A platform matching artists with venues for performances, workshops, and collaborations.',
    gradient: 'from-sky-500 to-sky-700'
  },
  {
    name: 'RIFAQAT (Community Building)',
    image: '/rifaqat/rifaqat.png',
    description: 'Network And Grow',
    details: 'A social networking hub where artists connect, collaborate, and grow together through mentorship and shared interests.',
    gradient: 'from-purple-500 to-purple-700'
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f1e8]">
      <header className="border-b bg-white/50 backdrop-blur-sm fixed w-full z-10">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              Performing Arts Platform
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
        <h1 className="text-4xl font-bold text-center mb-4">Welcome to the Stage</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover a world of performing arts, connect with artists, and experience creativity like never before.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {segments.map((segment) => (
            <Card 
              key={segment.name} 
              className="group overflow-hidden bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <Link href={`/segment/${segment.name.toLowerCase()}`}>
                  <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                    <div className={`absolute inset-0 bg-gradient-to-br ${segment.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                    <Image
                      src={segment.image}
                      alt={segment.name}
                      width={500}
                      height={300}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <h2 className={`text-2xl font-bold bg-gradient-to-r ${segment.gradient} bg-clip-text text-transparent`}>
                      {segment.name}
                    </h2>
                    <h3 className="text-lg font-semibold text-gray-800">{segment.description}</h3>
                    <p className="text-gray-600 line-clamp-2">{segment.details}</p>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

