import React from 'react'
import { NavLink } from 'react-router-dom'
import './Style.css';
import './App.css';
import './Style.css';



export default function Rutes() {
  return  (
    <div >
        <nav >
  <div>

    <div >
      <br></br>
<ul>
<button>
<img src='https://i.ytimg.com/vi/JpXVOX14iYk/maxresdefault.jpg' ></img>
                            <NavLink to="/"   className="ruta">                              Ver Pokemones                          </NavLink>

 
</button>

</ul>
      <br></br>
      <ul>
        <button>
          <img src="https://scontent-qro1-1.xx.fbcdn.net/v/t1.6435-9/129910068_103664344940224_4793935795174978880_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEg0inmbJRPmVGwVFk6i6a4iDPS2vwYdzOIM9La_Bh3M9GxuRoM5-9fB7Qtdu2D-CFc2I8MRc0Nj-TJx41KKfCh&_nc_ohc=-rDFG9VMf0gAX-6sOSz&_nc_ht=scontent-qro1-1.xx&oh=00_AT9k6I9T6C5FYXbQ8RW740APGuGgmEk33g2cslPcj2EbLw&oe=62E8F317" ></img>
                                   <NavLink to="/180600"  className="rutas" >                              Mis Datos                         </NavLink>
        </button>
      </ul>  
    </div>
  </div>
</nav>
    </div>
  )
}
