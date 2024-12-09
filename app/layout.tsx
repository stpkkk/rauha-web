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
		<html lang='en'>
			<body
				className='font-comfortaa bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased
			'
			>
				<Header/>
				<div className='flex-1 px-8 py-12'>
					<main className='max-w-7xl mx-auto'>{children}</main>
				</div>
			</body>
		</html>
	)
}
