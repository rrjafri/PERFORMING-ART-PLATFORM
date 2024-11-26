'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dailog"

export default function ZidPage() {
  const [open, setOpen] = useState(true)
  const router = useRouter()

  const handleSelection = (type: 'artist' | 'host') => {
    setOpen(false)
    router.push(`/segment/zid/${type}`)
  }

  return (
    <div className="min-h-screen bg-[#f5f1e8] flex items-center justify-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Choose your role for Zid</DialogTitle>
            <DialogDescription>
              Do you want to enter as an artist or as a host?
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Button onClick={() => handleSelection('artist')}>Enter as Host</Button>
            <Button onClick={() => handleSelection('host')}>Enter as Artist</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

