import { Container } from '@/components/common/Container'

export function Footer() {
  return (
    <footer className="bg-white pt-32 pb-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
      <h2>hey!</h2>
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} YoU. All
          rights reserved.
        </p>
      </Container>
    </footer>
  )
}
