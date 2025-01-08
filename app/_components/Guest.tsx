import Image from "next/image";
import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Guest() {
  const session = await auth();

  return (
    <Link
      href="/account"
      className="flex items-center gap-4 transition-colors hover:text-accent-400"
    >
      {session?.user?.image ? (
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
      ) : (
        ""
      )}
      <span>Для гостей</span>
    </Link>
  );
}
