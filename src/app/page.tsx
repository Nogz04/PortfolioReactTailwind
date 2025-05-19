import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black grid grid-rows-[1px_15rem_1px] items-center justify-items-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <nav className="font-bold font-sans bg-black inline-block text-transparent border-2 border-amber-50 rounded-full p-3.5">

          <div className="flex space-x-8 text-2xl text-white ">

            <a href="Home" className="transition-colors duration-300 hover:text-blue-400 transition">Home</a>
            <a href="Home" className="transition-colors duration-300 hover:text-blue-400">Sobre</a>
            <a href="Home" className="transition-colors duration-300 hover:text-blue-400">Projetos</a>
            <a href="Home" className="transition-colors duration-300 hover:text-blue-400">Contatos</a>

          </div>
        </nav>


      
        <h1 className="text-6xl font-bold font-sans bg-gradient-to-r from-white via-gray-400 to-indigo-200 inline-block text-transparent bg-clip-text">Matheus Nogueira</h1>

        <div className="mt-30">

          <img src="https://scontent.fria4-2.fna.fbcdn.net/v/t39.30808-6/476923356_2695607933944952_1997747113682510285_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=jDgpOFsWRNMQ7kNvwFuKVOf&_nc_oc=Adnv65qmddMGW8ODY-twxQ67cUcbLDmfhhEr_82QV3eP2Cuba2mXxnVjrFDOP0qOmco&_nc_zt=23&_nc_ht=scontent.fria4-2.fna&_nc_gid=gakcaHVV0DCosx5NdZo0kg&oh=00_AfLiqmDT5UD_0dKkjGIO6miC2-UHbNMaPfkItPojTxoKBA&oe=68302BA0" className="w-60 h-60 rounded-full border-amber-50 border-3"></img>


        </div>

        <div className="w-2xl mr-auto -mt-30">

            <h3 className="text-amber-50 text-2xl font-bold font-sans mt-16 -ml-5.5 p-5">Sobre mim</h3>
            <p className="text-amber-50">Aenean porttitor nisl laoreet quam volutpat gravida. Pellentesque rhoncus, turpis at euismod interdum, arcu urna hendrerit neque, sit amet iaculis libero felis quis ipsum. Nullam eleifend ex et nibh pharetra pellentesque. Quisque fringilla nibh quis sapien tincidunt elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ullamcorper at augue eu fermentum. Nam auctor, velit vitae vehicula consequat, odio ipsum porta sapien, non sodales diam erat id magna.</p>

        </div>
        

    </div>
  );
}
