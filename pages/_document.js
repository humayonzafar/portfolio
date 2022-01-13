import {ColorModeScript} from '@chakra-ui/react';

// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {Html, Head, Main, NextScript} from 'next/document';
import theme from '../src/theme'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="shortcut icon" href="/favicon.ico"/>
                    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
                    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
                    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
                    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
                    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
                    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
                    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
                    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
                    <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png"/>
                    <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"/>
                    <link rel="icon" type="image/png" sizes="144x144" href="/android-144x144.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <link rel="manifest" href="/manifest.json"/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
                </Head>
                <body id={'de_body'}>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}
