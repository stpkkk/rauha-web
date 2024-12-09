import Header from './_components/Header'
import './_styles/globals.css'

export const metadata = {
	title: {
		template: 'Rauha / %s',
		default: 'Rauha',
	},
	description:
		'Аренда уютных домиков расположенных в сердце Карелии, на берегу озера, в месте где вы сможете уединиться',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
    <html lang="en">
      <body className="relative flex min-h-screen flex-col bg-primary-950 font-comfortaa text-primary-100 antialiased">
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="mx-auto max-w-7xl">{children}</main>
        </div>
      </body>
    </html>
  );
}
