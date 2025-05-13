'use client'

import Image from "next/image"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { FaWindowClose } from "react-icons/fa";

export default function ImageModalViewer({ src, alt, link, live, title }: { src: string; alt: string, link: string, live: string | null, title: string }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="w-full h-52 lg:h-64 relative mb-4 cursor-pointer hover:opacity-80 transition rounded-lg overflow-hidden">
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
      <DialogContent className="max-w-5xl p-0 bg-transparent border-none [&>button]:hidden">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="relative w-full h-[70vh] rounded-lg overflow-hidden">
          <h3 className="my-2 text-white dark:text-white mx-3 absolute top-32 md:top-26 text-2xl text-center w-full font-serif font-black">
            {title}
          </h3>
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
                <Image src="/arrow.svg" alt="Live" className="w-7 h-7" />
              </a>
            )}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <Image src="/github.svg" alt="GitHub" className="w-7 h-7" />
            </a>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="absolute top-15 right-5 hover:bg-white/30 text-white px-4 py-1 rounded-md backdrop-blur-sm transition"
          >
            <FaWindowClose />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
