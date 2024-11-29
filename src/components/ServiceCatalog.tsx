import {motion} from 'framer-motion'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useServices} from '../hooks/useServices'
import {RootState} from '../store'
import {setCategory, setSortOption} from '../store/slices/filterSlice'

import {CategoryFilter, SortOption} from '../types/types'
import {ServiceCard} from './ServiceCard'
import {ServiceCardSkeleton} from './ServiceCardSkeleton'
import {ServiceFilters} from './ServiceFilters'

export function ServicesCatalog() {
	const dispatch = useDispatch()
	const {category, sortOption} = useSelector((state: RootState) => state.filter)
	const {services, loading, error} = useServices()
	const [isFiltering, setIsFiltering] = useState(false)

	useEffect(() => {
		setIsFiltering(true)
		const timer = setTimeout(() => setIsFiltering(false), 300)
		return () => clearTimeout(timer)
	}, [category, sortOption])

	const handleCategoryChange = (newCategory: CategoryFilter) => {
		dispatch(setCategory(newCategory))
	}

	const handleSortChange = (newSort: SortOption) => {
		dispatch(setSortOption(newSort))
	}

	if (loading) {
		return (
			<div className='py-16'>
				<div className='container mx-auto px-4'>
					<h1 className='text-4xl font-bold text-center mb-12'>
						Каталог услуг
					</h1>
					<ServiceFilters
						selectedCategory={category}
						sortOption={sortOption}
						onCategoryChange={handleCategoryChange}
						onSortChange={handleSortChange}
					/>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{[1, 2, 3, 4, 5, 6].map((i) => (
							<ServiceCardSkeleton key={i} />
						))}
					</div>
				</div>
			</div>
		)
	}

	if (error) {
		return (
			<motion.div
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				className='py-16 text-center'
			>
				<p className='text-xl text-red-600'>{error}</p>
			</motion.div>
		)
	}

	return (
		<div className='py-16'>
			<div className='container mx-auto px-4'>
				<motion.h1
					initial={{opacity: 0, y: -20}}
					animate={{opacity: 1, y: 0}}
					className='text-4xl font-bold text-center mb-12'
				>
					Каталог услуг
				</motion.h1>

				<ServiceFilters
					selectedCategory={category}
					sortOption={sortOption}
					onCategoryChange={handleCategoryChange}
					onSortChange={handleSortChange}
				/>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{isFiltering
						? // Show skeletons while filtering
						  [...Array(6)].map((_, i) => <ServiceCardSkeleton key={i} />)
						: // Show actual services with animation
						  services.map((service, index) => (
								<motion.div
									key={service.id}
									initial={{opacity: 0, y: 20}}
									animate={{opacity: 1, y: 0}}
									transition={{delay: index * 0.1}}
								>
									<ServiceCard service={service} />
								</motion.div>
						  ))}
				</div>
			</div>
		</div>
	)
}
