import {ChakraProvider} from '@chakra-ui/react'
import '../src/styles/global.css'
import React, {useState, useEffect} from 'react'
import Router from 'next/router'
import Loader from '../src/components/Loader';
import {DefaultSeo} from 'next-seo'
import AppLayout from '../src/components/AppLayout'
import theme from '../src/theme'

export default function MyApp({Component, pageProps}) {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        document.documentElement.lang = `en`
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
                            url: `/static/images/profile.png`,
                            alt: `Profile Picture`,
                        },
                    ],
                }}
                description="Hi, I'm Humayon!. I am a FullStack developer having 3+ years of experience in developing state-of-the-art applications, building great user experiences by bringing simplicity to life and constantly learning."
            />
            <ChakraProvider theme={theme}>
                {loading ? (
                    <Loader/>
                ) : (
                    <AppLayout>
                        <Component {...pageProps} />
                    </AppLayout>
                )}
            </ChakraProvider>
        </>
    )
}
