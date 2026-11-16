import type { World } from '../data/worlds'

export default function WorldCard({ world, onOpen, favorite, onFavorite }: { world: World; onOpen: (world: World) => void; favorite: boolean; onFavorite: (id: string) => void }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-stone-950 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className={`absolute inset-0 bg-gradient-to-br ${world.gradient} opacity-90 transition duration-300 group-hover:scale-105`} />
      <div className="relative flex min-h-[250px] flex-col p-6">
        <div className="flex items-start justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/20 bg-white/10 text-2xl backdrop-blur">{world.icon}</span><button aria-label={favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'} onClick={() => onFavorite(world.id)} className={`rounded-full border px-3 py-1.5 text-xs ${favorite ? 'border-amber-300 bg-amber-300/20 text-amber-100' : 'border-white/20 bg-black/10 text-white/80 hover:bg-white/10'}`}>{favorite ? '★ Favorito' : '☆ Favoritar'}</button></div>
        <div className="mt-auto pt-9"><p className="text-xs font-semibold uppercase tracking-[.18em] text-white/60">{world.subtitle}</p><h3 className="mt-2 text-xl font-extrabold leading-tight">{world.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-white/70">{world.description}</p><button onClick={() => onOpen(world)} className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-stone-900 transition hover:bg-violet-100">Entrar no mundo <span aria-hidden>↗</span></button></div>
      </div>
    </article>
  )
}
