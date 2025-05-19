import Link from 'next/link';

export default function Skills() {
  return (
    <div className="bg-black min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] scroll-smooth">

      {/* NAVBAR */}
      <nav className="font-bold font-sans border-2 border-amber-50 rounded-full p-3.5 mb-16 w-fit mx-auto">
        <div className="flex space-x-8 text-xl text-white">
          <Link href="/" className="transition-colors duration-300 hover:text-blue-400">Home</Link>
          <Link href="/projetos" className="transition-colors duration-300 hover:text-blue-400">Projetos</Link>
          <Link href="/skills" className="transition-colors duration-300 hover:text-blue-400">Skills</Link>
          <a href="#contact" className="transition-colors duration-300 hover:text-blue-400">Contatos</a>
        </div>
      </nav>

      {/* TÍTULO */}
      <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-gradient-to-r from-white via-gray-400 to-indigo-200 bg-clip-text text-center mb-20">Skills</h1>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">

        {/* Skill Item */}
        <div className="flex items-center space-x-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/768px-Python.svg.png" className="w-20 h-20 rounded-full bg-white p-2  
                drop-shadow-[0_4px_17px_rgba(0,0,255,0.6)]
                hover:drop-shadow-[0_4px_17px_rgba(255,255,0,0.6)] 
                hover:scale-105 hover:rotate-1
                transition-all duration-300 ease-in-out cursor-pointer" alt="Python Logo" />
          <div>
            <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-yellow-300 to-blue-600 bg-clip-text">Python</h2>
            <p className="text-white">Linguagem versátil usada para desenvolvimento web, automação, análise de dados e inteligência artificial.</p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" className="w-20 h-20 rounded-full bg-white p-2  
                drop-shadow-[0_4px_17px_rgba(255,0,0,0.6)]
                hover:drop-shadow-[0_4px_17px_rgba(102,204,255,0.6)]
                hover:scale-105 hover:rotate-1
                transition-all duration-300 ease-in-out cursor-pointer" alt="Java Logo" />
          <div>
            <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text">Java</h2>
            <p className="text-white">Linguagem orientada a objetos amplamente utilizada em aplicações corporativas e Android.</p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <img src="https://cdn-icons-png.flaticon.com/512/4299/4299956.png" className="w-20 h-20 rounded-full bg-white p-2  
                drop-shadow-[0_4px_17px_rgba(255,255,255,0.6)]
                hover:drop-shadow-[0_4px_17px_rgba(0,255,255,0.6)]
                hover:scale-105 hover:rotate-1
                transition-all duration-300 ease-in-out cursor-pointer" alt="SQL Logo" />
          <div>
            <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text">SQL</h2>
            <p className="text-white">Linguagem para gerenciamento e consulta de bancos de dados relacionais.</p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" className="w-20 h-20 rounded-full bg-white p-2  
                drop-shadow-[0_4px_17px_rgba(255,255,255,0.6)]
                hover:drop-shadow-[0_4px_17px_rgba(255,165,0,0.6)]
                hover:scale-105 hover:rotate-1
                transition-all duration-300 ease-in-out cursor-pointer" alt="HTML Logo" />
          <div>
            <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-orange-300 to-pink-500 bg-clip-text">HTML</h2>
            <p className="text-white">Linguagem de marcação usada para estruturar páginas web.</p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" className="w-20 h-20 rounded-full bg-white p-2  
                drop-shadow-[0_4px_17px_rgba(255,255,255,0.6)]
                hover:drop-shadow-[0_4px_17px_rgba(0,255,255,0.6)]
                hover:scale-105 hover:rotate-1
                transition-all duration-300 ease-in-out cursor-pointer" alt="CSS Logo" />
          <div>
            <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text">CSS</h2>
            <p className="text-white">Estiliza o conteúdo HTML, controlando cores, layout e responsividade.</p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <img src="https://img.icons8.com/color/200/tailwindcss.png" className="w-20 h-20 rounded-full bg-white p-2  
                drop-shadow-[0_4px_17px_rgba(255,255,255,0.6)]
                hover:drop-shadow-[0_4px_17px_rgba(0,255,255,0.6)]
                hover:scale-105 hover:rotate-1
                transition-all duration-300 ease-in-out cursor-pointer" alt="Tailwind Logo" />
          <div>
            <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text">Tailwind</h2>
            <p className="text-white">Tailwind CSS é um framework CSS utilitário que permite criar designs modernos e responsivos diretamente no HTML com classes pré-definidas. </p>
          </div>
        </div>
        


      </div>
    </div>
  );
}