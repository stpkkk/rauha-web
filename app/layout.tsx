import { SessionProvider } from "next-auth/react";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
import "./_styles/globals.css";

export const metadata = {
  title: {
    template: "Rauha / %s",
    default: "Rauha",
  },
  description:
    "Аренда уютных домиков расположенных в сердце Карелии, на берегу озера, в месте где вы сможете уединиться",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative flex min-h-screen flex-col bg-primary-950 font-comfortaa text-primary-100 antialiased">
        <Header />
        <div className="grid flex-1 px-4 py-12 md:px-8">
          <main className="mx-auto w-full max-w-7xl">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
