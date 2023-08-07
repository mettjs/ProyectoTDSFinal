import Footer from '@/components/Layout/Footer/Footer'
import NavBar from '@/components/Layout/NavBar/NavBar'
import '@/styles/Navbar.css'
import '@/styles/cartelera.css'
import '@/styles/estrenos.css'
import '@/styles/footer.css'
import '@/styles/globals.css'
import '@/styles/home.css'
import '@/styles/movie.css'
import '@/styles/ticket.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppProps } from 'next/app'
import { useState } from 'react'


export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}
