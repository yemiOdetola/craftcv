"use client"
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Container } from '@/components/Container';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

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

  const points = [
    {
      title: 'Download Application',
      description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus'
    },
    {
      title: 'Download Application',
      description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus'
    },
    {
      title: 'Download Application',
      description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus'
    },
    {
      title: 'Download Application',
      description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus'
    },
  ]
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
    <main className='relative min-h-screen'>
      {/* <Header /> */}
      <section className='banner-gradient relative mt-0 bg-primary py-10 h-[95vh] max-h-[900px]'>
        <div className="container opacity-100 flex flex-row !flex-nowrap w-full justify-between items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Templates
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <section className="wrapper gradient-8 !relative before:content-[''] before:absolute before:w-full before:h-full before:bg-cover before:pointer-events-none before:left-0 before:top-0">
          <div className="container pt-28 xl:pt-36 lg:pt-36 md:pt-36 pb-[12.5rem] xl:pb-[17.5rem] lg:pb-[17.5rem] !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                <h2 className="h6 uppercase !text-[0.85rem] !tracking-[0.05rem] !leading-[1.55] !text-white !mb-5">Hello! We are Sandbox</h2>
                <h1 className="xl:text-[3.4rem] text-[calc(1.465rem_+_2.58vw)] !leading-[1.05] font-semibold !mb-8 text-white">We have considered our solutions to <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[10%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:mt-0 after:rounded-[5rem] after:bottom-[4%] motion-reduce:after:transition-none after:bg-[#3f78e0] after:!bg-[linear-gradient(45deg,#08aeea_0,#2af598_100%)]"><em>assist</em></span> every stage of your growth.</h1>
                <div className="flex justify-center mb-4">
                  <span data-cue="zoomIn" data-interval="-200" data-group="page-title-buttons" data-delay="900" data-show="true">
                    <a href="#" className="btn btn-lg btn-white">Explore Now</a></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="container py-10 relative h-[72vh] max-h-[800px]">
        <div className="h-[70vh] max-h-[800px] absolute top-[-12rem] left-0 right-0 rounded-xl bg-white w-[90%] z-10 mx-auto shadow-lg">
          <h1>Hi!</h1>
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
        </div>
      </section>
      {/* 
      <section className='relative flex min-h-[500px] items-center justify-between gap-x-8 overflow-hidden md:p-4'>
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
      </section> */}

      <section className="container py-12">
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="md:w-10/12 lg:w-7/12 xl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full mx-auto mb-8 relative">
            <h2 className="text-sm uppercase text-[#aab0bc] mb-5 leading-4">How It Works</h2>
            <h3 className="text-2xl lg:text-4xl font-semibold leading-[1.2] mb-8 xl:px-6 w-[4/5] mx-auto">
              Download the app, create your profile and youre all set!</h3>
          </div>
        </div>
        <div className="flex flex-wrap mx-[-15px] lg:!mb-40 xl:!mb-[17.5rem]">
          <div className="xxl:w-11/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
            <div className="flex flex-wrap mx-[-15px] mt-[-50px] xl:mt-0 lg:mt-0 !text-center items-center">
              <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto mb-[-2.5rem] lg:!mb-0 xl:!mb-0 mt-[50px] xl:mt-0 lg:mt-0">
                <figure className="mx-auto">
                  <Image
                    src='/images/mockup.svg'
                    alt='phone mockup'
                    width={250}
                    height={522}
                    className='hidden h-[500px] w-full object-center md:block'
                  />
                </figure>
              </div>
              <div className="w-full xl:hidden lg:hidden px-[15px] mt-[50px] xl:mt-0 lg:mt-0"></div>
              <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full lg:!-order-1 xl:!-order-1 mt-[50px] xl:mt-0 lg:mt-0">
                <div className="!mb-8">
                  <span className="block xl:text-5xl text-3xl mb-4 font-medium text-indigo-600">01</span>
                  <h4 className="text-xl mb-3">Download Application</h4>
                  <p className="my-2 mx-auto xl:px-7 lg:w-4/5">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.</p>
                </div>
                <div>
                  <span className="block xl:text-5xl text-3xl mb-4 font-medium text-indigo-600">02</span>
                  <h4 className="text-xl mb-3">Quick Registration</h4>
                  <p className="my-2 mx-auto xl:px-7 lg:w-4/5">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.</p>
                </div>
              </div>
              <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[50px] xl:mt-0 lg:mt-0">
                <div className="!mb-8">
                  <span className="block xl:text-5xl text-3xl mb-4 font-medium text-indigo-600">03</span>
                  <h4 className="text-xl mb-3">Track Your Spending</h4>
                  <p className="my-2 mx-auto xl:px-7 lg:w-4/5">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.</p>
                </div>
                <div>
                  <span className="block xl:text-5xl text-3xl mb-4 font-medium text-indigo-600">04</span>
                  <h4 className="text-xl mb-3">Have Total Control</h4>
                  <p className="my-2 mx-auto xl:px-7 lg:w-4/5">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="py-14  bg-[#262b32] opacity-100  text-[#cacaca]">
        <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
          <div className="flex flex-wrap mx-[-15px] !text-center">
            <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
              <h2 className="text-[0.8rem] !leading-[1.35] !tracking-[0.02rem] uppercase text-white !mb-3">Do you find yourself endlessly tweaking fonts and margins, only to end up with a document that looks just like everyone elses?</h2>
              <h3 className="xl:text-[2rem] !leading-[1.2] text-[calc(1.325rem_+_0.9vw)] font-semibold text-white mb-10">Build a standout resume without the hassle
              </h3>
            </div>
          </div>
          <div className="flex flex-wrap mx-4 xl:mx-9 lg:mx-5 mt-12">
            {values.map((value, index) => (
              <div key={`value-${index}`} className="md:w-6/12 lg:w-4/12 w-full px-4 max-w-full mb-8">
                <div className="flex flex-row items-start">
                  <div className="mr-4 w-auto h-auto">
                    <Image
                      src={value.img}
                      alt={value.title}
                      width={30}
                      height={44}
                      className="w-[2rem] h-[2rem] mr-5"
                    />
                  </div>
                  <div className="">
                    <h3 className="text-xl lg:text-2xl mb-4 text-white">{value.title}</h3>
                    <p className="font-light">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      <section className="container py-24">
        <div className="pt-10 xl:pt-10 lg:pt-10 md:pt-16 pb-8 xl:pb-10 lg:pb-10 md:pb-10 text-center xl:text-left lg:text-left">
          <div className="flex flex-wrap mx-0 mt-[-50px]">
            <div className="md:w-10/12 md:!ml-[8.33333333%] lg:!ml-0 lg:w-6/12 xl:!ml-0 xl:w-5/12 w-full flex-[0_0_auto] max-w-full !relative mt-[50px]">
              <h2 className="text-[calc(1.325rem_+_0.9vw)] font-semibold !leading-[1.2] xl:text-[2rem] mb-4">Manage all your bills, accounts &amp; budgets in <span className="text-gradient gradient-7">one place.</span></h2>
              <p className="lead !text-[1.2rem] !leading-[1.5] font-normal mb-7">Sandbox is available to download from both App Store and Google Play Store.</p>
              <div className="flex justify-center xl:!justify-start lg:!justify-start">
                <span className="inline-flex">
                  <Button size="lg" className="!mr-2 inline-block">Download on AppStore</Button>
                </span>
                <span className="inline-flex">
                  <Button size="lg" className="!mr-2 inline-block">Download on Playstore</Button>
                </span>
              </div>
            </div>
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full ml-auto">
              <figure className="m-0 p-0">
                <Image
                  src='/images/sitting.svg'
                  alt='banner image'
                  width={270}
                  height={320}
                  className='hidden h-[500px] w-full object-center md:block'
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* <section
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
      </section> */}


      <section className="container rounded-xl">
        <div className="px-12 py-24 md:py-32 rounded-lg bg-[#3350bc]">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center [text-wrap:pretty]">
            <h2 className="typography_title30__b8fIF font-medium mb-4 text-white tracking-tight">Get started with our SDK</h2>
            <p className="typography_body18__jwTbt font-normal text-white/60">
              We will walk you through getting set up with MoonPay. Just enter your business email to create a developer account.
            </p>
            <a href="https://dashboard.moonpay.com/signup" target="_blank" rel="noopener noreferrer" className="button leading-none flex justify-center items-center border border-solid rounded-lg border-white text-base py-4 px-6 bg-white text-cosmos hover:bg-white-hover hover:border-white-hover active:bg-white-active active:border-white-active design-system mt-8" id="6638c758484deb5b62faa203">
              <span>Build with Us</span>
            </a>
          </div>
        </div>
      </section>

      <section className="container py-32">
        <div className="flex flex-wrap mx-[-15px] !text-center mb-7">
          <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
            <h2 className="!text-[0.8rem] tracking-[0.02rem] !leading-[1.35] uppercase text-[#aab0bc] !mb-3">Join Our Community</h2>
            <h3 className=" text-[calc(1.345rem_+_1.14vw)] font-semibold !leading-[1.2] xl:text-[2.2rem] tracking-[-0.03em] mb-[10]">
              We are trusted by over 50000+ clients. Join them now and grow your business.
            </h3>
          </div>
        </div>
        <div className="flex flex-wrap mx-[-15px] !mb-8">
          <div className="md:w-10/12 lg:w-9/12 xl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
            <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper mt-[-20px] xl:mt-0 lg:mt-0 md:mt-0">
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full !text-center mt-[20px] xl:mt-0 lg:mt-0 md:mt-0">
                <h3 className="counter counter-lg text-[calc(1.35rem_+_1.2vw)] tracking-[normal] !leading-none mb-2 xl:text-[2.25rem]  text-[#3f78e0]">1000+</h3>
                <p className="!mb-0">Completed Projects</p>
              </div>
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full !text-center mt-[20px] xl:mt-0 lg:mt-0 md:mt-0">
                <h3 className="counter counter-lg text-[calc(1.35rem_+_1.2vw)] tracking-[normal] !leading-none mb-2 xl:text-[2.25rem]  text-[#3f78e0]">50K+</h3>
                <p className="!mb-0">Happy Customers</p>
              </div>
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full !text-center mt-[20px] xl:mt-0 lg:mt-0 md:mt-0">
                <h3 className="counter counter-lg text-[calc(1.35rem_+_1.2vw)] tracking-[normal] !leading-none mb-2 xl:text-[2.25rem]  text-[#3f78e0]">4x</h3>
                <p className="!mb-0">Revenue Growth</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mx-[-15px] !relative">
          <div className="lg:w-10/12 xl:w-9/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto mt-[3rem] xl:!mb-[-15rem] lg:!mb-[-15rem] md:!mb-[-15rem] sm:!mb-[-10rem]">
            <figure className="m-0 p-0">
              {/* <img className="max-w-full h-auto" src="./assets/img/illustrations/i32.png" srcset="./assets/img/illustrations/i32@2x.png 2x" alt="image" /> */}
            </figure>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}




const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:text-underline hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground bg-none",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
