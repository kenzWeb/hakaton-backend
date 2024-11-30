import {categories} from '../data/services'
import {CategoryFilter, SortOption} from '../shares/types/types'

interface ServiceFiltersProps {
	selectedCategory: CategoryFilter
	sortOption: SortOption
	onCategoryChange: (category: CategoryFilter) => void
	onSortChange: (sort: SortOption) => void
}

export function ServiceFilters({
	selectedCategory,
	sortOption,
	onCategoryChange,
	onSortChange,
}: ServiceFiltersProps) {
	return (
		<div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
			<div className='flex flex-wrap gap-2'>
				{categories.map((category) => (
					<button
						key={category.id}
						onClick={() => onCategoryChange(category.id)}
						className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${
								selectedCategory === category.id
									? 'bg-blue-600 text-white'
									: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
							}`}
					>
						{category.name}
					</button>
				))}
			</div>

			<select
				value={sortOption}
				onChange={(e) => onSortChange(e.target.value as SortOption)}
				className='px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
			>
				<option value='price-asc'>По цене (возрастание)</option>
				<option value='price-desc'>По цене (убывание)</option>
				<option value='title-asc'>По названию (А-Я)</option>
				<option value='title-desc'>По названию (Я-А)</option>
			</select>
		</div>
	)
}
