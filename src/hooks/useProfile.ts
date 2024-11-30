// import {userService} from '@/services/user.service'
// import {IAuthForm} from '@/shares/types/auth.interface'
// import {useMutation} from '@tanstack/react-query'
// import {SubmitHandler, useForm} from 'react-hook-form'
// import toast from 'react-hot-toast'
// import {useNavigate} from 'react-router-dom'

// export function useAuthForm(isReg: boolean) {
// 	const navigate = useNavigate()

// 	const form = useForm<IAuthForm>({
// 		mode: 'onChange',
// 	})

// 	const {mutate, isPending} = useQuery({
// 		mutationKey: ['profile user'],
// 		mutationFn: () => userService.getProfile(),
// 		onError(error) {
// 			if (error.message) {
// 				toast.error(error.message)
// 			} else {
// 				toast.error('Ошибка при авторизации')
// 			}
// 		},
// 	})

// 	return {onSubmit, form, isPending}
// }
