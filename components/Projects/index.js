import Link from 'next/link'
import React from 'react'
import { FaRocket, FaTrash } from 'react-icons/fa'

export default function Projects() {
    return (
        <div className='mt-20 flex flex-col items-start justify-start w-full'>
            <span className='text-3xl tracking-tight font-bold text-black dark:text-white'>cgrkn&apos;s Projects</span>
            <div className='flex flex-col items-start justify-start gap-y-2 mt-5 w-full'>
                <div className='w-full p-3 rounded-xl dark:bg-neutral-800 bg-neutral-200 flex flex-row items-center justify-between gap-x-2'>
                    <div className='flex flex-col items-start justify-start leading-none'>
                        <Link href={"/checklists/123123"} className='text-xl font-semibold tracking-tight text-black dark:text-white'>mcbu.dev</Link>
                        <Link href={"/checklists/123123"} className='text-sm font-semibold tracking-tight text-neutral-700 dark:text-neutral-300'>A web community for Manisa Celal Bayar University Computer Students.</Link>
                    </div>
                    <div className='flex flex-row items-start justify-end gap-x-2'>
                        <button className='p-2.5 rounded-xl ring-1 ring-neutral-600 text-neutral-400 hover:bg-neutral-600 hover:text-white'>
                            <FaRocket />
                        </button>
                        <button className='p-2.5 rounded-xl ring-1 ring-neutral-600 text-neutral-400 hover:bg-neutral-600 hover:text-white'>
                            <FaTrash />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
