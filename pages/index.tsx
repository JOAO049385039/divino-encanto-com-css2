import React from 'react';
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Divino Encanto</title>
        <meta name="description" content="Perfumes, cosméticos, suplementos e eletrônicos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Divino Encanto</h1>
          <nav className="space-x-4">
            <Link href="/produtos">Produtos</Link>
            <Link href="/contato">Contato</Link>
            <Link href="/login">Login</Link>
          </nav>
        </div>
      </header>

      <main className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Bem-vindo à Divino Encanto</h2>
        <p className="mb-8">A sua loja de perfumes, cosméticos, suplementos e eletrônicos com qualidade e confiança.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card><CardContent><h3 className="text-xl font-semibold">Perfumes</h3><p>Fragrâncias incríveis das melhores marcas.</p></CardContent></Card>
          <Card><CardContent><h3 className="text-xl font-semibold">Cosméticos</h3><p>Beleza e cuidado com você.</p></CardContent></Card>
          <Card><CardContent><h3 className="text-xl font-semibold">Suplementos</h3><p>Saúde e bem-estar em primeiro lugar.</p></CardContent></Card>
          <Card><CardContent><h3 className="text-xl font-semibold">Eletrônicos</h3><p>Tecnologia com o melhor custo-benefício.</p></CardContent></Card>
        </div>
      </main>

      <footer className="p-4 bg-gray-100 mt-12 text-center">
        <p>&copy; 2025 Divino Encanto Unipessoal Lda | NIF: 517772221 | geral@divinoencanta.com</p>
        <p>+351 931 307 266</p>
      </footer>
    </div>
  );
}
