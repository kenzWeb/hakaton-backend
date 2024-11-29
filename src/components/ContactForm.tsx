import React, {useState} from 'react'

export function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log(formData)
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	return (
		<section className='py-16 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<div className='max-w-2xl mx-auto'>
					<h2 className='text-3xl font-bold text-center mb-8'>
						Связаться с нами
					</h2>

					<form onSubmit={handleSubmit} className='space-y-6'>
						<div>
							<label
								htmlFor='name'
								className='block text-sm font-medium text-gray-700 mb-1'
							>
								Имя
							</label>
							<input
								type='text'
								id='name'
								name='name'
								value={formData.name}
								onChange={handleChange}
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
								required
							/>
						</div>

						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-gray-700 mb-1'
							>
								Email
							</label>
							<input
								type='email'
								id='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
								required
							/>
						</div>

						<div>
							<label
								htmlFor='phone'
								className='block text-sm font-medium text-gray-700 mb-1'
							>
								Телефон
							</label>
							<input
								type='tel'
								id='phone'
								name='phone'
								value={formData.phone}
								onChange={handleChange}
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
								required
							/>
						</div>

						<div>
							<label
								htmlFor='message'
								className='block text-sm font-medium text-gray-700 mb-1'
							>
								Сообщение
							</label>
							<textarea
								id='message'
								name='message'
								value={formData.message}
								onChange={handleChange}
								rows={4}
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
								required
							/>
						</div>

						<button
							type='submit'
							className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
						>
							Отправить
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}
