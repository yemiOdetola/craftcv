import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Input } from '@/components/ui/input';
import { buttonVariants } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
};

export default function LoginPage() {
  return (
    <div className='container flex h-screen w-screen flex-col items-center justify-center'>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        <div className='flex flex-col text-center'>
          <Image
            className='mx-auto'
            src='/logo.png'
            width={302}
            height={57}
            alt='Organize Simple Logo'
          />
          <h1 className='mt-8 text-2xl font-semibold tracking-tight'>
            Welcome back
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid gap-6'>
            <div className='grid gap-1.5'>
              <label htmlFor='username'>Username</label>
              <Input
                id='username'
                placeholder='Username'
                type='text'
                autoCapitalize='none'
                autoComplete='text'
                autoCorrect='off'
                disabled={isLoading}
                {...register('username')}
              />
              {errors?.username && (
                <p className='px-1 text-xs text-red-600'>
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className='grid gap-1.5'>
              <label htmlFor='password'>Password</label>
              <Input
                id='password'
                type='password'
                autoCapitalize='none'
                autoCorrect='off'
                disabled={isLoading}
                {...register('password')}
              />
              {errors?.password && (
                <p className='px-1 text-xs text-red-600'>
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              className={cn(
                'mt-2',
                buttonVariants({
                  variant: 'default',
                  size: 'default',
                })
              )}
              disabled={isLoading}
            >
              {isLoading && (
                <Icons.spinner className='mr-2 h-4 w-4 animate-spin'></Icons.spinner>
              )}
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
