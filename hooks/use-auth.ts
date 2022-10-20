import useSWR from "swr";
import { PublicConfiguration } from "swr/dist/types";
import { authApi } from "@/api/index";

const MS_PER_HOUR = 60 * 60 * 1000
export function useAuth(options?: Partial<PublicConfiguration>) {
    //profile
    const { data: profile, error, mutate } = useSWR('/profile', {
        dedupingInterval: MS_PER_HOUR,
        revalidateOnFocus: false,
        ...options
    })

    async function login() {
        await authApi.login({
            username: 'test1',
            password: '123123'
        })

        await mutate()
        // có await fetch xong mới redirect
        //  ko có await redirect trước ròi mới get xong
    }

    async function logout() {
        await authApi.logout()
        mutate({}, false)
        // xoa du lieu ko goi api
    }

    return {
        profile,
        error,
        login,
        logout
    }
}