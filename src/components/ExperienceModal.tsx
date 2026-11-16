import { X, Clock3, Sparkles } from 'lucide-react'
import type { Experience } from '../types'

interface Props { experience: Experience | null; onClose: () => void }

export default function ExperienceModal({ experience, onClose }: Props) {
  if (!experience) return null
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-stone-950/60 p-4 backdrop-blur-sm" onMouseDown={onClose}>
      <section role="dialog" aria-modal="true" aria-labelledby="modal-title" className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl" onMouseDown={event => event.stopPropagation()}>
        <button onClick={onClose} aria-label="Fechar" className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-stone-700"><X size={18} /></button>
        <img src={experience.image} alt="" className="h-56 w-full object-cover" />
        <div className="p-7">
          <div className="flex items-center gap-2 text-sm font-semibold text-violet-600"><Sparkles size={16} />{experience.category}</div>
          <h2 id="modal-title" className="mt-2 text-2xl font-bold text-stone-900">{experience.title}</h2>
          <p className="mt-3 leading-7 text-stone-600">{experience.description}</p>
          <div className="mt-5 flex items-center gap-2 text-sm text-stone-500"><Clock3 size={16} />{experience.duration} · {experience.level}</div>
          <button onClick={onClose} className="mt-7 w-full rounded-full bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700">Começar em breve</button>
          <p className="mt-3 text-center text-xs text-stone-400">Prévia da Fase 1 — conteúdo demonstrativo</p>
        </div>
      </section>
    </div>
  )
}
