import ProductCard from '../components/ProductCard'
import products from '../data/items';

export default function Home() {
  return (
    <div>
      {products.map((product) => (
        <productCard key={product.id} {...product} />
      ))}
    </div>
  )
}
