import {Clock, Shield, Trophy, Users} from 'lucide-react'

const features = [
	{
		icon: Clock,
		title: 'Точно в срок',
		description: 'Соблюдаем установленные сроки и график работ',
	},
	{
		icon: Shield,
		title: 'Гарантия качества',
		description: 'Предоставляем гарантию на все виды работ',
	},
	{
		icon: Trophy,
		title: '15 лет опыта',
		description: 'Успешно реализовали более 200 проектов',
	},
	{
		icon: Users,
		title: 'Профессионалы',
		description: 'Команда опытных специалистов',
	},
]

export function Features() {
	return (
		<section className='py-16 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-12'>
					Почему выбирают нас
				</h2>

				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{features.map((feature, index) => (
						<div
							key={index}
							className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'
						>
							<feature.icon className='w-12 h-12 text-blue-600 mb-4' />
							<h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
							<p className='text-gray-600'>{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
