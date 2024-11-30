import {useState} from 'react'
import styles from '../styles/auth.module.scss'

import {useAuthForm} from './auth/useAuthForm'

import {Button} from './ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card'
import {Form} from './ui/form'
import { AuthFields } from './AuthFields'

export default function AuthCard() {
	const [isReg, setIsReg] = useState(false)

	const {onSubmit, form, isPending} = useAuthForm(isReg)

	return (
		<div>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					></svg>
				</div>
				<div className={styles.right}>
					<Card className={styles.card}>
						<CardHeader className={styles.card}>
							<CardTitle>{isReg ? 'Регистрация' : 'Вход'}</CardTitle>
							<CardDescription>
								Войдите в аккаунт, чтобы продолжить
							</CardDescription>
						</CardHeader>
						<CardContent className={styles.content}>
							<Form {...form}>
								<form onSubmit={form.handleSubmit(onSubmit)}>
									<AuthFields form={form} isPending={isPending} isReg={isReg} />

									<Button disabled={isPending} type='submit'>
										{isReg ? 'Регистрация' : 'Вход'}
									</Button>
								</form>
							</Form>
						</CardContent>
						<CardFooter>
							{isReg ? 'Уже есть аккаунт?' : 'Еще нет аккаунта?'}
							<button onClick={() => setIsReg(!isReg)}>
								{isReg ? 'Войти' : 'Регистрация'}
							</button>
						</CardFooter>
					</Card>
				</div>
			</div>
		</div>
	)
}
