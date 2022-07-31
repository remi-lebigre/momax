import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import '../styles/fonts.scss'
import '../styles/animations.scss'
import 'mapbox-gl/dist/mapbox-gl.css'

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default MyApp
