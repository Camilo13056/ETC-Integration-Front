'use client';

import { useState } from 'react';
import Sidebar from '@/app/Components/sidebar';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';


export default function ListaUsuarios() {
  // Mock data - replace with your actual data fetching logic
  const [users] = useState([
    { id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
    { id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },
    { id: 3, name: 'Usuario 3', email: 'usuario3@example.com' },
    { id: 4, name: 'Usuario 4', email: 'usuario4@example.com' },
    { id: 5, name: 'Usuario 5', email: 'usuario5@example.com' },
    { id: 6, name: 'Usuario 6', email: 'usuario6@example.com' },
  ]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleEdit = (id) => {
    console.log('Edit user:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete user:', id);
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        } flex items-center justify-center`}
      >
        {/* Button to toggle sidebar */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-4 text-white bg-blue-500 hover:bg-blue-600 transition-colors fixed top-4 left-4 rounded-full shadow-lg z-50"
        >
          {isSidebarOpen ? <HiChevronLeft size={20} /> : <HiChevronRight size={20} />}
        </button>


        {/* Centered Table */}
        <main className="w-full max-w-4xl">

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-2xl text-black font-semibold text-center">Lista de Usuarios</h1>
            </div>

            <div className="divide-y divide-gray-200">
              {users.map((user, index) => (
                <div
                  key={user.id}
                  className={`p-4 flex justify-between items-center ${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  <div>
                    <h3 className="font-medium text-black">{user.name}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(user.id)}
                      className="w-8 h-8 rounded-full bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center transition-colors"
                      aria-label="Editar usuario"
                    />
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors"
                      aria-label="Eliminar usuario"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
