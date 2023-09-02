import {FaMobileAlt,FaTabletAlt,FaLaptop} from 'react-icons/fa' 
import DataContext from './context/DataContext'
import { useContext } from 'react'

const Header = ({title}) => {
  const {width} = useContext(DataContext)
  console.log("w ", width)
  return (
    <main>
        <h1 className ="Header">{title}
        {width < 768 ? (
          <FaMobileAlt className='icon' />
        ) : width < 992 ? (
          <FaTabletAlt className='icon' />
        ) : (
          <FaLaptop className='icon' />
        )}
        </h1>
        {/* <h4>{
          width < 768 ? <FaMobileAlt className='icon'/> :
            width < 992 ? <FaTabletAlt className='icon' /> :
              <FaLaptop className='icon'/> 
        }</h4> */}
    </main>
  )
}
export default Header

