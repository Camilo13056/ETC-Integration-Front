'use client';

import { useState } from 'react';
import Sidebar from '@/app/Components/sidebar';
import Card from '@/app/Components/card';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const loremText =
    'Lorem ipsum dolor sit amet consectetur adipiscing elit, aliquam leo rutrum porta laoreet luctus diam, etiam mi aptent tristique ultrices potenti. A tortor lacinia id malesuada arcu lacus sollicitudin enim, mus erat montes dapibus torquent volutpat urna, diam turpis integer ornare auctor habitant non. Aptent dignissim platea rhoncus ac potenti pretium.';

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
        {/* Toggle Sidebar Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-4 text-white bg-blue-500 hover:bg-blue-600 transition-colors fixed top-4 left-4 rounded-full shadow-lg z-50"
        >
          {isSidebarOpen ? '<' : '>'}
        </button>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card
              title="Agregar Usuario"
              description={loremText}
              href="/Admin/Agregar"
            />
            <Card
              title="Lista de Usuarios"
              description={loremText}
              href="/Admin/Lista"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
