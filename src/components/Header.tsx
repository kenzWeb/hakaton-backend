import {getAccessToken} from '@/services/auth/auth-token.service'
import {Menu, Phone, X} from 'lucide-react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {Button} from './ui/button'

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className='bg-white shadow-md'>
			<div className='container mx-auto px-4 py-4'>
				<div className='flex items-center justify-between'>
					<Link to='/' className='flex items-center space-x-2'>
						<span className='text-2xl font-bold text-blue-600'>BuildPro</span>
					</Link>

					<nav className='hidden md:flex space-x-8'>
						<Link
							to='/'
							className='text-gray-600 hover:text-blue-600 transition-colors font-medium'
						>
							Главная
						</Link>
						<Link
							to='/services'
							className='text-gray-600 hover:text-blue-600 transition-colors font-medium'
						>
							Услуги
						</Link>
						<Link
							to='/about'
							className='text-gray-600 hover:text-blue-600 transition-colors font-medium'
						>
							О компании
						</Link>
						<Link
							to='/contact'
							className='text-gray-600 hover:text-blue-600 transition-colors font-medium'
						>
							Контакты
						</Link>
					</nav>

					<div className='hidden md:flex items-center space-x-4'>
						<a
							href='tel:+71234567890'
							className='flex items-center space-x-2 text-gray-600 hover:text-blue-600'
						>
							<Phone size={20} />
							<span>+7 (123) 456-7890</span>
						</a>
					</div>

					{(getAccessToken() && (
						<Link to='/profile'>
							<Button variant='outline'>
								<span>Профиль</span>
							</Button>
						</Link>
					)) || (
						<Link to='/auth'>
							<Button variant='outline'>
								<span>Войти</span>
							</Button>
						</Link>
					)}

					<button
						className='md:hidden'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile menu */}
				{isMenuOpen && (
					<div className='md:hidden mt-4 py-4 border-t'>
						<nav className='flex flex-col space-y-4'>
							<Link
								to='/'
								className='text-gray-600 hover:text-blue-600 transition-colors font-medium'
								onClick={() => setIsMenuOpen(false)}
							>
								Главная
							</Link>
							<Link
								to='/services'
								className='text-gray-600 hover:text-blue-600 transition-colors font-medium'
								onClick={() => setIsMenuOpen(false)}
							>
								Услуги
							</Link>
							<Link
								to='/about'
								className='text-gray-600 hover:text-blue-600 transition-colors font-medium'
								onClick={() => setIsMenuOpen(false)}
							>
								О компании
							</Link>
							<Link
								to='/contact'
								className='text-gray-600 hover:text-blue-600 transition-colors font-medium'
								onClick={() => setIsMenuOpen(false)}
							>
								Контакты
							</Link>
							<a
								href='tel:+71234567890'
								className='flex items-center space-x-2 text-gray-600 hover:text-blue-600'
							>
								<Phone size={20} />
								<span>+7 (123) 456-7890</span>
							</a>
						</nav>
					</div>
				)}
			</div>
		</header>
	)
}
