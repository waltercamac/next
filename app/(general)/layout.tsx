import { Navbar } from "@/components";





export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
     <Navbar/>
     <div>
      <h1>Aqui tendremos nuestro nav bar</h1>
      {children}
    </div>
    </>
   
  );
}