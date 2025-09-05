import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing - Walter Camac',
  description: 'Página de precios',
  keywords: ['precios', 'pricing', 'costos']
};

export default function PricingPage() {
  return (
    <>
      <span className="text-3xl">Página de Precios</span>
    </>
  )
}
