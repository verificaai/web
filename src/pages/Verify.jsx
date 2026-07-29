import { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Upload } from '../components/Upload'
import { Check, Search, ShieldCheck } from "lucide-react"

const BRAND = { green: '#00CB00', blue: '#183EFF', orange: '#FF5900', yellow: '#FFCB00' };

export function Verify() {
  return (
    <div className = 'flex min-h-screen flex-col bg-background'>
      <Header />
      <main className = 'relative flex-1 overflow-hidden px-5 pt-16 pb-24 sm:pt-24'>
        <div aria-hidden = 'true' className = 'pointer-events-none absolute inset-0 overflow-hidden'>
          <div className = 'absolute -left=24 top-0 h-72 w-72 rounded-full opacity-20 blur-3xl' style = {{ backgroundColor: BRAND.green }} />
          <div className = 'absolute -right-20 top-32 h-80 w-80 rounded-full opacity-20 blur-2xl' style = {{ backgroundColor:BRAND.blue }} />
          <div className = 'absolute bottom-0 left-1/3 h-64 w-64 rounded-full opacity-[0.18] blur 3xl' style = {{ backgroundColor: BRAND.yellow }} />
        </div>

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
