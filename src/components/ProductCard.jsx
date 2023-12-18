import Image from "next/image"

const ProductCard = ({ Title, Desc, image }) => {
  return (
    <div>
      <div className="card w-96 rounded-lg border-2 border-gray-200 bg-base-200  shadow-xl">
        <figure>
          <Image
            src={image}
            className="object-fill"
            width={500}
            height={500}
            quality={70}
            alt={Title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-gray-200/90">{Title}</h2>
          <p className="text-gray-200/70">{Desc}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline rounded-lg border-2 border-gray-200">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
