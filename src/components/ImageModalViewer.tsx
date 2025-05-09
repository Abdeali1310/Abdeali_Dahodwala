'use client'

import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"

export default function ImageModalViewer({ src, alt,link,live,title }: { src: string; alt: string,link:string,live:string,title:string }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="w-full h-48 relative mb-4 cursor-pointer hover:opacity-80 transition rounded-lg overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            onClick={() => setOpen(true)}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
        <div className="relative w-full h-[70vh] rounded-lg overflow-hidden">
            <h3 className="my-2 mx-3 absolute top-36 text-2xl text-center w-full font-serif font-black">{title}</h3>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
          <div className="flex gap-5 absolute bottom-40 left-5">

          {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live Site"
                >
                  <img src="/arrow.svg" alt="Live" className="w-7 h-7" />
                </a>
              )}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <img src="/github.svg" alt="GitHub" className="w-7 h-7" />
              </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
