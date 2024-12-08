import Logo from './_components/Logo'
import Navigation from './_components/Navigation'
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
		<html lang='en'>
			<body
				className='font-comfortaa bg-primary-950 text-primary-100  min-h-screen
			'
			>
				<header>
					<Logo />
				</header>
				<Navigation />

				<main>{children}</main>
			</body>
		</html>
	)
}
