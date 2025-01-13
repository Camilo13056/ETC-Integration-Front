'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
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
            <a href="/" className="text-sm text-gray-600 hover:text-blue-600">
              Home
            </a>
            <Link
                href="/Login"
                className="text-sm font-medium px-4 py-2 bg-[#4285F4] text-white rounded-full hover:bg-[#3367D6] transition-colors"
              >
                Iniciar
              </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight lg:text-5xl text-gray-900">
              BIENVENIDOS AL SISTEMA DE INTEGRACIÓN PARA LA EMPRESA
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-[400px] aspect-square bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-center">
          <a 
            href="mailto:etc.integration@gmail.com"
            className="text-blue-600 hover:text-blue-700"
          >
            etc.integration@gmail.com
          </a>
        </div>
      </footer>
    </div>
  )
}
