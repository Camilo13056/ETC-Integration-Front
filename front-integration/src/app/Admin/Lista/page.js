'use client'

import { useState } from 'react'
import NavBar from '@/app/Components/nav-bar'
import BotonVolver from '@/app/Components/boton-volver'

export default function ListaUsuarios() {
  // Mock data - replace with your actual data fetching logic
  const [users] = useState([
    { id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
    { id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },
    { id: 3, name: 'Usuario 3', email: 'usuario3@example.com' },
    { id: 4, name: 'Usuario 4', email: 'usuario4@example.com' },
    { id: 5, name: 'Usuario 5', email: 'usuario5@example.com' },
    { id: 6, name: 'Usuario 6', email: 'usuario6@example.com' },
  ])

  const handleEdit = (id) => {
    console.log('Edit user:', id)
  }

  const handleDelete = (id) => {
    console.log('Delete user:', id)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <BotonVolver />
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-semibold text-center">Lista de Usuarios</h1>
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
                  <h3 className="font-medium">{user.name}</h3>
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
  )
}