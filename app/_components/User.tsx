"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "./AuthContext";
import { Suspense } from "react";
import SpinnerMini from "./SpinnerMini";

export default function User() {
  const { session } = useAuth();

  return (
    <div>
      {session?.user?.image ? (
        <Link
          href="/account"
          className="flex items-center gap-4 transition-colors hover:text-accent-400"
        >
          <Suspense fallback={<SpinnerMini />}>
            <div className="relative h-8 w-8">
              <Image
                //referrerPolicy - Important to display google profile images
                referrerPolicy="no-referrer"
                className="rounded-full object-cover"
                src={session?.user?.image}
                alt={session?.user?.name || "avatar"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
              />
            </div>
          </Suspense>
          <span> Для Гостей</span>
        </Link>
      ) : (
        <Link
          href="/account"
          className="transition-colors hover:text-accent-400"
        >
          Для Гостей
        </Link>
      )}
    </div>
  );
}
