import { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Upload } from '../components/Upload'
import { Check, Search, ShieldCheck } from "lucide-react"
import { Bubbles } from '../components/Bubbles'

const BRAND = { green: '#00CB00', blue: '#183EFF', orange: '#FF5900', yellow: '#FFCB00' };

export function Verify() {
  return (
    <div className = 'relative flex min-h-screen flex-col'>
      <Bubbles />
      <Header />
      <main className = 'relative flex-1 overflow-hidden px-5 pt-16 pb-24 sm:pt-24'>
        <div className = 'relative mx-auto max-w-4xl'>
          <h1 className = 'text-3xl font-bold tracking-tight text-foreground sm:text-3xl'>
            Verificar
          </h1>

          <p className = 'mt-3 text-base text-muted-foreground'>
            É fácil, quer ver?
          </p>

          <div className = 'mt-10'>
            <Upload />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
