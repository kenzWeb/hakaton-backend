import {axiosWithAuth} from '@/api/api.interceptors'
import {API_URL} from '@/shares/config/api.config'
import {IUser} from '@/shares/types/user.interface'

class UserService {
	async getProfile() {
		const {data} = await axiosWithAuth<IUser>({
			url: API_URL.users('/profile'),
			method: 'GET',
		})

		return data
	}

	async toggleFavorite(productId: string) {
		return axiosWithAuth<IUser>({
			url: API_URL.users(`/profile/favorites/${productId}`),
			method: 'PATCH',
		})
	}
}

export const userService = new UserService()
