import React from 'react'
import thumbnail from '/tdb2.png'

// const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2ebb187b1dfb4051861d2660ccdf3b12"
const url2 = 'https://jsonplaceholder.typicode.com/users'
const url3 = '/SampleApi.json'

class NewsLink extends React.Component{
  constructor(){
    super()

    this.state ={
      newsData: [],
      loaded: false,
    }
  }

  async componentDidMount(){

    // fetch output from api into a variable
    let output = await fetch(url3)
    let op = await output.json()

    // set state throughout
    this.setState({
      // type conversion to json array (inbulit function)
      newsData: op.articles,
      loaded: true,
    })

  }

  render(){

    // function that uses state to check if data is loaded and newsData is fetched
    const {newsData, loaded} = this.state

    // {
    //   console.log(newsData)
    //   console.log(loaded);
    // }

    // true condition
    if(loaded){

      // loaded news
      return(

        <div className='realOutput'>

          {// creating variable that hold news data using array.map function

            newsData.map((item) =>{
              {/* SAMPLE NEWS contains image title and readmore button */}

              // return function gives jsx to render
              return <div className='newsLink bg-red-200 mb-[2vw] flex flex-col h-[14vw] relative'>
                <img src={item.urlToImage?item.urlToImage:thumbnail} alt='IMAGE' className='w-[22vw] h-[14vw] absolute' />

                <div className="data flex-grow">
                  <h1 className='ml-[23vw] text-[2vw] text-wrap font-medium'>{item.title.slice(0, 65) + '...'}</h1>
                  <h1 className='ml-[23vw] text-[2vw] text-wrap font-normal'>{item.description?item.description.slice(0, 220) + '...':'[Removed]'}</h1>
                </div>

                <a className='btn ml-[23vw] text-[1.3vw] absolute bottom-0 mb-[2vw] text-center mr-[2vh] min-w-[10vw] self-end bg-black hover:bg-red-700 text-white p-[0.5em]' href={item.url} target='_blank'>READ MORE</a>     
              </div>         
            })
          }

        </div>
      )
    }

    // failed to load news
    else {return(
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
}

export default NewsLink