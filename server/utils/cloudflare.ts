import type { H3Event } from 'h3'

export function useWAE(event: H3Event, query: string) {
  const { cfAccountId, cfApiToken } = useRuntimeConfig(event)
  console.info('useWAE', query)
  return $fetch(`https://api.cloudflare.com/client/v4/accounts/${cfAccountId}/analytics_engine/sql`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${cfApiToken}`,
    },
    body: query,
    retry: 1,
    retryDelay: 100, // ms
  }).catch((error) => {
    const upstream = error?.status ?? error?.statusCode ?? error?.response?.status
    console.error('useWAE upstream failure', { upstream, message: error?.message })
    throw createError({
      status: 502,
      statusText: 'Analytics Upstream Error',
      message: `Cloudflare Analytics Engine request failed with upstream status ${upstream ?? 'unknown'}`,
    })
  })
}
