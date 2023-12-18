import ProductCard from "~/components/ProductCard"

const Product = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <ProductCard
          Title="pipe bomb"
          Desc="A very cool pipe bomb"
          image="/pipebomb.jpg"
        />
        <ProductCard
          Title="pipe bomb"
          Desc="A very cool pipe bomb"
          image="/pipebomb.jpg"
        />
        <ProductCard
          Title="pipe bomb"
          Desc="A very cool pipe bomb"
          image="/pipebomb.jpg"
        />

        <ProductCard
          Title="Very cool nazi flag"
          Desc="Old memories"
          image="/nazi.png"
        />

        <ProductCard
          Title="Supermarine Spitfire"
          Desc="Very nice plane"
          image="/spitfire.jpg"
        />
      </div>
    </div>
  )
}

export default Product
