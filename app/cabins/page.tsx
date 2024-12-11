import CabinCard from '../_components/CabinCard'
import { CabinType } from '../_types/cabin'

export const metadata = {
	title: 'Домики',
}

export default function CabinsPage() {
	const cabins:CabinType[]= [{	id:'123',
		name: '008',
		maxCapacity:4,
		regularPrice: 700,
		discount: 100,
		image: ''}] 

	return <div>
	<h1 className="text-4xl mb-5 text-accent-400 font-medium">
		Про наши домики
	</h1>
	<p className="text-primary-200 text-lg mb-10">
	Уютные, но роскошные коттеджи, расположенные в самом сердце Карелии. Представьте себе, что вы просыпаетесь и наслаждаетесь прекрасным видом на озеро, проводите дни, исследуя леса вокруг, или просто расслабляетесь в чане под звездами. Наслаждайтесь красотой природы в небольшом домике вдали от города. Идеальное место для тихого, спокойного отдыха. Добро пожаловать!
	</p>

	{cabins.length > 0 && (
		<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
			{cabins.map((cabin) => (
				<CabinCard cabin={cabin} key={cabin.id} />
			))}
		</div>
	)}
</div>
}
