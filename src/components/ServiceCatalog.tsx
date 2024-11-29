import {useDispatch, useSelector} from 'react-redux'

import {RootState} from '../store'

import {useServices} from '../hooks/useServices'
import {setCategory, setSortOption} from '../store/slices/filterSlice'
import {CategoryFilter, SortOption} from '../types/types'
import {ServiceCard} from './ServiceCard'
import {ServiceFilters} from './ServiceFilters'

export function ServicesCatalog() {
	const dispatch = useDispatch()
	const {category, sortOption} = useSelector((state: RootState) => state.filter)
	const {services, loading, error} = useServices()

	const handleCategoryChange = (newCategory: CategoryFilter) => {
		dispatch(setCategory(newCategory))
	}

	const handleSortChange = (newSort: SortOption) => {
		dispatch(setSortOption(newSort))
	}

	if (loading) {
		return (
			<div className='py-16 text-center'>
				<p className='text-xl'>Загрузка...</p>
			</div>
		)
	}

	if (error) {
		return (
			<div className='py-16 text-center'>
				<p className='text-xl text-red-600'>{error}</p>
			</div>
		)
	}

	return (
		<div className='py-16'>
			<div className='container mx-auto px-4'>
				<h1 className='text-4xl font-bold text-center mb-12'>Каталог услуг</h1>

				<ServiceFilters
					selectedCategory={category}
					sortOption={sortOption}
					onCategoryChange={handleCategoryChange}
					onSortChange={handleSortChange}
				/>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{services.map((service) => (
						<ServiceCard key={service.id} service={service} />
					))}
				</div>
			</div>
		</div>
	)
}
