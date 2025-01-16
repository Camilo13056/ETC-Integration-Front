'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <Image
              src="/img/Logo.png"
              alt="Logo ETC-INTEGRATION"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-xl text-gray-800">ETC-INTEGRATION</span>
          </div>
          {/* Navigation Links */}
          <nav className="flex items-center gap-6">
            <a
              href="/"
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <Link
              href="/Login"
              className="text-sm font-medium px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              Iniciar
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight lg:text-5xl text-gray-900">
              Bienvenidos al Sistema de Integración para la Empresa
            </h1>
            <p className="text-gray-600 leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-[400px] aspect-square bg-gradient-to-r from-blue-500 to-blue-300 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Logo</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 h-16 flex items-center justify-center">
          <a
            href="mailto:etc.integration@gmail.com"
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            etc.integration@gmail.com
          </a>
        </div>
      </footer>
    </div>
  )
}
