'use client'

type Product = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg shadow p-4 hover:shadow-lg transition duration-300">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-500">{product.description}</p>
      <p className="text-blue-600 font-bold mt-1">${product.price}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">Buy Now</button>
    </div>
  )
}
