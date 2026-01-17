'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { TbUserFilled } from 'react-icons/tb'

export default function Header() {
    const [dropdown, setDropdown] = useState(false)
    return (
        <div className='flex flex-row items-center justify-between w-full'>
            <Link href={"/"} className='font-black text-sm text-black dark:text-white'>Todo <span className='text-blue-500'>App</span></Link>
            {true ? (
                <Link href={"/login"} className='p-2 rounded-2xl dark:bg-neutral-800 bg-neutral-200 flex flex-row items-center justify-start gap-x-1'>
                    <span className='text-xs font-semibold tracking-tight text-black dark:text-white'>Login</span>
                </Link>
            ) : (
                <div className='relative'>
                    <button onClick={() => setDropdown(!dropdown)} className='p-2 rounded-2xl dark:bg-neutral-800 bg-neutral-200 flex flex-row items-center justify-start gap-x-1'>
                        <TbUserFilled />
                        <span className='text-xs font-semibold tracking-tight text-black dark:text-white'>cgrkn</span>
                    </button>
                    {dropdown && (
                        <div className='absolute top-8 right-0.5 p-1.5 rounded-2xl bg-neutral-200 dark:bg-neutral-800 inset-shadow-sm ring-1 ring-neutral-300 dark:ring-neutral-700 w-20 mt-2 flex flex-col items-start justify-start gap-y-1'>
                            <Link href={"/"} className='px-2 py-1 rounded-lg text-xs text-center font-semibold tracking-tight text-black dark:text-white hover:bg-neutral-300 dark:hover:bg-neutral-700 w-full'>Projects</Link>
                            <button onClick={() => { }} className='px-2 py-1 rounded-lg text-xs text-center font-semibold tracking-tight text-black dark:text-white hover:bg-red-500/35 hover:text-red-500 dark:hover:bg-red-500/35 dark:hover:text-red-500 w-full'>Logout</button>
                        </div>
                    )}
                </div>
            )}

        </div>
    )
}