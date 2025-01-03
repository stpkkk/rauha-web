import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "./_components/AuthContext";
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
    <SessionProvider>
      <AuthProvider>
        <html lang="en">
          <body className="relative flex min-h-screen flex-col bg-primary-950 font-comfortaa text-primary-100 antialiased">
            <Header />
            <div className="grid flex-1 px-8 py-12">
              <main className="mx-auto w-full max-w-7xl">
                <ReservationProvider>{children}</ReservationProvider>
              </main>
            </div>
          </body>
        </html>
      </AuthProvider>
    </SessionProvider>
  );
}
