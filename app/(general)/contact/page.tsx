import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact - Walter Camac',
  description: 'Página de contacto',
  keywords: ['contacto', 'información', 'comunicación']
};

export default function ContactPage() {
  return (
    <>
      <span className="text-3xl">Página de Contacto</span>
    </>
  )
}
