import Link from 'next/link'

export default function Card({ title, description, href }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-28 flex flex-col">
      <h2 className="text-2xl font-semibold text-gray-800 mb-10 text-center">{title}</h2>
      <p className="text-gray-600 flex-grow mb-6">
        {description}
      </p>
      <div className="flex justify-center mt-10">
        <Link href={href}>
          <button className="bg-blue-500 text-white px-20 py-2 rounded-full hover:bg-blue-600 transition-colors">
            Ir
          </button>
        </Link>
      </div>
    </div>
  )
}