import React from 'react'
import NewsLink from './NewsLink'

let src = 'https://wallpapers.com/images/featured/spiderman-pictures-8opf8q4smmpx644d.jpg'

const PageBody = () => {

  return (
    <div className='newsBody mx-[2vw] py-[2vw]'>
        <h1 className='font-semibold text-[2.5em] max-md:text-[2em]'>Read Trending News</h1>

        <div className="newsBox mt-[2vw] py-[2vw] border-solid border-black border">
          <NewsLink img={src} heading={'HEADING'} news={"NEWS"}/>
        </div>
    </div>
  )
}

export default PageBody