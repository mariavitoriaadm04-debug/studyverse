export type Category = 'Todas' | 'Tecnologia' | 'Criatividade' | 'Idiomas' | 'Carreira'

export interface Experience {
  id: number
  title: string
  category: Exclude<Category, 'Todas'>
  description: string
  level: string
  duration: string
  image: string
  accent: string
  tag: string
}
