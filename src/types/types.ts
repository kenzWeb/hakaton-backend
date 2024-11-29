export interface Service {
	id: string
	title: string
	description: string
	category: string
	price: number
	image: string
	features: string[]
}

export type SortOption = 'price-asc' | 'price-desc' | 'title-asc' | 'title-desc'
export type CategoryFilter = string | 'all'
