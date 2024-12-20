import Link from "next/link";

function NotFound() {
  return (
    <main className="mt-4 space-y-6 text-center">
      <h1 className="text-3xl font-semibold">Нет такой страницы :(</h1>
      <Link
        href="/"
        className="inline-block bg-accent-500 px-6 py-3 text-lg text-primary-800"
      >
        На главную
      </Link>
    </main>
  );
}

export default NotFound;
