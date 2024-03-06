import NavBar from "./Components/NavBar"
import Crypto from "./Components/Crypto"
import GettingStarted from "./Components/GettingStarted"
import Trending from "./Components/Trending"

function App() {

  

  return (
    <>
      <div className="bg-gray-100">
        <NavBar/>

        <div className="mt-4 ml-8 text-sm">
          <span className="text-gray-500" >Cryptocurrencies &gt;&gt; </span> <span className="font-semibold">Bitcoin</span>
        </div>
        
        <div className="md:flex">
          <Crypto/>

          <div className="flex flex-col">
            <GettingStarted/> 
            <Trending/>
          </div>
        </div>
        
      </div>
         
        
    </>
  )
}

export default App
