import Link from 'next/link';

export default function Projetos() {
  return (
    <div className="bg-black grid grid-rows-[1px_15rem_1px] items-center justify-items-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] scroll-smooth min-h-screen m-auto">
      
      <nav className="font-bold font-sans bg-black inline-block text-transparent border-2 border-amber-50 rounded-full p-3.5">

          <div className="flex space-x-8 text-xl text-white ">

            <Link href="/" className="transition-colors duration-300 hover:text-blue-400">Home</Link>
            <Link href="/projetos" className="transition-colors duration-300 hover:text-blue-400">Projetos</Link>
            <Link href="/skills" className="transition-colors duration-300 hover:text-blue-400">Skills</Link>
            <a href="Contact" className="transition-colors duration-300 hover:text-blue-400">Contatos</a>

          </div>
        </nav>


      
        <h1 className="text-6xl font-bold font-sans bg-gradient-to-r from-white via-gray-400 to-indigo-200 inline-block text-transparent bg-clip-text">Projetos</h1>

        

        <div className="w-full flex flex-wrap justify-center gap-15 mt-60">

        <div>
          <a href="https://www.google.com/?hl=pt-BR">
            <img className="w-90 h-58 mt-5 cursor-pointer rounded-b-3xl
                drop-shadow-[0_4px_12px_rgba(128,0,255,0.6)]
                hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]
                hover:scale-105 hover:rotate-1
                transition-all duration-300 ease-in-out" src="https://repository-images.githubusercontent.com/337150944/a51e8900-6aec-11eb-8c14-9119664dccda"></img >

          </a>

          <a href= "https://www.google.com/?hl=pt-BR" className="block transition-colors duration-300 hover:text-blue-400 text-amber-50 text-center mt-5 text-xl font-bold">Site 1</a>

        </div>


        <div>
          <a href="https://www.google.com/?hl=pt-BR">
            <img className="w-90 h-58 mt-5 cursor-pointer rounded-b-3xl
                drop-shadow-[0_4px_12px_rgba(128,0,255,0.6)]
                hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]
                hover:scale-105 hover:rotate-1
                transition-all duration-300 ease-in-out" src="https://www.codewithfaraz.com/blog_img/15%20React%20Portfolio%20Templates%20in%202023%20SPA%20Portfolio%20Template.jpg"></img >

                
          </a>

            <a href= "https://www.google.com/?hl=pt-BR" className="block transition-colors duration-300 hover:text-blue-400 text-amber-50 text-center mt-5 text-xl font-bold">Site 2</a>

        </div>


        <div>
          <a href="https://www.google.com/?hl=pt-BR">
            <img className="w-90 h-58 mt-5 cursor-pointer rounded-b-3xl
                drop-shadow-[0_4px_12px_rgba(128,0,255,0.6)]
                hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]
                hover:scale-105 hover:rotate-1
                transition-all duration-300 ease-in-out" src="https://media.licdn.com/dms/image/v2/C5612AQHCSq9IgKEVDA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1589542816790?e=2147483647&v=beta&t=0xGq_FKfRY7g26r8G4jfzMNz9tHJfkBbD7ocNX0wbbs"></img >
          </a>

          <a href= "https://www.google.com/?hl=pt-BR" className="block transition-colors duration-300 hover:text-blue-400 text-amber-50 text-center mt-5 text-xl font-bold">Site 3</a>

        </div>


        </div>
     

     

    
        

    </div>
  );
}