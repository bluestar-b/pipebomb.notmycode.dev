"use client"

import Image from "next/image"
import Badge from "./Badge"
import { mail } from "~/lib/actions/mail"

const ProductCard = ({ Title, Desc, image, Price }) => {
  return (
    <div>
      <div className="card max-w-full rounded-lg border-2 border-white bg-base-200 shadow-xl  lg:w-96">
        <figure>
          <Image
            src={image}
            className="object-fill"
            width={500}
            height={120}
            quality={70}
            alt={Title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-gray-200/90">{Title}</h2>
          <p className="text-gray-200/70">{Desc}</p>

          <div className="card-actions items-center justify-end">
            <Badge Text={Price} />
            <button
              onClick={() => {
                mail({ item: Title})
              }}
              className=" h-fit rounded-lg border-2 border-white px-2.5 py-0.5 text-lg font-bold hover:bg-gray-100 hover:bg-white hover:text-black"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
