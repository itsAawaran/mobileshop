import ProductCard from '@/components/ProductCard'

const products = [
  {
    id: 1,
    name: 'iPhone 14 Pro',
    description: '256GB, Space Black',
    price: 1199,
    image: '/mobile1.jpg',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24',
    description: '128GB, Phantom Black',
    price: 999,
    image: '/mobile1.jpg',
  },
  {
    id: 3,
    name: 'OnePlus 12',
    description: '256GB, Emerald Green',
    price: 799,
    image: '/mobile1.jpg',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📱 Mobile Shop</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}
