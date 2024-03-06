import NavBar from "./Components/NavBar"
import Crypto from "./Components/Crypto"

function App() {

  

  return (
    <>
      <div className="bg-gray-100">
        <NavBar/>

        <div className="mt-4 ml-8 text-sm">
          <span className="text-gray-500" >Cryptocurrencies &gt;&gt; </span> <span className="font-semibold">Bitcoin</span>
        </div>
        
        <Crypto/> 
      </div>
         
        
    </>
  )
}

export default App
