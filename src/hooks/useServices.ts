import {useMemo} from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../store'

export const useServices = () => {
	const services = useSelector((state: RootState) => state.services.items)
	const {category, sortOption} = useSelector((state: RootState) => state.filter)
	const loading = useSelector((state: RootState) => state.services.loading)
	const error = useSelector((state: RootState) => state.services.error)

	const filteredAndSortedServices = useMemo(() => {
		let result = [...services]

		if (category !== 'all') {
			result = result.filter((service) => service.category === category)
		}

		result.sort((a, b) => {
			switch (sortOption) {
				case 'price-asc':
					return a.price - b.price
				case 'price-desc':
					return b.price - a.price
				case 'title-asc':
					return a.title.localeCompare(b.title)
				case 'title-desc':
					return b.title.localeCompare(a.title)
				default:
					return 0
			}
		})

		return result
	}, [services, category, sortOption])

	return {
		services: filteredAndSortedServices,
		loading,
		error,
	}
}
