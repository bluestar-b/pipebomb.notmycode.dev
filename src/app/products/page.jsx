import ProductCard from "~/components/ProductCard"
import products from "../products"

const Product = () => {
  return (
    <div className="flex justify-center p-2">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            Title={item.title}
            Price={item.price}
            Desc={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Product
