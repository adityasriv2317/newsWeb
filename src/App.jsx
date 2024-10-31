import Header from './comps/Header'
import PageBody from './comps/PageBody'

import logo from '/tdb.png'
let name = "The Daily Bugle"

function App() {

  return (
    <>
      <div className='m-0 p-0 font-roboto'>

        {/* header - navigation bar */}
        <Header logo={logo} name={name}/>

        {/* page body with embedded news */}
        <PageBody img={logo}/>
      </div>
    </>
  )
}

export default App
