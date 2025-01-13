'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your password reset logic here
    console.log('Password reset requested for:', email)
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
            <div className="flex items-center gap-4">
              <Link 
                href="/Home"
                className="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/Login"
                className="text-sm font-medium px-4 py-2 bg-[#4285F4] text-white rounded-full hover:bg-[#3367D6] transition-colors"
              >
                Iniciar
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-[400px] mx-4 bg-white shadow-md rounded-lg">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-center mb-2">¿Olvidaste tu contraseña?</h2>
            <p className="text-center text-gray-600 mb-6">
              Te enviaremos tu nueva contraseña a tu correo electrónico.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Ingresa tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#E8F0FE] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-2 px-4 bg-[#4285F4] hover:bg-[#3367D6] text-white font-semibold rounded-md transition-colors"
              >
                Enviar
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
