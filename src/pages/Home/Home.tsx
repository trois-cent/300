import './styles.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { agressive } from '../../lib/styles/transitions'

const Home = () => {

    
    return (
        <div id='home'>
            <Link to='/projects' className='hover-overlay left'><motion.p layoutId='projects' transition={agressive({})}>projects</motion.p></Link>

            <Link to='/methods' className='hover-overlay left'><motion.p layoutId='methods' transition={agressive({})}>methods</motion.p></Link>

            <Link to='/about-us' className='hover-overlay left'><motion.p layoutId='about-us' transition={agressive({})}>about us</motion.p></Link>
        </div>
    )
}

export default Home