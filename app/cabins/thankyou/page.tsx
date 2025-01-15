import Link from "next/link";

function ThankYouPage() {
  return (
    <div className="mt-4 space-y-6 text-center">
      <h1 className="text-3xl font-semibold">Спасибо что выбрали нас !</h1>
      <Link
        href="/account/reservations"
        className="inline-block text-xl text-accent-500 underline"
      >
        Посмотреть ваши бронирования &rarr;
      </Link>
    </div>
  );
}
export default ThankYouPage;
