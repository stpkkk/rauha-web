import Footer from "./_components/Footer";
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
      <body className="flex min-h-screen flex-col bg-primary-950 font-comfortaa text-primary-100 antialiased">
        <Header />
        <main className="mx-auto h-full w-full flex-grow">
          <ReservationProvider>{children}</ReservationProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
