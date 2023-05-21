import Head from 'next/head'

import { Footer } from './LessonPage/src/components/Footer'
import { Header } from './LessonPage/src/components/Header'
import { Hero } from './LessonPage/src/components/Hero'
import { Newsletter } from './LessonPage/src/components/Newsletter'
import { Schedule } from './LessonPage/src/components/Schedule'
import { Speakers } from './LessonPage/src/components/Speakers'
import { Sponsors } from './LessonPage/src/components/Sponsors'


export default function Lesson() {
  return (
    <>
      <Head>
        <title>Sign In - TaxPal</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <Speakers />
        <Schedule />
        <Sponsors id='Sponsors' />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
