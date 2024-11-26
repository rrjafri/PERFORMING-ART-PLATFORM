import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const artists = [
  { 
    name: 'Diljit Dosanjh', 
    image: '/zid/diljit.png',
    songs: ['G.O.A.T.', 'Lover', 'Proper Patola'] 
  },
  { 
    name: 'Arijit Singh', 
    image: '/zid/arijit.png',
    songs: ['Tum Hi Ho', 'Channa Mereya', 'Ae Dil Hai Mushkil'] 
  },
  { 
    name: 'KK', 
    image: '/zid/KK.png',
    songs: ['Pal', 'Yaaron', 'Aankhon Mein Teri'] 
  },
  { 
    name: 'Atif Aslam', 
    image: '/zid/Atif.png',
    songs: ['Tera Hone Laga Hoon', 'Woh Lamhe', 'Jeena Jeena'] 
  },
]

export default function ZidArtistPage() {
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
        <h1 className="text-3xl font-bold mb-8">Zid - Featured Artists</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {artists.map((artist) => (
            <Card key={artist.name} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    width={500}
                    height={700}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h2 className="text-xl font-bold">{artist.name}</h2>
                    <ul className="mt-2 text-sm">
                      {artist.songs.map((song, index) => (
                        <li key={index}>{song}</li>
                      ))}
                    </ul>
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

