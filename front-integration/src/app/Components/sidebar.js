import Link from 'next/link';
import Image from 'next/image';
import { HiChevronLeft } from 'react-icons/hi';
import { useState } from 'react';

export default function Sidebar({ isOpen, onClose }) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-100 text-gray-800 shadow-lg z-40 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 w-64`}
    >
      <div className="p-6 flex flex-col space-y-6">
        {/* Sección de Perfil */}
        <div className="flex flex-col items-center space-y-3">
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

        <hr className="border-gray-300" />

        {/* Navegación */}
        <nav className="flex flex-col space-y-4">
          {/* Usuarios - Desplegable */}
          <div>
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="block px-4 py-2 w-full text-left rounded-lg hover:bg-gray-200"
            >
              Usuarios
            </button>
            {isUserMenuOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  href="/Admin/Agregar"
                  className="block px-4 py-2 rounded-lg hover:bg-gray-200"
                >
                  Agregar Usuario
                </Link>
                <Link
                  href="/Admin/Lista"
                  className="block px-4 py-2 rounded-lg hover:bg-gray-200"
                >
                  Lista de Usuarios
                </Link>
              </div>
            )}
          </div>

          {/* Otras opciones */}
          <Link
            href="/documentacion"
            className="block px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Documentación
          </Link>
          <Link
            href="/estadisticas"
            className="block px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Estadísticas
          </Link>
        </nav>
      </div>
    </div>
  );
}
