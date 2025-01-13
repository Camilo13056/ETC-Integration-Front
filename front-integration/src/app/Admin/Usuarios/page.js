import NavBar from '@/app/Components/nav-bar'
import Card from '@/app/Components/card'

export default function Home() {
  const loremText = "Lorem ipsum dolor sit amet consectetur adipiscing elit, aliquam leo rutrum porta laoreet luctus diam, etiam mi aptent tristique ultrices potenti. A tortor lacinia id malesuada arcu lacus sollicitudin enim, mus erat montes dapibus torquent volutpat urna, diam turpis integer ornare auctor habitant non. Aptent dignissim platea rhoncus ac potenti pretium."

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
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
  )
}