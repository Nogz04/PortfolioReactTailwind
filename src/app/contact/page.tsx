import Link from 'next/link';

export default function Contact() {
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


      
        <h1 className="text-6xl font-bold font-sans bg-gradient-to-r from-white via-gray-400 to-indigo-200 inline-block text-transparent bg-clip-text">Matheus Nogueira</h1>

        <div className="mt-40">

          <img src="https://scontent.fria4-2.fna.fbcdn.net/v/t39.30808-6/476923356_2695607933944952_1997747113682510285_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=jDgpOFsWRNMQ7kNvwFuKVOf&_nc_oc=Adnv65qmddMGW8ODY-twxQ67cUcbLDmfhhEr_82QV3eP2Cuba2mXxnVjrFDOP0qOmco&_nc_zt=23&_nc_ht=scontent.fria4-2.fna&_nc_gid=gakcaHVV0DCosx5NdZo0kg&oh=00_AfLiqmDT5UD_0dKkjGIO6miC2-UHbNMaPfkItPojTxoKBA&oe=68302BA0" className="w-60 h-60 rounded-full border-amber-50 border-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"></img>


        </div>


      {/* Esse é um comentário JSX dentro do retorno 
        <div className="w-2xl mr-auto -mt-30">

            <h3 id="sobre" className="text-amber-50 text-2xl font-bold font-sans mt-16 -ml-5.5 p-5">Sobre mim</h3>
            <p className="text-amber-50">Aenean porttitor nisl laoreet quam volutpat gravida. Pellentesque rhoncus, turpis at euismod interdum, arcu urna hendrerit neque, sit amet iaculis libero felis quis ipsum. Nullam eleifend ex et nibh pharetra pellentesque. Quisque fringilla nibh quis sapien tincidunt elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ullamcorper at augue eu fermentum. Nam auctor, velit vitae vehicula consequat, odio ipsum porta sapien, non sodales diam erat id magna.</p>

        </div>
      */}

        <div className="w-2xl mt-60">

            <h2 id="projetos" className="bg-gradient-to-r from-purple-200 to-purple-950 text-4xl font-bold font-sans mt-16 -ml-5.5 p-5 text-center text-transparent bg-clip-text">Projetos</h2>
            


        </div>

        <div className="w-full flex flex-wrap justify-center gap-15 mt-5">

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