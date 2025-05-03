import React from 'react'
import { EmblaCarousel } from './EmblaCarousel'

const HomePage = () => {
  return (
    <div id='home' className="w-full bg-white dark:bg-[#0A132E] relative  min-h-[65vh]">
     
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold underline decoration-wavy underline-offset-8 text-center m-3 mt-0 p-2 dark:text-white  text-[#0A132E]">Membres Haven</h1>
        <EmblaCarousel/>
    </div>
  )
}

export default HomePage