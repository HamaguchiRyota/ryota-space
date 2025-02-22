import Link from "next/link";
import Card from "@/components/top-card";
import FCSdata from "public/Article/fcs.json";
import SDSdata from "public/Article/sds.json";
import TRSdata from "public/Article/trs.json";
import TRSNdata from "public/Article/trsn.json";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogClose,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ChevronRight,
  Share,
  Globe,
  Twitter,
  Instagram,
  Github,
} from "lucide-react";
import { CopyButton } from "@/components/copy-button";

export const metadata: Metadata = {
  title: "トップ｜ryota-space",
  description: "ryota-spaceは、個人のポートフォリオサイトです。",
  appleWebApp: true,
};

export default function top() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="pb-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <Image
            className="w-40 h-40 rounded-sm row-span-3"
            src="/hamaryo.jpg"
            alt="Large avatar"
            width={200}
            height={200}
          />
          <div className="text-center md:text-left">
            <p className="text-4xl md:text-5xl font-bold mb-2">
              Hamaguchi-Ryota
            </p>
            <p className="text-xl text-gray-500 max-w-2xl">
              System Engineer, Programmer
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2 mb-3">
              <Badge
                variant="outline"
                className="bg-zinc-200 text-zinc-600 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600 shadow-sm"
              >
                Python
              </Badge>
              <Badge
                variant="outline"
                className="bg-zinc-200 text-zinc-600 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600 shadow-sm"
              >
                PHP
              </Badge>
              <Badge
                variant="outline"
                className="bg-zinc-200 text-zinc-600 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600 shadow-sm"
              >
                C#
              </Badge>
              <Badge
                variant="outline"
                className="bg-zinc-200 text-zinc-600 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600 shadow-sm"
              >
                Next.js
              </Badge>
            </div>
            <div className="flex items-center space-x-2 justify-center md:justify-start">
              <Link
                href="https://twitter.com/_hamaryo"
                passHref
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="transition delay-100 duration-150 ease-in-out hover:-translate-y-1"
                >
                  <Twitter />
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
                  className="transition delay-100 duration-150 ease-in-out hover:-translate-y-1"
                >
                  <Instagram />
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
                  className="transition delay-100 duration-150 ease-in-out hover:-translate-y-1"
                >
                  <Github />
                </Button>
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="transition delay-100 duration-150 ease-in-out hover:-translate-y-1"
                  >
                    <Share className="h-5 w-5" />
                    <span>Share</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Share link</DialogTitle>
                    <DialogDescription>
                      Anyone who has this link will be able to view this.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center space-x-2">
                    <Link
                      href="https://ryota-space.vercel.app/"
                      passHref
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="outline">
                        <Globe />
                      </Button>
                    </Link>
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link" className="sr-only">
                        Link
                      </Label>
                      <Input
                        id="link"
                        defaultValue="https://ryota-space.vercel.app/"
                        readOnly
                      />
                    </div>
                    <CopyButton value="https://ryota-space.vercel.app/" />
                  </div>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-10">
        <div className="grid grid-cols-2 text-3xl font-bold mb-8">
          <h1 className="sm:text-3xl text-2xl font-bold text-start content-center">
            Public Project
          </h1>
          <div className="justify-self-end">
            <Link href="/Project">
              <Button variant="outline" size="icon">
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          <Link href="/Project/Frailty-Check-System">
            <Card
              //thumbnail={FCSdata.thumbnail}
              thumbnail="/fcs.webp"
              title={FCSdata.title}
              date={FCSdata.date}
              tags={["Python", "django", "javascript"]}
            />
          </Link>
          <Link href="/Project/Supplemental-Documentation-System">
            <Card
              //thumbnail={SDSdata.thumbnail}
              thumbnail="/TheLost.webp"
              title={SDSdata.title}
              date={SDSdata.date}
              tags={["PHP", "Python"]}
            />
          </Link>
        </div>
      </div>

      <div className="pb-5">
        <div className="grid grid-cols-2 text-3xl font-bold mb-8">
          <h1 className="sm:text-3xl text-2xl font-bold text-start  content-center">
            Private Project
          </h1>
          <div className="justify-self-end">
            <Link href="/Private">
              <Button variant="outline" size="icon">
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          <Link href="/Private/Taiko-Re-Strap">
            <Card
              //thumbnail={TRSdata.thumbnail}
              thumbnail="/NotFound.webp"
              title={TRSdata.title}
              date={TRSdata.date}
              tags={["C#", ".NET Framework"]}
            />
          </Link>
          <Link href="/Private/Taiko-Re-Strap-Next">
            <Card
              //thumbnail={TRSNdata.thumbnail}
              thumbnail="/NotFound.webp"
              title={TRSNdata.title}
              date={TRSNdata.date}
              tags={["C#", "DxLib"]}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
