import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';

export function Header() {
  return (
    <header className='relative z-50 mb-12 p-4 md:p-4'>
      <Container className='flex items-center justify-between pt-8'>
        <div className=''>
          <h2>!hey</h2>
        </div>
        <div className=''>
          <a
            href='mailto:yemiotola@gmail.com'
            className='text-indigo-700 font-medium underline underline-offset-4'
          >
            Got questions?
          </a>
        </div>
      </Container>
    </header>
  );
}
