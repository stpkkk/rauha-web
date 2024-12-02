import Logo from './components/Logo'
import Navigation from './components/Navigation'

export const metadata = {
	title: 'Rauha',
	description: 'Generated by Next.js',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>
				<header>
					<Logo />
				</header>
				<Navigation />

				<main>{children}</main>
			</body>
		</html>
	)
}