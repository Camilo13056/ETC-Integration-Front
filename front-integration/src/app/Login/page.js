'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your login logic here
    console.log('Login attempt:', formData)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <header className="border-b border-gray-200">
        <div className="container flex h-16 items-center px-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <Image
                src="/img/Logo.png"
                alt="Logo ETC-INTEGRATION"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-bold text-xl text-gray-800">ETC-INTEGRATION</span>
            </div>
            <Link 
              href="/Home"
              className="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
            >
              Home
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-[400px] mx-4 bg-white shadow-md rounded-lg">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Iniciar sesión</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Usuario"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#E8F0FE] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#E8F0FE] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="text-center">
                <a href="/OlvideContrasena" className="text-sm text-gray-600 hover:text-blue-600">
                  Olvidé mi contraseña
                </a>
              </div>
              <button 
                type="submit" 
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors"
              >
                Ingresar
              </button>
            </form>
            <div className="mt-8 text-center text-sm text-gray-600">
              etc.integration@gmail.com
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
