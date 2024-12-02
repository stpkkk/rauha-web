export default async function CabinsPage() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json()
	console.log('data:', data)

	return <div>Cabins</div>
}
