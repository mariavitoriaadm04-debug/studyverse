import { ArrowUpRight, Clock3, Sparkles } from 'lucide-react'
import type { Experience } from '../types'

interface Props { experience: Experience; onSelect: (experience: Experience) => void }

export default function ExperienceCard({ experience, onSelect }: Props) {
  return (
    <button onClick={() => onSelect(experience)} className="group overflow-hidden rounded-[1.6rem] border border-stone-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img src={experience.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-stone-700">{experience.tag}</span>
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-violet-600">
          <span>{experience.category}</span><Sparkles size={15} />
        </div>
        <h3 className="text-xl font-bold tracking-tight text-stone-900">{experience.title}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-stone-500">{experience.description}</p>
        <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4 text-xs text-stone-500">
          <span>{experience.level}</span>
          <span className="flex items-center gap-1"><Clock3 size={14} />{experience.duration}</span>
        </div>
        <div className="mt-4 flex items-center justify-between font-semibold text-stone-900">
          <span className="text-sm">Explorar experiência</span><ArrowUpRight size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </button>
  )
}
