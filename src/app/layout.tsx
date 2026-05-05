import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";



export const metadata: Metadata = {
  title: "Lista de Espera · IA aplicada a Redes Sociales | Creative Diseños Academy",
  description: "Sé de los primeros en acceder a las formaciones de Creative Diseños Academy en IA aplicada a redes sociales. Antes que nadie. A precio fundador.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="antialiased dark"
    >
      <body className="min-h-screen bg-black text-white selection:bg-academy-red selection:text-white flex flex-col font-sans">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
