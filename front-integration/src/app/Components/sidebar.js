import Link from 'next/link';
import Image from 'next/image';
import { HiChevronLeft, HiUser, HiDocumentText, HiChartBar } from 'react-icons/hi';
import { useState } from 'react';

export default function Sidebar({ isOpen, onClose }) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white text-gray-800 shadow-lg z-40 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 w-64`}
    >
      {/* Header */}
      <div className="p-4 bg-gray-800 text-white flex items-center justify-between">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <button onClick={onClose} className="text-gray-300 hover:text-white">
          <HiChevronLeft size={24} />
        </button>
      </div>

      {/* Profile Section */}
      <div className="p-6 flex flex-col items-center space-y-3">
        <Image
          src="/profile-placeholder.png"
          alt="Foto de Perfil"
          width={80}
          height={80}
          className="rounded-full border-2 border-gray-300"
        />
        <h2 className="text-lg font-semibold">Nombre Usuario</h2>
        <p className="text-sm text-gray-500">Rol del Usuario</p>
      </div>

      <hr className="border-gray-300 my-4" />

      {/* Navigation */}
      <nav className="px-6">
        {/* Usuarios - Dropdown */}
        <div>
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="flex items-center justify-between w-full px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
          >
            <div className="flex items-center space-x-2">
              <HiUser size={20} />
              <span>Usuarios</span>
            </div>
            <HiChevronLeft
              size={20}
              className={`transform transition-transform ${
                isUserMenuOpen ? '-rotate-90' : 'rotate-0'
              }`}
            />
          </button>
          {isUserMenuOpen && (
            <div className="mt-2 space-y-2 pl-6">
              <Link
                href="/Admin/Agregar"
                className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
              >
                Agregar Usuario
              </Link>
              <Link
                href="/Admin/Lista"
                className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
              >
                Lista de Usuarios
              </Link>
            </div>
          )}
        </div>

        {/* Otras opciones */}
        <Link
          href="/documentacion"
          className="flex items-center space-x-2 px-4 py-2 mt-4 text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <HiDocumentText size={20} />
          <span>Documentación</span>
        </Link>
        <Link
          href="/estadisticas"
          className="flex items-center space-x-2 px-4 py-2 mt-2 text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <HiChartBar size={20} />
          <span>Estadísticas</span>
        </Link>
      </nav>
    </div>
  );
}
