import type{ Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords:['aboud page','contactos','informacion']
};

export default function AboutPage (){
  return (
     
    <>
    <span className="text-3xl">Pagina de About</span>
  
    </>

  )
}