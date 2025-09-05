import Link from "next/link";
export default function HomePage() {
  return (
   
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start ">
       <span className="text-5xl text-center" >Pagina Principal</span>
       <Link href='/about'>AboutPage</Link>
      </main>
      
      
   
  );
}
