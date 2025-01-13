import Link from 'next/link'
import Image from 'next/image'

export default function NavBar() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image 
            src="/placeholder.svg"
            alt="ETC Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold">ADMIN</span>
        </div>
        
        <div className="flex items-center space-x-8">
          <Link href="/Admin/Usuarios" className="hover:text-gray-200">
            Usuarios
          </Link>
          <Link href="/documentacion" className="hover:text-gray-200">
            Documentacion
          </Link>
          <Link href="/estadisticas" className="hover:text-gray-200">
            Estadisticas
          </Link>
        </div>

        <button className="bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-gray-100">
          Cerrar Sesión
        </button>
      </div>
    </nav>
  )
}