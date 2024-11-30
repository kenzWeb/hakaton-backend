import {validEmail} from '@/shares/rege'
import {IAuthForm} from '@/shares/types/auth.interface'
import {UseFormReturn} from 'react-hook-form'
import {FormControl, FormField, FormItem, FormMessage} from './ui/form'
import {Input} from './ui/input'

interface AuthFieldsProps {
	form: UseFormReturn<IAuthForm, any, undefined>
	isPending: boolean
	isReg?: boolean
}

export function AuthFields({form, isPending, isReg = false}: AuthFieldsProps) {
	return (
		<>
			{isReg && (
				<FormField
					control={form.control}
					name='name'
					rules={{
						required: 'Имя обязательно',
					}}
					render={({field}) => (
						<FormItem>
							<FormControl>
								<Input placeholder='Иван' disabled={isPending} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			)}
			<FormField
				control={form.control}
				name='email'
				rules={{
					required: 'Почта обязательна',
					pattern: {
						value: validEmail,
						message: 'Введите валидную почту',
					},
				}}
				render={({field}) => (
					<FormItem>
						<FormControl>
							<Input
								placeholder='ivan@examle.com'
								type='email'
								disabled={isPending}
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name='password'
				rules={{
					required: 'Пароль обязателен',
					minLength: {
						value: 6,
						message: 'Минимум 6 символов',
					},
				}}
				render={({field}) => (
					<FormItem>
						<FormControl>
							<Input
								placeholder='******'
								type='password'
								disabled={isPending}
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</>
	)
}
