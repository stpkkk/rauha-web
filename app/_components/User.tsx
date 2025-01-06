"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function User() {
  const { data: session } = useSession();

  return (
    <Link
      href="/account"
      className="flex items-center gap-4 transition-colors hover:text-accent-400"
    >
      {session?.user?.image ? (
        <div className="relative h-8 w-8">
          <Image
            fill
            className="rounded-full"
            src={session.user.image}
            alt={session.user.name || ""}
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        ""
      )}
      <span>Для гостей</span>
    </Link>
  );
}

