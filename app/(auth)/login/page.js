import React from 'react'
import Link from 'next/link'
import { TbBrandGoogle, TbLock, TbUser } from 'react-icons/tb'

export default function Login() {
    return (
        <div className='flex flex-col items-center justify-center w-full min-h-[80vh] relative overflow-hidden'>

            <div className='w-full max-w-[420px] mx-auto z-10'>
                <div className='flex flex-col items-center justify-start text-center gap-y-6 p-8 rounded-3xl bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl border border-white/40 dark:border-white/5 shadow-2xl transition-all hover:shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_40px_rgba(0,0,0,0.3)]'>

                    {/* Header */}
                    <div className='flex flex-col items-center gap-y-2'>
                        <h1 className='text-3xl font-black tracking-tighter text-black dark:text-white'>
                            Welcome Back
                        </h1>
                        <p className='text-sm font-medium text-neutral-500 dark:text-neutral-400 max-w-[280px]'>
                            Enter your credentials to access your todo dashboard.
                        </p>
                    </div>


                    {/* Form */}
                    <div className='w-full flex flex-col gap-y-4'>
                        <div className='group relative'>
                            <div className='absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-blue-500 transition-colors'>
                                <TbUser className='text-lg' />
                            </div>
                            <input
                                type="text"
                                placeholder='Username'
                                className='w-full bg-neutral-100 dark:bg-neutral-800/50 border-2 border-transparent focus:border-blue-500/50 hover:bg-neutral-200/50 dark:hover:bg-neutral-800 rounded-xl pl-11 pr-4 py-3 text-sm font-semibold text-black dark:text-white outline-none transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-500'
                            />
                        </div>
                        <div className='group relative'>
                            <div className='absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-blue-500 transition-colors'>
                                <TbLock className='text-lg' />
                            </div>
                            <input
                                type="password"
                                placeholder='Password'
                                className='w-full bg-neutral-100 dark:bg-neutral-800/50 border-2 border-transparent focus:border-blue-500/50 hover:bg-neutral-200/50 dark:hover:bg-neutral-800 rounded-xl pl-11 pr-4 py-3 text-sm font-semibold text-black dark:text-white outline-none transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-500'
                            />
                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-y-4 pt-2'>
                        <button className='w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-tight shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5 active:translate-y-0 transition-all'>
                            Sign In
                        </button>

                        <div className='flex flex-row items-center justify-center gap-x-1 text-xs font-semibold'>
                            <span className='text-neutral-500 dark:text-neutral-400'>Don't have an account?</span>
                            <Link href="/register" className='text-blue-500 hover:text-blue-400 hover:underline'>Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
