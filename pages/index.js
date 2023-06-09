import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Vacation Homes & Condo rentals - Airbnb - Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      {/* Banner */}
    </div>
  )
}
