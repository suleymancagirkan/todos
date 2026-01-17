import React from 'react'
import { TbBookmarkFilled, TbCheck, TbClock, TbMeteorFilled, TbPlus, TbX } from 'react-icons/tb'

//Eğer bekleme durumundaysa icona tıklarsak tik olur ama yazıya tıklarsak çarpı olur.
//Eğer tik durumundaysa icona tıklarsak bişey olmaz ama yazıya tıklarsak bekleme durumu olur.
//Eğer çarpı durumundaysa icona tıklarsak o todo silinir ama yazıya tıklarsak bekleme durumu olur.
//Publish ise onu yapılmış bir versiyon olduğunu söyler

export default function Checklists() {
    return (
        <div className='min-h-[84vh] w-full px-2'>
            <div className='flex flex-col items-start justify-start gap-y-4 w-full'>
                <span className='text-3xl font-bold tracking-tight text-black dark:text-white mt-20'>Checklist: 123123</span>
                <div className='flex flex-col items-start justify-start w-full mt-5 gap-y-3'>
                    <div className='flex flex-col items-start justify-start w-full'>
                        <div className='flex flex-row items-center justify-between w-full'>
                            <span className='flex flex-row items-center justify-start gap-x-1.5 text-2xl'>
                                <TbMeteorFilled className='text-blue-500 text-lg' />
                                <span className='text-black dark:text-white text-sm tracking-tight font-semibold'>version: 1.0.0 (Current)</span>
                            </span>
                            <button className='p-1.5 rounded-xl flex flex-row items-center justify-start gap-x-1 border-2 border-transparent dark:text-neutral-200 text-neutral-800 hover:bg-yellow-500/35 hover:text-yellow-500'>
                                <TbBookmarkFilled className='text-lg' />
                                <span className='text-sm tracking-tight font-bold'>Publish</span>
                            </button>
                        </div>
                        <div className='p-3 rounded-2xl bg-neutral-200 dark:bg-neutral-800 inset-shadow-sm ring-1 ring-neutral-300 dark:ring-neutral-700 w-full mt-2 flex flex-col items-start justify-start gap-y-3'>
                            <div className='flex flex-row items-center justify-start gap-x-2'>
                                <button>
                                    <TbCheck className='text-xl text-green-600' />
                                </button>
                                <span className='text-black dark:text-white text-sm tracking-tight line-through font-semibold'>Complete coding of profile page</span>
                            </div>
                            <div className='flex flex-row items-center justify-start gap-x-2'>
                                <button>
                                    <TbClock className='text-xl text-yellow-600' />
                                </button>
                                <span className='text-black dark:text-white text-sm tracking-tight font-semibold'>Complete coding of profile page</span>
                            </div>
                            <div className='flex flex-row items-center justify-start gap-x-2'>
                                <TbX className='text-xl text-red-600' />
                                <span className='text-black dark:text-neutral-400 text-sm tracking-tight line-through font-semibold'>Complete coding of profile page</span>
                            </div>

                            <div className='flex flex-row items-center justify-between mt-2 gap-x-2'>
                                <input className='w-full border-2 inset-shadow-sm border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded-lg px-2 py-0.5 text-sm' />
                                <button className='p-1 rounded-xl text-xl bg-neutral-200 dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-700 text-black dark:text-white hover:border-transparent hover:bg-blue-500/35 hover:text-blue-500 transition-colors'>
                                    <TbPlus />
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className='flex flex-row items-center justify-start w-full gap-x-4 mt-15'>
                        <span className='text-sm text-black dark:text-white tracking-tight font-semibold whitespace-nowrap'>Older Versions</span>
                    </div>

                    <div className='flex flex-col items-start justify-start w-full'>
                        <div className='flex flex-row items-center justify-between w-full'>
                            <span className='flex flex-row items-center justify-start gap-x-1.5 text-2xl'>
                                <TbMeteorFilled className='text-yellow-700 text-lg' />
                                <span className='text-black dark:text-white text-sm tracking-tight font-semibold'>version: 0.0.9</span>
                            </span>
                            <button className='p-1.5 rounded-xl flex flex-row items-center justify-start gap-x-1 border-2 border-transparent bg-yellow-500/35 text-yellow-500'>
                                <TbBookmarkFilled className='text-lg' />
                                <span className='text-sm tracking-tight font-bold'>Published</span>
                            </button>
                        </div>
                        <div className='p-3 rounded-2xl bg-neutral-200 dark:bg-neutral-800 inset-shadow-sm ring-1 ring-neutral-300 dark:ring-neutral-700 w-full mt-2 flex flex-col items-start justify-start gap-y-3'>
                            <div className='flex flex-row items-center justify-start gap-x-2'>
                                <button>
                                    <TbCheck className='text-xl text-green-600' />
                                </button>
                                <span className='text-black dark:text-white text-sm tracking-tight line-through font-semibold'>Complete coding of profile page</span>
                            </div>
                            <div className='flex flex-row items-center justify-start gap-x-2'>
                                <button>
                                    <TbClock className='text-xl text-yellow-600' />
                                </button>
                                <span className='text-black dark:text-white text-sm tracking-tight font-semibold'>Complete coding of profile page</span>
                            </div>
                            <div className='flex flex-row items-center justify-start gap-x-2'>
                                <TbX className='text-xl text-red-600' />
                                <span className='text-black dark:text-neutral-400 text-sm tracking-tight line-through font-semibold'>Complete coding of profile page</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
