import { Suspense } from "react"
import { Outlet, NavLink } from "react-router-dom";

import logo from './assets/react.svg'
import { routes } from "./router/routes";


function App() {

  return (
    <div style={{
      display: 'flex',
    }}>
       <div className='main-layout'>
        <nav>
          <img src={ logo} alt='logo'/>
          <ul>
            {
              routes.map(({to, name}) => (
                <li key={ name }>
                  <NavLink                     
                    to={ to } 
                    className={({isActive}) => isActive ? 'nav-active' : ''}
                  >
                    {name }
                  </NavLink>
                </li>
              ))
            }
            
        </ul>
        </nav>        
      </div>
  
      <div style={{ padding: 10}}>
        <Suspense >
          <Outlet />
        </Suspense>
      </div> 
      
    </div>
  )
}

export default App
