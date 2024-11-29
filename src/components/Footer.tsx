import {Mail, MapPin, Phone} from 'lucide-react'

export function Footer() {
	return (
		<footer className='bg-gray-900 text-gray-300'>
			<div className='container mx-auto px-4 py-12'>
				<div className='grid md:grid-cols-3 gap-8'>
					<div>
						<h3 className='text-xl font-bold text-white mb-4'>BuildPro</h3>
						<p className='mb-4'>
							Профессиональные строительные услуги с гарантией качества. Создаем
							пространства, в которых хочется жить и работать.
						</p>
					</div>

					<div>
						<h3 className='text-xl font-bold text-white mb-4'>Контакты</h3>
						<div className='space-y-3'>
							<a
								href='tel:+71234567890'
								className='flex items-center space-x-2 hover:text-white'
							>
								<Phone size={20} />
								<span>+7 (123) 456-7890</span>
							</a>
							<a
								href='mailto:info@buildpro.ru'
								className='flex items-center space-x-2 hover:text-white'
							>
								<Mail size={20} />
								<span>info@buildpro.ru</span>
							</a>
							<div className='flex items-center space-x-2'>
								<MapPin size={20} />
								<span>г. Москва, ул. Строителей, 1</span>
							</div>
						</div>
					</div>

					<div>
						<h3 className='text-xl font-bold text-white mb-4'>Режим работы</h3>
						<p>Пн-Пт: 9:00 - 18:00</p>
						<p>Сб: 10:00 - 15:00</p>
						<p>Вс: выходной</p>
					</div>
				</div>

				<div className='border-t border-gray-800 mt-8 pt-8 text-center'>
					<p>&copy; {new Date().getFullYear()} BuildPro. Все права защищены.</p>
				</div>
			</div>
		</footer>
	)
}
