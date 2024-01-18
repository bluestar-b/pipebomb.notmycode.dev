const Badge = ({ Text }) => {
  return (
    <div className="">
      <div className="inline-flex w-fit items-center rounded-lg border-2 border-white py-0.5 px-2.5 h-fit hover:bg-white hover:text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-1 h-4 w-4"
        >
          <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
          <path d="M7 7h.01"></path>
        </svg>
        <span className="text-lg font-bold">$ {Text}</span>
      </div>
    </div>
  )
}

export default Badge
