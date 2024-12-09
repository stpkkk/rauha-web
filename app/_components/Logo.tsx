import Image from 'next/image'
import Link from 'next/link'

function Logo() {
	return (
		<Link href='/' className='flex items-center gap-4 z-10'>
			<Image
				src='/logo-light.webp'
				height='60'
				width='60'
				alt='Rauha logo'
				priority
				className='rounded-full'
			/>
			<span className='text-xl font-semibold text-primary-100'>Rauha</span>
		</Link>
	)
}

export default Logo
