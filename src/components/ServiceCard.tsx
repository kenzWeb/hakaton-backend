import {motion} from 'framer-motion'
import {Service} from '../shares/types/types'

interface ServiceCardProps {
	service: Service
}

export function ServiceCard({service}: ServiceCardProps) {
	return (
		<motion.div
			whileHover={{y: -5}}
			className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'
		>
			<div className='aspect-w-16 aspect-h-9'>
				<motion.img
					initial={{scale: 1}}
					whileHover={{scale: 1.05}}
					transition={{duration: 0.3}}
					src={service.image}
					alt={service.title}
					className='w-full h-64 object-cover'
				/>
			</div>
			<div className='p-6'>
				<h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
				<p className='text-gray-600 mb-4'>{service.description}</p>
				<div className='mb-4'>
					<motion.span
						initial={{scale: 1}}
						whileHover={{scale: 1.05}}
						className='text-2xl font-bold text-blue-600'
					>
						{new Intl.NumberFormat('ru-RU', {
							style: 'currency',
							currency: 'RUB',
							maximumFractionDigits: 0,
						}).format(service.price)}
					</motion.span>
				</div>
				<div className='space-y-2'>
					{service.features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{opacity: 0, x: -10}}
							animate={{opacity: 1, x: 0}}
							transition={{delay: index * 0.1}}
							className='flex items-center text-gray-700'
						>
							<span className='w-2 h-2 bg-blue-600 rounded-full mr-2'></span>
							{feature}
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	)
}
