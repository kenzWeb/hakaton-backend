import {Service} from '../types/types'

export const services: Service[] = [
	{
		id: 'construction-residential',
		title: 'Строительство жилых домов',
		description: 'Полный цикл строительства частных домов',
		category: 'construction',
		price: 5000000,
		image:
			'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80',
		features: ['Проектирование', 'Фундамент', 'Возведение стен', 'Кровля'],
	},
	{
		id: 'renovation-apartment',
		title: 'Ремонт квартир',
		description: 'Капитальный ремонт жилых помещений',
		category: 'renovation',
		price: 800000,
		image:
			'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80',
		features: ['Демонтаж', 'Отделка', 'Сантехника', 'Электрика'],
	},
	{
		id: 'design-interior',
		title: 'Дизайн интерьера',
		description: 'Разработка дизайн-проекта помещений',
		category: 'design',
		price: 150000,
		image:
			'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80',
		features: ['Планировка', '3D-визуализация', 'Подбор материалов', 'Чертежи'],
	},
	{
		id: 'engineering-hvac',
		title: 'Инженерные системы',
		description: 'Монтаж систем отопления и вентиляции',
		category: 'engineering',
		price: 450000,
		image:
			'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80',
		features: ['Проектирование', 'Монтаж', 'Пусконаладка', 'Обслуживание'],
	},
]

export const categories = [
	{id: 'all', name: 'Все услуги'},
	{id: 'construction', name: 'Строительство'},
	{id: 'renovation', name: 'Ремонт'},
	{id: 'design', name: 'Дизайн'},
	{id: 'engineering', name: 'Инженерные системы'},
]
