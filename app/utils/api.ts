import type { NitroFetchOptions, NitroFetchRequest } from 'nitropack'
import { navigateTo } from '#imports'
import { defu } from 'defu'
import { useAuthToken } from '@/composables/useAuthToken'

type APIOptions = Omit<NitroFetchOptions<NitroFetchRequest>, 'headers'> & {
  headers?: Record<string, string>
}

export function useAPI<T = unknown>(api: string, options?: APIOptions): Promise<T> {
  const { getToken, removeToken } = useAuthToken()
  const authHeader = { Authorization: `Bearer ${getToken() || ''}` }

  const mergedOptions = defu(options || {}, {
    headers: authHeader,
  }) as NitroFetchOptions<NitroFetchRequest>

  async function sessionIsDead() {
    try {
      await $fetch('/api/verify', { headers: authHeader })
      return false
    }
    catch {
      return true
    }
  }

  return $fetch<T>(api, mergedOptions).catch(async (error) => {
    // Only tear down the session if the 401 came from our own auth gate.
    // An upstream 401 must not silently log the user out.
    if (error?.status === 401 && (await sessionIsDead())) {
      removeToken()
      await navigateTo('/dashboard/login')
    }
    return Promise.reject(error)
  }) as Promise<T>
}
