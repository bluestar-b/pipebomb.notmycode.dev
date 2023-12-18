import ProductCard from "~/components/ProductCard"

const Product = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <ProductCard
          Title="pipe bomb"
          Desc="A very cool pipe bomb"
          image="/pipebomb.jpg"
        ></ProductCard>

        <ProductCard
          Title="pipe bomb"
          Desc="A very cool pipe bomb"
          image="/pipebomb.jpg"
        ></ProductCard>

        <ProductCard
          Title="pipe bomb"
          Desc="A very cool pipe bomb"
          image="/pipebomb.jpg"
        ></ProductCard>

        <ProductCard
          Title="pipe bomb"
          Desc="A very cool pipe bomb"
          image="/pipebomb.jpg"
        ></ProductCard>

        <ProductCard
          Title="pipe bomb"
          Desc="A very cool pipe bomb"
          image="/pipebomb.jpg"
        ></ProductCard>
      </div>
    </div>
  )
}

export default Product
