export type World = {
  id: string
  title: string
  subtitle: string
  description: string
  category: 'study' | 'life'
  icon: string
  gradient: string
  features: string[]
  status: 'Disponível' | 'Em expansão'
}

export const worlds: World[] = [
  { id: 'control-room', title: 'The Control Room', subtitle: 'Seu centro de comando', description: 'Organize disciplinas, tarefas, prioridades e sessões de foco em um só lugar.', category: 'study', icon: '◈', gradient: 'from-indigo-950 via-slate-900 to-violet-950', features: ['Planejamento diário e semanal', 'Disciplinas e tarefas com prioridades', 'Pomodoro e cronômetro livre', 'Registro das sessões de estudo'], status: 'Em expansão' },
  { id: 'samantha', title: 'Samantha', subtitle: 'Sua companhia de estudos', description: 'Um espaço para orientar sua rotina, manter o foco e transformar dúvidas em próximos passos.', category: 'study', icon: '✳', gradient: 'from-sky-950 via-blue-900 to-indigo-950', features: ['Apoio à organização', 'Metas de estudo', 'Reflexões de progresso'], status: 'Em expansão' },
  { id: 'study-finder', title: 'Study Finder', subtitle: 'Encontre seu jeito de aprender', description: 'Descubra métodos, estratégias e formatos de estudo para diferentes objetivos.', category: 'study', icon: '⌕', gradient: 'from-teal-950 via-emerald-900 to-cyan-950', features: ['Métodos de aprendizagem', 'Guias por objetivo', 'Sugestões de rotina'], status: 'Em expansão' },
  { id: 'upside-down', title: 'The Upside Down', subtitle: 'Entre em outra dimensão', description: 'Uma experiência temática para explorar desafios e conteúdos de um jeito diferente.', category: 'study', icon: '⌁', gradient: 'from-red-950 via-neutral-950 to-purple-950', features: ['Desafios temáticos', 'Exploração por etapas', 'Progresso de atividades'], status: 'Em expansão' },
  { id: 'alter-ego', title: 'Alter Ego', subtitle: 'Construa sua consistência', description: 'Laboratório de hábitos, desafios e pequenas vitórias para desenvolver disciplina.', category: 'study', icon: '◉', gradient: 'from-fuchsia-950 via-purple-900 to-indigo-950', features: ['Rastreador de hábitos', 'Desafios de 7, 14 e 30 dias', 'Diário de evolução', 'Índice de consistência'], status: 'Em expansão' },
  { id: 'academic-arena', title: 'The Hunger Games — Academic Arena', subtitle: 'Conhecimento é sobrevivência', description: 'Entre na arena acadêmica, explore territórios de conhecimento e enfrente desafios cronometrados.', category: 'study', icon: '✦', gradient: 'from-green-950 via-emerald-950 to-stone-950', features: ['Mapa interativo de territórios', 'Disciplinas personalizáveis', 'Desafios de 5, 10, 15, 25 e 45 minutos', 'Arena de perguntas e respostas'], status: 'Em expansão' },
  { id: 'private-office', title: 'The Private Office', subtitle: 'Seu espaço de trabalho privado', description: 'Um ambiente reservado para acompanhar projetos, documentos, tarefas e objetivos.', category: 'study', icon: '▤', gradient: 'from-stone-900 via-zinc-900 to-slate-950', features: ['Projetos e tarefas', 'Organização de documentos', 'Planejamento e objetivos'], status: 'Em expansão' },
  { id: 'dream-life', title: 'Barbie — Dream Life Studio', subtitle: 'Imagine. Planeje. Viva.', description: 'Um estúdio de lifestyle para visualizar objetivos, criar rotinas e registrar momentos.', category: 'life', icon: '♡', gradient: 'from-pink-700 via-fuchsia-800 to-purple-950', features: ['Rotinas e atividades', 'Metas e sonhos', 'Diário e coleções', 'Espaços personalizáveis'], status: 'Em expansão' },
  { id: 'music-room', title: 'HIGH-FIDELITY — The Music Room', subtitle: 'Seu universo sonoro', description: 'Um espaço de música e atmosfera para organizar descobertas, estilos e momentos.', category: 'life', icon: '♫', gradient: 'from-violet-950 via-purple-950 to-fuchsia-950', features: ['Biblioteca e playlists', 'Gêneros e estados de espírito', 'Favoritos e histórico', 'Ambientes visuais'], status: 'Em expansão' },
  { id: 'study-spaces', title: 'Study Spaces', subtitle: 'Encontre seu ambiente ideal', description: 'Explore atmosferas e espaços para acompanhar diferentes momentos de concentração.', category: 'life', icon: '⌂', gradient: 'from-amber-950 via-orange-950 to-stone-950', features: ['Ambientes de concentração', 'Cenários por momento', 'Inspiração para sua rotina'], status: 'Em expansão' },
]
