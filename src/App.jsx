import NavBar from "./Components/NavBar"
import Crypto from "./Components/Crypto"
import GettingStarted from "./Components/GettingStarted"
import Trending from "./Components/Trending"
import Services from "./Components/Services"
import Performance from "./Components/Performance"
import Sentiment from "./Components/Sentiment"
import About from "./Components/About"
import Tokenomics from "./Tokenomics"

function App() {

  

  return (
    <>
      <div className="bg-gray-100">
        <NavBar/>

        <div className="mt-4 ml-8 text-sm">
          <span className="text-gray-500" >Cryptocurrencies &gt;&gt; </span> <span className="font-semibold">Bitcoin</span>
        </div>
        
        <div className="md:flex">

          <div className="sm:w-full">
            <Crypto/>
            <Services/>
            <Performance/>
            <Sentiment/>
            <About/>
            <Tokenomics/>
          </div>
          

          <div className="md:w-auto">
            <GettingStarted/> 
            <Trending/>
          </div>
        </div>

        
        
      </div>
         
        
    </>
  )
}

export default App
