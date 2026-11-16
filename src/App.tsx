import { useMemo, useState } from 'react'
import { ArrowRight, BookOpen, Compass, GraduationCap, Search, Sparkles, Users } from 'lucide-react'
import ExperienceCard from './components/ExperienceCard'
import ExperienceModal from './components/ExperienceModal'
import { experiences } from './data/experiences'
import type { Category, Experience } from './types'

const categories: Category[] = ['Todas', 'Tecnologia', 'Criatividade', 'Idiomas', 'Carreira']

export default function App() {
  const [category, setCategory] = useState<Category>('Todas')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Experience | null>(null)

  const filtered = useMemo(() => experiences.filter(item => {
    const matchesCategory = category === 'Todas' || item.category === category
    const term = search.trim().toLocaleLowerCase('pt-BR')
    const matchesSearch = !term || `${item.title} ${item.description} ${item.category}`.toLocaleLowerCase('pt-BR').includes(term)
    return matchesCategory && matchesSearch
  }), [category, search])

  return (
    <main className="min-h-screen bg-[#f8f8f4] text-stone-900">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 text-2xl font-black tracking-tight"><span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-600 text-white"><Sparkles size={20} /></span>studyverse<span className="text-violet-600">.</span></a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-stone-600 md:flex"><a href="#experiencias" className="hover:text-violet-700">Experiências</a><a href="#sobre" className="hover:text-violet-700">Como funciona</a><a href="#comunidade" className="hover:text-violet-700">Comunidade</a></nav>
        <a href="#experiencias" className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700">Começar agora</a>
      </header>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:pt-20">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-violet-700"><Sparkles size={14} />Seu próximo capítulo começa aqui</div>
          <h1 className="max-w-2xl text-5xl font-black leading-[1.05] tracking-[-.05em] sm:text-6xl lg:text-7xl">Aprender pode ser uma <span className="text-violet-600">experiência.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">Explore experiências curtas, descubra novos interesses e transforme curiosidade em conhecimento — no seu ritmo.</p>
          <div className="mt-9 flex flex-wrap gap-3"><a href="#experiencias" className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-4 font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700">Explorar catálogo <ArrowRight size={18} /></a><a href="#sobre" className="rounded-full border border-stone-300 px-7 py-4 font-semibold text-stone-700 hover:bg-white">Conhecer o Studyverse</a></div>
          <div className="mt-12 flex items-center gap-8 text-sm text-stone-500"><span className="flex items-center gap-2"><BookOpen size={17} className="text-violet-600" />Aprenda fazendo</span><span className="flex items-center gap-2"><Compass size={17} className="text-violet-600" />Explore sem limites</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-amber-200/70 blur-2xl" /><div className="absolute -right-3 bottom-0 h-40 w-40 rounded-full bg-violet-300/60 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-3 rounded-[2rem] bg-white p-3 shadow-2xl shadow-stone-200/80">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=85" alt="Pessoas estudando em grupo" className="col-span-2 h-56 w-full rounded-[1.4rem] object-cover sm:h-64" />
            <div className="rounded-2xl bg-violet-600 p-5 text-white"><GraduationCap size={25} /><p className="mt-8 text-3xl font-black">Seu ritmo.</p><p className="mt-1 text-sm text-violet-100">Sua jornada de descoberta.</p></div>
            <div className="flex flex-col justify-between rounded-2xl bg-amber-100 p-5"><Users size={25} className="text-amber-800" /><p className="text-lg font-bold leading-tight text-amber-950">Conhecimento que conecta.</p></div>
          </div>
        </div>
      </section>
      <section id="sobre" className="border-y border-stone-200 bg-white"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-9 sm:grid-cols-3 lg:px-8">
        {[['01','Descubra','Encontre temas que despertam sua curiosidade.'],['02','Experimente','Aprenda com atividades leves e práticas.'],['03','Evolua','Construa conhecimento uma experiência por vez.']].map(([n,t,d]) => <div key={n} className="flex gap-4"><span className="text-sm font-black text-violet-600">{n}</span><div><h3 className="font-bold">{t}</h3><p className="mt-1 text-sm leading-6 text-stone-500">{d}</p></div></div>)}
      </div></section>
      <section id="experiencias" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-sm font-bold uppercase tracking-[.2em] text-violet-600">Experience Hub</p><h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Um universo para explorar<span className="text-violet-600">.</span></h2><p className="mt-3 max-w-xl text-stone-500">Escolha por onde começar. Sempre existe algo novo para descobrir.</p></div>
          <label className="flex w-full items-center gap-3 rounded-full border border-stone-200 bg-white px-5 py-3 md:max-w-xs"><Search size={18} className="text-stone-400" /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar experiências..." className="w-full bg-transparent text-sm outline-none placeholder:text-stone-400" /></label>
        </div>
        <div className="mt-9 flex flex-wrap gap-2">{categories.map(item => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${category === item ? 'bg-stone-900 text-white' : 'border border-stone-200 bg-white text-stone-600 hover:border-violet-300 hover:text-violet-700'}`}>{item}</button>)}</div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(experience => <ExperienceCard key={experience.id} experience={experience} onSelect={setSelected} />)}</div>
        {filtered.length === 0 && <div className="rounded-3xl border border-dashed border-stone-300 bg-white py-16 text-center"><Search size={28} className="mx-auto text-stone-400" /><h3 className="mt-4 text-xl font-bold">Nenhuma experiência encontrada</h3><p className="mt-2 text-sm text-stone-500">Tente outro termo ou selecione uma categoria diferente.</p><button onClick={() => {setSearch('');setCategory('Todas')}} className="mt-5 font-semibold text-violet-700">Limpar filtros</button></div>}
      </section>
      <section id="comunidade" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8"><div className="overflow-hidden rounded-[2rem] bg-stone-900 px-8 py-12 text-white sm:px-14 sm:py-16"><div className="max-w-2xl"><div className="flex items-center gap-2 text-sm font-semibold text-violet-300"><Users size={17} />Uma comunidade em construção</div><h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">A curiosidade fica melhor quando é compartilhada.</h2><p className="mt-4 leading-7 text-stone-300">O Studyverse está começando. Em breve, novas formas de aprender, compartilhar e evoluir em comunidade.</p><a href="#experiencias" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-stone-900 hover:bg-violet-100">Explorar agora <ArrowRight size={17} /></a></div></div></section>
      <footer className="border-t border-stone-200 px-5 py-8 text-center text-sm text-stone-500">© {new Date().getFullYear()} Studyverse. Feito para quem nunca para de descobrir.</footer>
      <ExperienceModal experience={selected} onClose={() => setSelected(null)} />
    </main>
  )
}
