import Chai from "./chai"
function App() {
  const username = "chai aur code"

  return (
    <>   //Fragment
      <Chai/>
      <h1>Two tags can return in an empty 
        tag called fragment. {username}  </h1>
          // {} this is EVALUATED EXPRESSION means only the final output will work not if else etc..
          all the if else other things should operater before return and inside function App()
    </> 

)
}

export default App
