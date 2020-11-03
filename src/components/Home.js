import React, { useState, useCallback } from 'react'
import {Link} from 'react-router-dom';
import {useTransition, animated} from 'react-spring';
import  January from '../images/january.JPG';
import  February from '../images/february.JPG';
import  March from '../images/march.JPG';
import  April from '../images/april.JPG';
import  May from '../images/may.JPG';
import  June from '../images/june.JPG';
import  July from '../images/july.JPG';
import  August from '../images/august.JPG';
import  September from '../images/september.JPG';
import  October from '../images/october.JPG';
import  November from '../images/november.JPG';
import  December from '../images/december.JPG';


//Carrusel de imágenes, react-spring
const pages = [
  ({ style }) => <animated.div style={{ ...style, background: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(" + January + ")", backgroundSize: 'cover', padding:'50px' }}>"En <span>enero</span>, bufanda, capa y sombrero"</animated.div>,
  ({ style }) => <animated.div style={{ ...style, backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(" + February + ")", backgroundSize: 'cover', padding:'50px' }}>"En <span>febrero</span>, un día al sol y otro al brasero"</animated.div>,
  ({ style }) => <animated.div style={{ ...style, backgroundImage:  "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(" + March + ")", backgroundSize: 'cover', padding:'50px'  }}>"<span>Marzo</span> ventoso y abril lluvioso, hacen a mayo florido y hermoso"</animated.div>,
  ({ style }) => <animated.div style={{ ...style, backgroundImage:  "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(" + April + ")", backgroundSize: 'cover', padding:'50px'  }}>"En <span>abril</span>, aguas mil"</animated.div>,
  ({ style }) => <animated.div style={{ ...style, backgroundImage:  "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(" + May + ")", backgroundSize: 'cover', padding:'50px'  }}>"Agua de <span>mayo</span>, pan para todo el año"</animated.div>,
  ({ style }) => <animated.div style={{ ...style, backgroundImage:  "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(" + June + ")", backgroundSize: 'cover', padding:'50px'  }}>"No te quites el gabán hasta que en <span>junio</span> llegue San Juan"</animated.div>,
  ({ style }) => <animated.div style={{ ...style, backgroundImage:  "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(" + July + ")", backgroundSize: 'cover', padding:'50px'  }}>"Por mucho que quiera ser, en <span>julio</span> poco ha de llover"</animated.div>,
  ({ style }) => <animated.div style={{ ...style, backgroundImage:  "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(" + August + ")", backgroundSize: 'cover', padding:'50px'  }}>"Agua por la Virgen de <span>agosto</span>, quita aceite y agua el mosto"</animated.div>,
  ({ style }) => <animated.div style={{ ...style, backgroundImage:  "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(" + September + ")", backgroundSize: 'cover', padding:'50px'  }}>"En <span>septiembre</span>, cosecha y no siembres"</animated.div>,
  ({ style }) => <animated.div style={{ ...style, backgroundImage:  "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(" + October + ")", backgroundSize: 'cover', padding:'50px'  }}>"En <span>octubre</span>, caída de hojas y lumbre"</animated.div>,
  ({ style }) => <animated.div style={{ ...style, backgroundImage:  "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(" + November + ")", backgroundSize: 'cover', padding:'50px'  }}>"Truenos en <span>noviembre</span>, prepara el traje del año que viene"</animated.div>,
  ({ style }) => <animated.div style={{ ...style, backgroundImage:  "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(" + December + ")", backgroundSize: 'cover', padding:'50px'  }}>"En <span>diciembre</span>, no hay valiente que no tiemble"</animated.div>,
]


const Home = () => {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 12), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  return (
    <div className="home">
      <header className="home_header">
        <h1 className="home_header--title">A mal tiempo, actitud</h1>
      <nav className="home_menu">
        <ul className="home_menu--list">
          <li>
          <Link className="current" to="/current">Mi tiempo</Link>
          </li>
        </ul>
      </nav>
      </header>
     <main className="home_page">  
     <div className="simple-trans-main"  onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
      </div>
      </main>
       <footer className="home_footer">
         <p>Desarrollado by dchiki with<span role="img" aria-label="heart"> 💚 </span>2020</p>
       </footer>
    </div>
  );
}


export default Home;
