import { Outlet } from "react-router-dom"



const RootLayout = () => {
  return (
    <>
      <div className="container mx-auto px-3">
        <Outlet />        
      </div>
    </>
  )
}

export default RootLayout 
