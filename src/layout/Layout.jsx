import { Outlet, Link, useLocation } from "react-router-dom"


const Layout = () => {
  //we need to know where the user is. this way we can format the routing styles to show where the user clicked
  const location = useLocation()
  const currentUrl = location.pathname

  return (
    <div className="md:flex md:min-h-screen">

      <div className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          Client Manager
        </h2>

        <nav className="mt-10">
          {/* we use link for better performance, we could use a and href but with link and to it doesn't refresh the whole site */}
          <Link
              className={`${currentUrl === '/clients' ? 'text-blue-300' : 'text-white'} text-white text-2xl block mt-2 hover:text-blue-300`}
              to="/clients">Clients</Link>
          <Link 
            className={`${currentUrl === '/clients/new' ? 'text-blue-300' : 'text-white'} text-white text-2xl block mt-2 hover:text-blue-300`}
            to="/clients/new">New client</Link>
        </nav>

      </div>

      <div className="md:w-3/4 md:h-screen overflow-scroll p-10"><Outlet/></div>
        
        
    
    </div>
    )
    
}

export default Layout