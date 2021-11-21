import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import '../styles/fonts.scss'

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default MyApp
