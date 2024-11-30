import {authService} from '@/services/auth/auth.service'
import {useQuery} from '@tanstack/react-query'

export default function ProfilePage() {
	const {data} = useQuery({
		queryKey: ['profile'],
		queryFn: () => authService,
	})
	return (
		<div>
			<h2></h2>
		</div>
	)
}
