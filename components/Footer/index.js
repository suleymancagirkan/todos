import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='flex flex-row items-center justify-between w-full gap-x-4'>
            <div className='w-full dark:bg-white bg-black h-[1.2px]' />
            <div className='w-2 h-1 bg-white rounded-full' />
            <span className='text-sm text-black dark:text-white tracking-tight font-semibold whitespace-nowrap'>created by <Link href={"https://linkedin.com/in/cgrkn"} target="_blank" className='text-blue-500 hover:text-blue-600 transition-colors'>cgrkn</Link></span>
            <div className='w-2 h-1 bg-white rounded-full' />
            <div className='w-full dark:bg-white bg-black h-[1.2px]' />
        </div>
    )
}