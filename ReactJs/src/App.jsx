import { useState } from "react"
const App = () => {
  const [count,setCount] = useState(0)

  const HandleClick = () => {
    setCount(count + 1)
  }
  return (
    <div className=" text-white">
      <div className=" justify-center items-center grid space-y-5 mt-52">
         <p className=" text-center">Extension Creator <a href="https://www.instagram.com/nandakaws/" className=" duration-200 hover:text-purple-500">NandaKaws</a></p>
         <h1 className=" text-purple-500 text-5xl font-bold  "><span className=" text-white">Lets</span>code!</h1>
         <button onClick={HandleClick} className=" rounded-lg font-bold text-xl bg-purple-500">Click</button>
         <h1 className=" text-center font-bold  ">{count}</h1>
      </div>
    </div>
  )
}

export default App
