'use client';

import { useState } from 'react';
import Sidebar from '@/app/Components/sidebar';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export default function AgregarUsuario() {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    tipoDocumento: '',
    numeroDocumento: '',
    correo: '',
    telefono: '',
    rol: '',
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Contenido principal que se mueve con el sidebar */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        {/* Botón para abrir/cerrar el Sidebar */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-4 text-white bg-blue-500 hover:bg-blue-600 transition-colors fixed top-4 left-4 rounded-full shadow-lg z-50"
        >
          {isSidebarOpen ? <HiChevronLeft size={20} /> : <HiChevronRight size={20} />}
        </button>

        {/* Contenido principal */}
        <main className="flex justify-center items-center min-h-screen">
          <div className="w-full max-w-3xl bg-white rounded-3xl shadow-sm border p-10">
           

            <h1 className="text-3xl text-black font-semibold text-center mb-8">Agregar Usuario</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombres</label>
                  <input
                    type="text"
                    name="nombres"
                    value={formData.nombres}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-full bg-blue-100"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Apellidos</label>
                  <input
                    type="text"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-full bg-blue-100"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Documento</label>
                  <input
                    type="text"
                    name="tipoDocumento"
                    value={formData.tipoDocumento}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-full bg-blue-100"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Número de Documento</label>
                  <input
                    type="text"
                    name="numeroDocumento"
                    value={formData.numeroDocumento}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-full bg-blue-100"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
                  <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-full bg-blue-100"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Número de Teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-full bg-blue-100"
                    required
                  />
                </div>

                <div>
                  <label className="block justify-align text-sm font-medium text-gray-700 mb-2">Rol</label>
                  <input
                    type="text"
                    name="rol"
                    value={formData.rol}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-full bg-blue-100"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-24 py-3 rounded-full hover:bg-blue-600 transition-colors"
                >
                  Crear
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
