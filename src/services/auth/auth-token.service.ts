import Cookies from 'js-cookie'
import {APP_DOMAIN} from '../../shares/config/private.config'

export enum EnumTokens {
	'ACCESS_TOKEN' = 'access_token',
}

export const getAccessToken = () => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
	return accessToken || null
}

export const saveTokenStorage = (accessToken: string) => {
	Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
		domain: APP_DOMAIN,
		sameSite: 'strict',
		expires: 1,
	})
}

export const removeFromStorage = () => {
	Cookies.remove(EnumTokens.ACCESS_TOKEN, {
		domain: APP_DOMAIN,
	})
}
