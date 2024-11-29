import {CheckCircle} from 'lucide-react'

const stats = [
	{number: '15+', label: 'Лет опыта'},
	{number: '200+', label: 'Завершенных проектов'},
	{number: '50+', label: 'Специалистов'},
	{number: '98%', label: 'Довольных клиентов'},
]

const achievements = [
	{
		year: '2008',
		title: 'Основание компании',
		description: 'Начало деятельности в сфере строительства',
	},
	{
		year: '2012',
		title: 'Первый крупный проект',
		description: 'Успешная реализация масштабного жилого комплекса',
	},
	{
		year: '2015',
		title: 'Расширение деятельности',
		description: 'Выход на рынок коммерческой недвижимости',
	},
	{
		year: '2020',
		title: 'Инновационные технологии',
		description: 'Внедрение современных строительных решений',
	},
]

export function AboutPage() {
	return (
		<div className='py-16'>
			<div className='container mx-auto px-4'>
				<div className='max-w-3xl mx-auto text-center mb-16'>
					<h1 className='text-4xl font-bold mb-6'>О компании BuildPro</h1>
					<p className='text-xl text-gray-600'>
						Мы создаем качественные и современные объекты, которые становятся
						частью городской среды и улучшают жизнь людей.
					</p>
				</div>

				<div className='grid md:grid-cols-4 gap-8 mb-16'>
					{stats.map((stat, index) => (
						<div key={index} className='text-center'>
							<div className='text-4xl font-bold text-blue-600 mb-2'>
								{stat.number}
							</div>
							<div className='text-gray-600'>{stat.label}</div>
						</div>
					))}
				</div>

				<div className='grid md:grid-cols-2 gap-16 mb-16'>
					<div>
						<h2 className='text-3xl font-bold mb-6'>Наша миссия</h2>
						<p className='text-gray-600 mb-4'>
							Создавать качественные и комфортные пространства, применяя
							инновационные технологии и профессиональный подход к каждому
							проекту.
						</p>
						<ul className='space-y-4'>
							<li className='flex items-center'>
								<CheckCircle className='text-blue-600 mr-2' />
								<span>Высокое качество строительства</span>
							</li>
							<li className='flex items-center'>
								<CheckCircle className='text-blue-600 mr-2' />
								<span>Соблюдение сроков</span>
							</li>
							<li className='flex items-center'>
								<CheckCircle className='text-blue-600 mr-2' />
								<span>Прозрачность работы</span>
							</li>
							<li className='flex items-center'>
								<CheckCircle className='text-blue-600 mr-2' />
								<span>Индивидуальный подход</span>
							</li>
						</ul>
					</div>
					<div>
						<h2 className='text-3xl font-bold mb-6'>История компании</h2>
						<div className='space-y-6'>
							{achievements.map((achievement, index) => (
								<div key={index} className='flex'>
									<div className='text-blue-600 font-bold mr-4'>
										{achievement.year}
									</div>
									<div>
										<h3 className='font-semibold mb-1'>{achievement.title}</h3>
										<p className='text-gray-600'>{achievement.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
