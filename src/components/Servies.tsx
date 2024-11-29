import {Building2, Home, Paintbrush} from 'lucide-react'

const services = [
	{
		icon: Building2,
		title: 'Строительство',
		description: 'Полный цикл строительства жилых и коммерческих объектов',
		image:
			'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80',
	},
	{
		icon: Paintbrush,
		title: 'Ремонт',
		description: 'Капитальный и косметический ремонт помещений',
		image:
			'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80',
	},
	{
		icon: Home,
		title: 'Проектирование',
		description: 'Разработка проектной документации и дизайн-проектов',
		image:
			'https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?auto=format&fit=crop&q=80',
	},
]

export function Services() {
	return (
		<section className='py-16'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-12'>Наши услуги</h2>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{services.map((service, index) => (
						<div
							key={index}
							className='group relative overflow-hidden rounded-lg shadow-lg'
						>
							<div className='aspect-w-16 aspect-h-9'>
								<img
									src={service.image}
									alt={service.title}
									className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300'
								/>
							</div>
							<div className='absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 p-6 flex flex-col justify-end'>
								<service.icon className='w-8 h-8 text-white mb-2' />
								<h3 className='text-xl font-semibold text-white mb-2'>
									{service.title}
								</h3>
								<p className='text-gray-200'>{service.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
