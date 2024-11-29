import {ArrowRight} from 'lucide-react'
import {useNavigate} from 'react-router-dom'

export function Hero() {
	const navigate = useNavigate()

	return (
		<div className='relative bg-blue-600 text-white'>
			<div className='absolute inset-0'>
				<img
					src='https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80'
					alt='Construction site'
					className='w-full h-full object-cover opacity-20'
				/>
			</div>

			<div className='relative container mx-auto px-4 py-24'>
				<div className='max-w-3xl'>
					<h1 className='text-5xl font-bold mb-6'>
						Строим будущее вместе с вами
					</h1>
					<p className='text-xl mb-8'>
						Профессиональные строительные услуги с гарантией качества. Более 15
						лет опыта в создании надежных и современных объектов.
					</p>
					<button
						onClick={() => navigate('/services')}
						className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold 
                     flex items-center space-x-2 hover:bg-blue-50 transition-colors
                     transform hover:scale-105 duration-200 active:scale-95'
					>
						<span>Наши услуги</span>
						<ArrowRight size={20} />
					</button>
				</div>
			</div>
		</div>
	)
}
