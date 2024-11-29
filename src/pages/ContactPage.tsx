import {Clock, Mail, MapPin, Phone} from 'lucide-react'
import {ContactForm} from '../components/ContactForm'

const contactInfo = [
	{
		icon: Phone,
		title: 'Телефон',
		content: '+7 (123) 456-7890',
		link: 'tel:+71234567890',
	},
	{
		icon: Mail,
		title: 'Email',
		content: 'info@buildpro.ru',
		link: 'mailto:info@buildpro.ru',
	},
	{
		icon: MapPin,
		title: 'Адрес',
		content: 'г. Москва, ул. Строителей, 1',
		link: 'https://maps.google.com',
	},
	{
		icon: Clock,
		title: 'Режим работы',
		content: 'Пн-Пт: 9:00 - 18:00',
		subContent: 'Сб: 10:00 - 15:00',
	},
]

export function ContactPage() {
	return (
		<div className='py-16'>
			<div className='container mx-auto px-4'>
				<div className='max-w-3xl mx-auto text-center mb-16'>
					<h1 className='text-4xl font-bold mb-6'>Свяжитесь с нами</h1>
					<p className='text-xl text-gray-600'>
						Мы готовы ответить на все ваши вопросы и обсудить ваш проект
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
					{contactInfo.map((info, index) => (
						<div
							key={index}
							className='text-center p-6 bg-white rounded-lg shadow-sm'
						>
							<info.icon className='w-12 h-12 text-blue-600 mx-auto mb-4' />
							<h3 className='font-semibold mb-2'>{info.title}</h3>
							{info.link ? (
								<a
									href={info.link}
									className='text-gray-600 hover:text-blue-600'
									target={info.link.startsWith('http') ? '_blank' : undefined}
									rel={
										info.link.startsWith('http')
											? 'noopener noreferrer'
											: undefined
									}
								>
									{info.content}
								</a>
							) : (
								<>
									<p className='text-gray-600'>{info.content}</p>
									{info.subContent && (
										<p className='text-gray-600'>{info.subContent}</p>
									)}
								</>
							)}
						</div>
					))}
				</div>

				<div className='grid md:grid-cols-2 gap-8 items-stretch'>
					<div className='bg-white rounded-lg shadow-sm p-6 h-full'>
						<h2 className='text-2xl font-bold mb-6'>Форма обратной связи</h2>
						<ContactForm />
					</div>
					<div className='bg-white rounded-lg shadow-sm p-6 h-full flex flex-col'>
						<h2 className='text-2xl font-bold mb-6'>Карта</h2>
						<div className='flex-grow w-full'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.5887738251014!2d37.5340335!3d55.7550517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0YPQuy4g0KHRgtGA0L7QuNGC0LXQu9C10LksINCc0L7RgdC60LLQsA!5e0!3m2!1sru!2sru!4v1635784422619!5m2!1sru!2sru'
								width='100%'
								height='100%'
								style={{border: 0}}
								allowFullScreen
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
								className='rounded-lg'
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
