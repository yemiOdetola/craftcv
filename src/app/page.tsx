import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';

export default function Home() {
  const bullets: any = [
    {
      color: '#1ea446',
      data: ['Cost', 'free.99'],
    },
    {
      color: '#57b3f2',
      data: ['Customization', 'unlimited'],
    },
    {
      color: '#4c8df6',
      data: ['Download & share', 'word/PDF'],
    },
    {
      color: '#8f8f8f',
      data: ['Stand out', 'with stylee'],
    },
  ];
  return (
    <main className='flex min-h-screen flex-col justify-between bg-white'>
      <Header />
      <div className='relative bg-white py-10'>
        <Container>
          <div className='relative flex min-h-[380px] items-center justify-between gap-x-8 rounded-2xl bg-[#e0faf8] p-6 md:p-12 lg:p-16'>
            <div className='hidden md:block md:w-2/5'>
              <Image
                src='/images/undraw_design_sprint_re_tke3.svg'
                alt='banner image'
                width={270}
                height={320}
                className='hidden w-full md:block'
              />
            </div>
            <div className='w-full p-1 md:w-3/5'>
              <span className='text-base font-light text-gray-700'>
                Break free from the ordinary
              </span>
              <h1 className='mt-3 text-5xl font-semibold'>
                Craft your resume with EASE!
              </h1>
              <p className='my-5 text-lg text-gray-700'>
                Unlock boundless opportunities with personalized CV templates
                tailored just for you. Stand out from the crowd with unique,
                visually stunning CVs, and elevate your career to new height 🧐
              </p>
              <Link
                href='/templates'
                className='text-md mt-2 inline-block rounded-3xl border border-gray-800 px-7 py-2.5 text-gray-700 transition-all duration-300 
                hover:border-white hover:bg-gray-700 hover:text-white'
              >
                Get started
              </Link>
            </div>
          </div>
          <div className='mt-12'>
            <dl className='mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left'>
              {bullets.map((elm: any, index: number) => {
                const [name, value] = elm.data;
                return (
                  <div style={{ color: `${elm.color}` }} key={index}>
                    <dt className='font-mono text-sm text-gray-500'>{name}</dt>
                    <dd className='mt-0.5 text-3xl font-bold tracking-tight'>
                      {value}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  );
}
