import Link from "next/link"

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold uppercase text-white">
            lorem ipsum
          </h1>
          <p className="py-6"></p>
          <Link
            className="rounded-xl border-2 p-4 text-xl font-bold transition-colors hover:bg-gray-100 hover:text-black"
            href="/products"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
