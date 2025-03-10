"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  ChevronDown,
  Twitter,
  Instagram,
  Github,
  Youtube,
  ScanSearch,
  Speech,
  Joystick,
} from "lucide-react";
import Link from "next/link";
import { BentoGrid, type BentoItem } from "@/components/Bento";
import { motion } from "framer-motion";

const itemsSample: BentoItem[] = [
  {
    title: "Frailty-Check-System",
    meta: "From classroom management to measurement",
    description:
      "Developed a web system using Django and speech recognition to support frailty checks for the elderly.",
    icon: <Speech className="w-4 h-4 text-blue-500" />,
    status: "Closed",
    tags: ["Python", "Django", "JavaScript"],
    colSpan: 2,
  },
  {
    title: "Supplemental-Documentation-System",
    meta: "Video to Documentation",
    description:
      "Developed a system to create note-taking materials by extracting audio and slides from lecture videos to support hearing-impaired individuals.",
    icon: <ScanSearch className="w-4 h-4 text-emerald-500" />,
    status: "Closed",
    tags: ["PHP", "Python"],
    colSpan: 2,
  },
  {
    title: "Taiko-Re-Strap-Next",
    meta: "FullHD image quality support",
    description: "A .tja file player.",
    icon: <Joystick className="w-4 h-4 text-purple-500" />,
    tags: ["C Sharp", "DxLib"],
    status: "In Progress",
    colSpan: 2,
  },
  {
    title: "Taiko-Re-Strap",
    meta: "TJAPlayer3 Derivative Software",
    description: "A .tja file player.(feat. DTXMania & TJAPlayer2 forPC)",
    icon: <Joystick className="w-4 h-4 text-sky-500" />,
    status: "Closed",
    tags: ["C Sharp", ".NET Framework"],
    colSpan: 2,
  },
];

export default function Home() {
  return (
    <div>
      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden text-zinc-50">
        <div className="container relative flex max-w-3xl flex-col items-center justify-center gap-8 px-4 text-center">
          {/* Profile Image with enchanted border */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-zinc-600 via-zinc-500/50 to-zinc-600 opacity-75 blur-md" />
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-zinc-700">
              <Image
                src="/hamaryo.jpg"
                alt="Profile"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="bg-gradient-to-r from-zinc-300 via-zinc-200/90 to-zinc-300 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl">
              Hamaguchi Ryota
            </h1>
            <p className="text-xl text-zinc-400">System Engineer, Programmer</p>
          </div>

          <p className="italic max-w-[600px] text-zinc-200/80 md:text-lg">
            PC turns off the power.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* Nature-themed magical buttons */}
            <Link
              href="https://twitter.com/_hamaryo"
              passHref
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="group border-zinc-800/50 bg-zinc-900/30 text-zinc-400 backdrop-blur-sm transition-all hover:border-zinc-500 hover:bg-zinc-800/40 hover:text-zinc-200"
              >
                <Twitter className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="sr-only">X</span>
              </Button>
            </Link>
            <Link
              href="https://www.instagram.com/hamaryo_2"
              passHref
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="group border-zinc-800/50 bg-zinc-900/30 text-zinc-400 backdrop-blur-sm transition-all hover:border-zinc-500 hover:bg-zinc-800/40 hover:text-zinc-200"
              >
                <Instagram className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
            <Link
              href="https://github.com/HamaguchiRyota"
              passHref
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="group border-zinc-800/50 bg-zinc-900/30 text-zinc-400 backdrop-blur-sm transition-all hover:border-zinc-500 hover:bg-zinc-800/40 hover:text-zinc-200"
              >
                <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.youtube.com/@Fumolat"
              passHref
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="group border-zinc-800/50 bg-zinc-900/30 text-zinc-400 backdrop-blur-sm transition-all hover:border-zinc-500 hover:bg-zinc-800/40 hover:text-zinc-200"
              >
                <Youtube className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="sr-only">YouTube</span>
              </Button>
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0.0, x: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex justify-center items-center"
        >
          <ChevronDown className="absolute bottom-32 md:bottom-6 animate-bounce h-8 w-8 text-zinc-400" />
        </motion.div>
      </div>
      <div className="container max-w-3xl mx-auto mt-8">
        <h2 className="sm:text-3xl text-2xl font-bold text-zinc-200 text-center">
          Projects
        </h2>
        <p className="text-zinc-300"></p>
        <BentoGrid items={itemsSample} />
      </div>
    </div>
  );
}
