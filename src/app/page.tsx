import Image from 'next/image';
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
      data: ['Download', 'word/PDF'],
    },
    {
      color: '#8f8f8f',
      data: ['Stand out', 'in style'],
    },
  ];

  const values = [
    {
      title: 'Wide Range of Templates',
      img: '/images/icon1.svg',
      description:
        ' Choose from a diverse selection of professionally designed resume templates.',
    },
    {
      title: 'Easy Editing Tools',
      img: '/images/icon2.svg',
      description:
        'Simply click, type, and format just like you would in a Word document, saving you time and frustration.',
    },
    {
      title: 'Submit Your Own Templates',
      img: '/images/icon3.svg',
      description:
        'Your contributions will enrich the options available to our users. Contribute now.',
    },
    {
      title: 'Collaborative Sharing',
      img: '/images/icon5.svg',
      description:
        'Invest in different industries to find the most opportunities to win huge.',
    },
    {
      title: 'Download and Print Options',
      img: '/images/icon6.svg',
      description:
        "Once you're satisfied with your resume, print it directly from the platform.",
    },
    {
      title: 'Free to use',
      img: '/images/icon4.svg',
      description: 'All these amazing features completely free of charge',
    },
  ];
  return (
    <main className='relative min-h-screen overflow-y-auto bg-white'>
      <Header />
      <div className='relative mt-20 bg-white py-10'>
        <Container>
          <div className='relative flex min-h-[500px] items-center justify-between gap-x-8 overflow-hidden md:p-4'>
            <div className='bubble'>
              <div className='bubble one'></div>
              <div className='bubble two'></div>
              <div className='bubble three'></div>
              <div className='bubble four'></div>
              <div className='bubble five'></div>
              <div className='bubble six'></div>
              <div className='bubble seven'></div>
              <div className='bubble eight'></div>
              <div className='bubble nine'></div>
            </div>
            <div className='w-full md:w-3/6'>
              <span className='text-sm font-light text-gray-700'>
                Break free from the ordinary
              </span>
              <h1 className='my-5 text-5xl font-semibold md:text-2xl'>
                <span className='relative bg-gradient-to-r from-zinc-400 to-zinc-900 bg-clip-text pr-2 text-transparent'>
                  CREATE
                </span>
                your resume, with ease!
              </h1>
              <p className='text-base leading-8 text-gray-700'>
                Unlock boundless opportunities with personalized templates
                tailored just for you. Stand out from the crowd with unique,
                visually stunning CVs, and elevate your career to new height.
              </p>
              <div className='mt-8'>
                <dl className='flex flex-wrap gap-8'>
                  {bullets.map((elm: any, index: number) => {
                    const [name, value] = elm.data;
                    return (
                      <div
                        className='w-2/5 lg:w-1/4'
                        style={{ color: `${elm.color}` }}
                        key={index}
                      >
                        <dt className='font-mono text-xs text-gray-500'>
                          {name}
                        </dt>
                        <dd className='mt-0.5 text-3xl font-bold tracking-tight'>
                          {value}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </div>
            <div className='hidden md:block md:w-3/6'>
              <Image
                src='/images/sitting.svg'
                alt='banner image'
                width={270}
                height={320}
                className='hidden h-[500px] w-full object-center md:block'
              />
            </div>
          </div>
        </Container>
        <section
          id='secondary-features'
          aria-label='Features for building a portfolio'
          className='py-20 sm:py-32'
        >
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='text-3xl font-medium tracking-tight text-gray-900'>
                Build a standout resume without the hassle
              </h2>
              <p className='mt-2 text-lg text-gray-600'>
                Do you find yourself endlessly tweaking fonts and margins, only
                to end up with a document that looks just like everyone elses?
              </p>
            </div>
            <ul
              role='list'
              className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3'
            >
              {values.map((value, index) => (
                <li
                  key={`value-${index}`}
                  className='rounded-2xl border border-gray-200 p-8'
                >
                  <Image
                    src={value.img}
                    alt={value.title}
                    width={36}
                    height={48}
                  />
                  <h3 className='mt-6 font-semibold text-gray-900'>
                    {value.title}
                  </h3>
                  <p className='mt-2 text-gray-700'>{value.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className='relative'>
          <div className='dark:bg-darker border-y border-gray-100 bg-gray-50 py-12 dark:border-gray-700'>
            <div className='relative mx-auto px-6 md:max-w-full md:px-12 lg:max-w-6xl xl:px-0'>
              <div className='items-end justify-between md:flex'>
                <div className='h-max py-16 md:w-6/12 xl:w-5/12'>
                  <div className='text-center md:text-left'>
                    <h2 className='bg-gradient-to-r from-blue-400 to-indigo-900 bg-clip-text text-3xl font-bold text-gray-800 text-transparent dark:text-white md:w-max md:text-4xl xl:text-5xl'>
                      Dont settle for so-so, <br />
                      use our builder now!
                    </h2>
                    <p className='mb-8 mt-6 text-gray-600 dark:text-gray-300'>
                      Our builder is ready to impress. Customizable sections and
                      layouts - Add or remove sections as needed and arrange
                      them in the order you want. clicks.
                    </p>
                  </div>
                </div>

                <div className='md:w-[42%] lg:w-1/2'>
                  <Image
                    src='/images/sl.svg'
                    alt='placeholder sha'
                    loading='lazy'
                    width='1299'
                    height='678'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
