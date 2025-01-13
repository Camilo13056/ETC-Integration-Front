import './globals.css'

export const metadata = {
  title: 'ETC-INTEGRATION',
  description: 'Sistema de integración para la empresa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  )
}

