import { useMemo, useState } from 'react'
import { ArrowRight, BookOpen, Compass, GraduationCap, Search, Sparkles, Users, X } from 'lucide-react'
import ExperienceCard from './components/ExperienceCard'
import ExperienceModal from './components/ExperienceModal'
import WorldCard from './components/WorldCard'
import { experiences } from './data/experiences'
import { worlds, type World } from './data/worlds'
import type { Category, Experience } from './types'

const categories: Category[] = ['Todas', 'Tecnologia', 'Criatividade', 'Idiomas', 'Carreira']
const readStored = (key: string): string[] => {
  try { const value = localStorage.getItem(key); return value ? JSON.parse(value) as string[] : [] } catch { return [] }
}

export default function App() {
  const [category, setCategory] = useState<Category>('Todas')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Experience | null>(null)
  const [activeWorld, setActiveWorld] = useState<World | null>(null)
  const [favorites, setFavorites] = useState<string[]>(() => readStored('studyverse:favorites'))
  const [recent, setRecent] = useState<string[]>(() => readStored('studyverse:recent'))

  const filtered = useMemo(() => experiences.filter(item => {
    const matchesCategory = category === 'Todas' || item.category === category
    const term = search.trim().toLocaleLowerCase('pt-BR')
    const matchesSearch = !term || `${item.title} ${item.description} ${item.category}`.toLocaleLowerCase('pt-BR').includes(term)
    return matchesCategory && matchesSearch
  }), [category, search])

  const toggleFavorite = (id: string) => {
    setFavorites(current => {
      const next = current.includes(id) ? current.filter(item => item !== id) : [...current, id]
      localStorage.setItem('studyverse:favorites', JSON.stringify(next))
      return next
    })
  }
  const openWorld = (world: World) => {
    setActiveWorld(world)
    setRecent(current => {
      const next = [world.id, ...current.filter(id => id !== world.id)].slice(0, 5)
      localStorage.setItem('studyverse:recent', JSON.stringify(next))
      return next
    })
  }
  const studyWorlds = worlds.filter(world => world.category === 'study')
  const lifeWorlds = worlds.filter(world => world.category === 'life')
  const recentWorlds = recent.map(id => worlds.find(world => world.id === id)).filter((world): world is World => Boolean(world))

  return (
    <main className="min-h-screen bg-[#f8f8f4] text-stone-900">
      <header className="sticky top-0 z-30 border-b border-stone-200/80 bg-[#f8f8f4]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-2 text-2xl font-black tracking-tight"><span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-600 text-white"><Sparkles size={20} /></span>studyverse<span className="text-violet-600">.</span></a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-stone-600 md:flex"><a href="#worlds" className="hover:text-violet-700">Meus mundos</a><a href="#study" className="hover:text-violet-700">Estudos</a><a href="#lifestyle" className="hover:text-violet-700">Lifestyle</a><a href="#experiencias" className="hover:text-violet-700">Experience Hub</a></nav>
          <a href="#worlds" className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700">Explorar mundos</a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:pt-20">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-violet-700"><Sparkles size={14} />Seu universo de possibilidades</div>
          <h1 className="max-w-2xl text-5xl font-black leading-[1.05] tracking-[-.05em] sm:text-6xl lg:text-7xl">Um mundo inteiro para <span className="text-violet-600">evoluir.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">Estude, crie, organize sua vida e descubra novas experiências. Entre em um mundo que combina com o seu próximo passo.</p>
          <div className="mt-9 flex flex-wrap gap-3"><a href="#worlds" className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-4 font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700">Explorar mundos <ArrowRight size={18} /></a><a href="#experiencias" className="rounded-full border border-stone-300 px-7 py-4 font-semibold text-stone-700 hover:bg-white">Ver experiências</a></div>
          <div className="mt-12 flex flex-wrap items-center gap-7 text-sm text-stone-500"><span className="flex items-center gap-2"><BookOpen size={17} className="text-violet-600" />Aprenda fazendo</span><span className="flex items-center gap-2"><Compass size={17} className="text-violet-600" />Explore no seu ritmo</span></div>
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

      <section id="worlds" className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-8 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[.22em] text-violet-600">Your personal universe</p><h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Explore seus mundos<span className="text-violet-600">.</span></h2><p className="mt-2 text-stone-500">Experiências diferentes, conectadas em um só lugar.</p></div><div className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-600">{worlds.length} mundos no universo</div></div>
        {recentWorlds.length > 0 && <div className="mb-10"><h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-stone-500">Continue de onde parou</h3><div className="flex flex-wrap gap-3">{recentWorlds.map(world => <button key={world.id} onClick={() => openWorld(world)} className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-800 hover:bg-violet-100">{world.icon} {world.title} <span className="ml-1">↗</span></button>)}</div></div>}
      </section>

      <section id="study" className="scroll-mt-24 bg-[#eeedf4] py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mb-7 flex items-end justify-between gap-4"><div><p className="text-xs font-extrabold uppercase tracking-[.22em] text-indigo-700">Focus · Learn · Achieve</p><h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Study &amp; Performance</h2><p className="mt-2 text-stone-600">Planejamento, produtividade e evolução acadêmica.</p></div><span className="hidden rounded-full bg-white px-4 py-2 text-xs font-bold text-indigo-700 sm:inline-flex">07 experiências</span></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{studyWorlds.map(world => <WorldCard key={world.id} world={world} onOpen={openWorld} favorite={favorites.includes(world.id)} onFavorite={toggleFavorite} />)}</div></div>
      </section>

      <section id="lifestyle" className="scroll-mt-24 py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mb-7"><p className="text-xs font-extrabold uppercase tracking-[.22em] text-pink-700">Create · Enjoy · Live</p><h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Lifestyle &amp; Entertainment</h2><p className="mt-2 text-stone-500">Espaços para inspiração, criatividade e momentos seus.</p></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{lifeWorlds.map(world => <WorldCard key={world.id} world={world} onOpen={openWorld} favorite={favorites.includes(world.id)} onFavorite={toggleFavorite} />)}</div></div>
      </section>

      {favorites.length > 0 && <section className="mx-auto max-w-7xl px-5 pb-12 lg:px-8"><h2 className="mb-4 text-xl font-extrabold">Seus favoritos <span className="text-violet-600">★</span></h2><div className="flex flex-wrap gap-2">{worlds.filter(world => favorites.includes(world.id)).map(world => <button key={world.id} onClick={() => openWorld(world)} className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-950">{world.title}</button>)}</div></section>}

      <section id="experiencias" className="scroll-mt-24 border-t border-stone-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-sm font-bold uppercase tracking-[.2em] text-violet-600">Experience Hub · Fase 1</p><h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Um universo para explorar<span className="text-violet-600">.</span></h2><p className="mt-3 max-w-xl text-stone-500">O catálogo original continua aqui. Escolha uma experiência e descubra algo novo.</p></div><label className="flex w-full items-center gap-3 rounded-full border border-stone-200 bg-[#f8f8f4] px-5 py-3 md:max-w-xs"><Search size={18} className="text-stone-400" /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar experiências..." className="w-full bg-transparent text-sm outline-none placeholder:text-stone-400" /></label></div>
          <div className="mt-9 flex flex-wrap gap-2">{categories.map(item => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${category === item ? 'bg-stone-900 text-white' : 'border border-stone-200 bg-white text-stone-600 hover:border-violet-300 hover:text-violet-700'}`}>{item}</button>)}</div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(experience => <ExperienceCard key={experience.id} experience={experience} onSelect={setSelected} />)}</div>
          {filtered.length === 0 && <div className="rounded-3xl border border-dashed border-stone-300 bg-white py-16 text-center"><Search size={28} className="mx-auto text-stone-400" /><h3 className="mt-4 text-xl font-bold">Nenhuma experiência encontrada</h3><p className="mt-2 text-sm text-stone-500">Tente outro termo ou selecione uma categoria diferente.</p><button onClick={() => {setSearch('');setCategory('Todas')}} className="mt-5 font-semibold text-violet-700">Limpar filtros</button></div>}
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-7xl px-5 py-14 lg:px-8"><div className="grid gap-8 rounded-[2rem] bg-stone-900 px-8 py-12 text-white sm:grid-cols-3 sm:px-12">{[['01','Descubra','Encontre temas que despertam sua curiosidade.'],['02','Experimente','Aprenda com atividades leves e práticas.'],['03','Evolua','Construa conhecimento uma experiência por vez.']].map(([n,t,d]) => <div key={n} className="flex gap-4"><span className="text-sm font-black text-violet-300">{n}</span><div><h3 className="font-bold">{t}</h3><p className="mt-1 text-sm leading-6 text-stone-300">{d}</p></div></div>)}</div></section>
      <footer className="border-t border-stone-200 px-5 py-8 text-center text-sm text-stone-500">© {new Date().getFullYear()} Studyverse. Feito para quem nunca para de descobrir.</footer>

      <ExperienceModal experience={selected} onClose={() => setSelected(null)} />
      {activeWorld && <div className="fixed inset-0 z-50 grid place-items-center bg-stone-950/70 p-4 backdrop-blur-sm" onMouseDown={() => setActiveWorld(null)}>
        <section role="dialog" aria-modal="true" aria-labelledby="world-title" className="w-full max-w-xl overflow-hidden rounded-[2rem] bg-white shadow-2xl" onMouseDown={event => event.stopPropagation()}>
          <div className={`relative overflow-hidden bg-gradient-to-br ${activeWorld.gradient} p-7 text-white sm:p-9`}><button onClick={() => setActiveWorld(null)} aria-label="Fechar" className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 p-2"><X size={18} /></button><div className="text-4xl">{activeWorld.icon}</div><p className="mt-7 text-xs font-bold uppercase tracking-[.2em] text-white/60">{activeWorld.subtitle}</p><h2 id="world-title" className="mt-2 max-w-md text-3xl font-black leading-tight">{activeWorld.title}</h2><p className="mt-3 max-w-lg leading-7 text-white/75">{activeWorld.description}</p><span className="mt-5 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold">{activeWorld.status}</span></div>
          <div className="p-7 sm:p-9"><h3 className="font-extrabold">O que você encontrará neste mundo</h3><ul className="mt-4 grid gap-3 sm:grid-cols-2">{activeWorld.features.map(feature => <li key={feature} className="flex items-start gap-2 text-sm leading-6 text-stone-600"><span className="mt-0.5 text-violet-600">✦</span>{feature}</li>)}</ul><div className="mt-7 flex flex-wrap gap-3"><button onClick={() => toggleFavorite(activeWorld.id)} className="rounded-full border border-stone-300 px-5 py-3 text-sm font-bold text-stone-700 hover:bg-stone-50">{favorites.includes(activeWorld.id) ? '★ Remover favorito' : '☆ Adicionar aos favoritos'}</button><button onClick={() => setActiveWorld(null)} className="rounded-full bg-stone-900 px-6 py-3 text-sm font-bold text-white hover:bg-violet-700">Voltar ao universo <ArrowRight size={16} className="ml-1 inline" /></button></div><p className="mt-4 text-xs leading-5 text-stone-400">Esta é a página de entrada do mundo. Os módulos internos serão implementados em etapas, preservando a estrutura existente.</p></div>
        </section>
      </div>}
    </main>
  )
}
