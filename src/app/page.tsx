export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Bem-vindo ao Futuro
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubra uma nova maneira de experimentar a tecnologia com nossa plataforma inovadora
          </p>
        </header>

        {/* Main Content */}
        <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Performance</h3>
            <p className="text-gray-600 leading-relaxed">
              Experiência ultra-rápida com tecnologia de ponta que garante o melhor desempenho possível.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Design</h3>
            <p className="text-gray-600 leading-relaxed">
              Interface moderna e intuitiva criada com as melhores práticas de UX/UI design.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Segurança</h3>
            <p className="text-gray-600 leading-relaxed">
              Seus dados protegidos com as mais avançadas tecnologias de criptografia e segurança.
            </p>
          </div>
        </main>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Pronto para começar?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de usuários que já descobriram o poder da nossa plataforma
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                Começar Agora
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-400 transition-all duration-300 hover:bg-gray-50">
                Saiba Mais
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 text-center">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              Sobre
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              Recursos
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              Preços
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              Contato
            </a>
          </div>
          <p className="text-gray-500">
            © 2024 Minha Empresa. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
}
