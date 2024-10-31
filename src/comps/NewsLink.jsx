import React from 'react'
import thumbnail from '/tdb2.png'

class NewsLink extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      newsData: [],
      loaded: false,
    }
  }

  componentDidMount(){
    let url = 'https://newsapi.org/v2/top-headlines/sources?apiKey=2ebb187b1dfb4051861d2660ccdf3b12'

    // fetch(url).then((output) => output.json()).then((json) =>{
    //   this.setState({
    //     newsData: json,
    //     loaded: true,
    //   })
    // })

    // newsData.map((item) =>{

    // })
  }

  render(){
    const {loaded, item} = this.state
    if(loaded){

      // loaded news
      return(
        <div className='newsLink bg-red-200 flex flex-col h-[14vw]'>
          {/* SAMPLE NEWS 1
          contains image title and readmore button */}

          <img src={props.img} alt='IMAGE' className='w-[22vw] h-[14vw] absolute' />

          <div className="data flex-grow">
            <h1 className='ml-[23vw] text-[3vw] text-wrap font-medium'>HEADING</h1>
            <h1 className='ml-[23vw] text-[2vw] text-wrap font-normal'>NEWS</h1>
          </div>

          <button className='btn ml-[23vw] text-[1.3vw] mt-auto mb-[2vh] mr-[2vh] min-w-[10vw] self-end bg-black hover:bg-red-700 text-white p-[0.5em]'>READ MORE</button>
        </div>
      )
    }

    // failed to load news
    return(
      <div className='bg-red-200 flex flex-col h-[14vw]'>
          {/* SAMPLE NEWS 1
          contains image title and readmore button */}

          <img src={thumbnail} alt='IMAGE' className='w-[22vw] h-[14vw] absolute' />

          <div className="data flex h-full flex-col items-center justify-center">
            <h1 className='ml-[23vw] text-[3vw] text-center text-wrap font-medium'>Unable to Load News</h1>
          </div>
        </div>
    )

  }
}

export default NewsLink

// const NewsLink = (props) => {

//   return (
    // <div className='bg-red-200 flex flex-col h-[14vw]'>
    //     {/* SAMPLE NEWS 1
    //     contains image title and readmore button */}

    //     <img src={props.img} alt='IMAGE' className='w-[22vw] h-[14vw] absolute' />

    //     <div className="data flex-grow">
    //       <h1 className='ml-[23vw] text-[3vw] text-wrap font-medium'>{props.heading}</h1>
    //       <h1 className='ml-[23vw] text-[2vw] text-wrap font-normal'>{props.news}</h1>
    //     </div>

    //     <button className='btn ml-[23vw] text-[1.3vw] mt-auto mb-[2vh] mr-[2vh] min-w-[10vw] self-end bg-black hover:bg-red-700 text-white p-[0.5em]'>READ MORE</button>
    // </div>
//   )
// }

// export default NewsLink