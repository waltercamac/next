import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About - Walter Camac',
  description: 'Página de información sobre el proyecto',
  keywords: ['about page', 'información', 'proyecto']
};

export default function AboutPage() {
  return (
    <>
      <span className="text-3xl">Página de About</span>
    </>
  )
}
