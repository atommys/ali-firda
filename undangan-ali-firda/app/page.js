
import Hero from '@/components/Hero'
import Acara from '@/components/Acara'
import Cerita from '@/components/Cerita'
import Galeri from '@/components/Galeri'
import RSVP from '@/components/RSVP'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="font-sans bg-white text-gray-800">
      <Hero />
      <Acara />
      <Cerita />
      <Galeri />
      <RSVP />
      <Footer />
    </main>
  )
}
