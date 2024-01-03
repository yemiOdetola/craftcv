import { Container } from '@/components/common/Container';

export function Footer() {
  return (
    <footer className='absolute bottom-0 left-0 right-0 bg-white py-4'>
      <Container className='flex flex-col items-center justify-between md:flex-row'>
        <h2 className='text-md font-semibold'>urgh 🎈</h2>
        <p className='mt-6 text-sm text-gray-600 md:mt-0'>
          Copyright &copy; {new Date().getFullYear()} urgh. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
