import Header from './comps/Header'
import PageBody from './comps/PageBody'

import logo from '/tdb.png'
let name = "The Daily Bugle"

function App() {

  return (
    <>
      <div className='m-0 p-0 font-roboto'>
        <Header logo={logo} name={name}/>

        <PageBody />
      </div>
    </>
  )
}

export default App
