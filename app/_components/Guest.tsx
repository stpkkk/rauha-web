import Image from "next/image";
import Link from "next/link";
import { auth } from "../_lib/auth";
import SignOutButton from "./SignOutButton";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/solid";

export default async function Guest() {
  const session = await auth();

  return (
    <div className="flex items-center gap-4 lg:gap-16">
      {session?.user?.image ? (
        <div className="flex items-center gap-2 transition-colors hover:text-accent-400 lg:gap-4">
          <Link
            href="/account"
            className="flex items-center gap-2 transition-colors hover:text-accent-400 lg:gap-4"
          >
            <span className="transition-colors hover:text-accent-400 lg:gap-4">
              Аккаунт
            </span>
            <div className="relative h-8 w-8">
              <Image
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-full"
                src={session.user.image}
                alt={session.user.name || ""}
                referrerPolicy="no-referrer"
              />
            </div>
          </Link>

          <SignOutButton size={7} />
        </div>
      ) : (
        <Link
          href={"/login"}
          className="flex items-center gap-2 transition-colors hover:text-accent-400"
        >
          <span>Войти</span>
          <ArrowLeftEndOnRectangleIcon className="h-7 w-7" />
        </Link>
      )}
    </div>
  );
}
