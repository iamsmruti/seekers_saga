import React from 'react'
import Layout from '../../../components/Layout'

// React Slick Imports
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from '../../../lib/react-slick/settings'

// Custom Components
import PuzzleCard from './PuzzleCard';
import { puzzle1 } from './data';

import Timer from '../../../components/Timer';

const PuzzleOne = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600);

  return (
    <Layout>
        <div className='flex justify-between px-5 py-5 items-start'>
            <div className=''>
                <h2 className='text-[24px] font-semibold'>Find the Odd one...</h2>
                <p className=''>Enter the row number and column number</p>
            </div>
            <div>
                <Timer expiryTimeStamp={time} times={puzzle1.length}/>
            </div>
        </div>
        
        <div className='flex justify-center mt-10'>
            <div className='md:w-[1000px] w-[100vw]'>
                <Slider {...settings}>
                    {puzzle1.map((item) => {
                        return (
                            <PuzzleCard item={item}/>
                        )
                    })}
                </Slider>
            </div>
        </div>
    </Layout>
  )
}

export default PuzzleOne