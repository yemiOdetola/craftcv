import React from 'react';

export default function WilsonParson() {
  return (
    <div>
      <div className='mx-auto h-screen min-h-screen max-w-4xl bg-white p-4'>
        <div className='bg-white p-8 md:p-16'>
          <header>
            <h1 className='flex justify-between'>
              <span className='block text-3xl font-medium'>Wilson Parson</span>
              <span className='mt-2 block text-xl font-medium text-gray-600 md:mt-0'>
                UI/UX Designer &middot; Front-end Developer
              </span>
            </h1>
          </header>
          <hr className='border-grey-light border-t' />
          <main className='flex gap-8 py-3'>
            <aside className='skills w-1/4 rounded-lg bg-gray-200 px-4 py-3'>
              <h2 className='text-base font-semibold uppercase tracking-widest text-gray-600 md:text-xl'>
                Skills
              </h2>
              <ul className='fa-ul'>
                <li>
                  <span className='fa-li'>
                    <i className='far fa-check-circle'></i>
                  </span>
                  UI design
                </li>
              </ul>
            </aside>
            <div className='w-3/4'>
              <section className='bio'>
                <h2 className='flex items-center'>
                  <span className='text-2xl font-semibold'>Bio</span>
                </h2>
                <p className='text-gray-800'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  mollitia distinctio sed dolore quibusdam est ad, voluptate
                  aspernatur totam molestias alias voluptatem? Officia cum quia
                  expedita dolore adipisci pariatur odio.
                </p>
              </section>
              <section className='experience'>
                <h2 className='flex items-center'>
                  <span className='text-2xl font-semibold'>Experience</span>
                </h2>
                <p className='text-gray-800'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi quidem quis omnis quisquam dolor facere cum laborum
                  dolores nesciunt magni eius, cumque reprehenderit modi sunt
                  sed molestiae veritatis, atque eos?
                </p>
              </section>
              <section className='education'>
                <h2 className='flex items-center'>
                  <span className='text-2xl font-semibold'>Education</span>
                </h2>
                <p className='text-gray-800'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  ab cupiditate accusamus ut veniam ea expedita modi rem sequi
                  exercitationem cum eius tempora repellat provident numquam
                  dolore, reprehenderit adipisci eos.
                </p>
              </section>
            </div>
          </main>
          <footer className='text-grey-dark mt-4 text-sm leading-loose md:mt-8'>
            <address className='flex flex-wrap justify-center text-sm not-italic text-gray-600'>
              <a href='https://github.com/wilsonparson' className='mx-2'>
                Github
              </a>
              &middot;
              <a href='https://codepen.com/wilsonparson' className='mx-2'>
                CodePen
              </a>
              &middot;
              <a href='https://twitter.com/wilson_parson' className='mx-2'>
                @wilson_parson
              </a>
              &middot;
              <a href='mailto:example@mail.com' className='mx-2'>
                example@mail.com
              </a>
            </address>
            <address></address>
          </footer>
        </div>
      </div>
    </div>
  );
}
