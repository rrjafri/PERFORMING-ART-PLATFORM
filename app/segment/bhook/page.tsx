'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dailog"

const nataks = [
  {
    name: 'Macbeth',
    image: '/bhook/macbeth.png',
    amount: 50000,
    genre: 'Tragedy',
    description: "Macbeth is one of Shakespeare’s darkest and most gripping plays. It chronicles the rise and fall of Macbeth, a Scottish nobleman consumed by ambition and spurred to regicide by his wife and a prophecy from three witches. The play delves into themes of power, guilt, fate, and the corrupting influence of unchecked ambition. Its vivid imagery and intense psychological drama have made it a favorite for theatrical productions worldwide..",
    teamMembers: ['John Doe (Director)', 'Jane Smith (Lead Actor)', 'Mike Johnson (Set Designer)']
  },
  {
    name: 'The Mouse That Roared',
    image: '/bhook/mouse.png',
    amount: 35000,
    genre: 'Mystery/Thriller',
    description: "The Mousetrap is the world’s longest-running play, penned by Agatha Christie, the queen of suspense. The story revolves around a group of strangers trapped in a snowbound guesthouse, where a murder has taken place. Suspicion shifts among the characters as secrets unravel, culminating in an iconic twist ending. This play is a testament to Christie’s mastery of creating intrigue and has become a classic in theatre.",
    teamMembers: ['Alice Brown (Director)', 'Tom Wilson (Lead Actor)', 'Sarah Davis (Costume Designer)']
  },
  {
    name: 'The Arabian Nights',
    image: '/bhook/arabian.png',
    amount: 45000,
    genre: 'Fantasy',
    description: "A magical journey through the tales of Scheherazade, filled with wonder and adventure.",
    teamMembers: ['Mohammed Al-Fayed (Director)', 'Yasmin Malik (Lead Actor)', 'Ahmed Hassan (Music Composer)']
  },
  {
    name: 'The Crucible',
    image: '/bhook/crucible.png',
    amount: 40000,
    genre: 'Drama',
    description: "Arthur Miller's powerful drama about the Salem witch trials and the dangers of mass hysteria.",
    teamMembers: ['Elizabeth Taylor (Director)', 'Robert De Niro (Lead Actor)', 'Jennifer Lawrence (Costume Designer)']
  },
  {
    name: 'Six Characters in Search of an Author',
    image: '/bhook/six.png',
    amount: 55000,
    genre: 'Meta-theatre',
    description: "Pirandello's groundbreaking meta-theatrical play that blurs the lines between reality and fiction.",
    teamMembers: ['Federico Fellini (Director)', 'Marcello Mastroianni (Lead Actor)', 'Sophia Loren (Set Designer)']
  },
  {
    name: 'Corpse Bride',
    image: '/bhook/corpse.png',
    amount: 30000,
    genre: 'Dark Fantasy',
    description: "A dark yet whimsical tale of love that transcends death, inspired by Tim Burton's film.",
    teamMembers: ['Tim Burton (Creative Director)', 'Johnny Depp (Voice Actor)', 'Helena Bonham Carter (Voice Actor)']
  },
  {
    name: 'Phantom Thread',
    image: '/bhook/phantom.png',
    amount: 60000,
    genre: 'Romance',
    description: "A haunting story of love and creativity set in the glamorous world of high fashion.",
    teamMembers: ['Paul Thomas Anderson (Director)', 'Daniel Day-Lewis (Lead Actor)', 'Vicky Krieps (Lead Actress)']
  }
]

export default function BhookPage() {
  const [selectedNatak, setSelectedNatak] = useState(null)

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
        <h1 className="text-3xl font-bold mb-8">BHOOK - Crowdfunding Events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {nataks.map((natak, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div 
                  className="relative cursor-pointer" 
                  onClick={() => setSelectedNatak(natak)}
                >
                  <Image
                    src={natak.image}
                    alt={natak.name}
                    width={300}
                    height={400}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h2 className="text-xl font-bold">{natak.name}</h2>
                    <p className="mt-2 text-sm">Amount Demanded: ₹{natak.amount.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedNatak} onOpenChange={() => setSelectedNatak(null)}>
          {selectedNatak && (
            <DialogContent className="sm:max-w-[700px]">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedNatak.name}</DialogTitle>
                <div className="space-y-2 mt-4">
                  <p className="text-lg">
                    <span className="font-semibold">Genre: </span>
                    <span className="bg-blue-100 px-2 py-1 rounded">{selectedNatak.genre}</span>
                  </p>
                  <p className="text-lg">
                    <span className="font-semibold">Amount Demanded: </span>
                    <span className="bg-blue-100 px-2 py-1 rounded">₹{selectedNatak.amount.toLocaleString()}</span>
                  </p>
                </div>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-6 py-4">
                <div>
                  <Image
                    src={selectedNatak.image}
                    alt={selectedNatak.name}
                    width={300}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <div className="max-h-[200px] overflow-y-auto">
                    <p>{selectedNatak.description}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Team Members:</h3>
                    <ul className="list-disc list-inside">
                      {selectedNatak.teamMembers.map((member, index) => (
                        <li key={index}>{member}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-800 text-white hover:from-amber-700 hover:to-amber-900">
                    Support This Project
                  </Button>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </main>
    </div>
  )
}

