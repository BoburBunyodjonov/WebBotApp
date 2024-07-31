import { NavLink } from "react-router-dom"

const Admin = () => {
  return (
    <>
    
        <ul>
            <li>
                <NavLink to="/finance" className="text-blue-500">Finance Page</NavLink>
            </li>
        </ul>
    
    </>
  )
}

export default Admin