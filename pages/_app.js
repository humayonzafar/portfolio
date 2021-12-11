import { ChakraProvider } from '@chakra-ui/react'
import '../src/styles/global.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import React, { useState, useEffect } from 'react'
import Router from 'next/router'
// import Loader from '~/components/Loader'
import Loader from '../src/components/Loader';
import { DefaultSeo } from 'next-seo'
import PlausibleProvider from 'next-plausible'
// import AppLayout from '@/components/AppLayout'
import theme from '../src/theme'

const queryClient = new QueryClient()
export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    document.documentElement.lang = `en-GB`
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on(`routeChangeStart`, start)
    Router.events.on(`routeChangeComplete`, end)
    Router.events.on(`routeChangeError`, end)
    return () => {
      Router.events.off(`routeChangeStart`, start)
      Router.events.off(`routeChangeComplete`, end)
      Router.events.off(`routeChangeError`, end)
    }
  }, [])

  return (
      <>
        <DefaultSeo
            defaultTitle='Humayon Zafar'
            titleTemplate='%s | Humayon Zafar'
            openGraph={{
              title: `Humayon Zafar`,
              type: `website`,
              site_name: `Humayon Zafar`,
              images: [
                {
                  url: `https://www.michael-hall.me/static/images/profile.jpeg`,
                  alt: `Profile Picture`,
                },
              ],
            }}
            description='The purpose of this site is for me to test things out & maybe show some things off.'
        />
        <ChakraProvider theme={theme}>
          <PlausibleProvider
              domain='humayonzafar.com'
              selfHosted
              trackOutboundLinks
              enabled={process.env.NODE_ENV === 'production'}
              customDomain={'https://humayonzafar.com'}
          >
            <QueryClientProvider client={queryClient}>
                {loading ? (
                    <Loader />
                ) : (
                    // <AppLayout>
                    <Component {...pageProps} />
                )}
            </QueryClientProvider>
          </PlausibleProvider>
        </ChakraProvider>
      </>
  )
}
