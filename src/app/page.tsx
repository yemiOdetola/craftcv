import { Footer } from '@/components/common/Footer'
import { Header } from '@/components/common/Header'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'

export default function Home() {
  const bullets: any = [
    ['Cost', 'free.99'],
    ['Download & share', 'word/PDF'],
    ['Customization', 'unlimited'],
    ['Stand out', 'with stylee'],
  ]
  return (
    <main className='bg-white'>
      <Header />
      <div className="relative pt-10 pb-20 sm:py-24">
        <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
            <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
              <span className="sr-only">Craft CV - </span>
              {/* Craft Your Perfect CV with Ease. */}
              Your CV, Your Journey, Your Triumph.
            </h1>
            <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
              <p>
                Break free from the ordinary, Unlock boundless opportunities with personalized CV templates tailored just for you.
              </p>
              <p>
                Tailor your story to captivate employers, Stand out from the crowd with unique, visually stunning CVs, and elevate your career to new heights.
              </p>
              <p>Your Journey, Your CV, Your Triumph.</p>
            </div>
            <Button href="#" className="mt-10 w-full sm:hidden">
              Get your tickets
            </Button>
            <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
              {bullets.map(([name, value]: any) => (
                <div key={name}>
                  <dt className="font-mono text-sm text-blue-600">{name}</dt>
                  <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  )
}
