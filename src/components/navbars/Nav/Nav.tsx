import './styles.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { agressive } from '../../../lib/styles/transitions'

// toggle animation styles 
const lineOne = {
    closed: { opacity: 1 },
    open: { opacity: 1, y: 0, rotate: '-45deg' }
}

const lineTwo = {
    closed: { opacity: 1 },
    open: { opacity: 1, y: 0, rotate: '45deg' }
}



const Nav = () => {

    // const [scrolled, setScrolled] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)

    // update scrolled on window scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // handle scroll
    const handleScroll = () => {
        const top: number = yOffset()

        if (top > 0) document.body.setAttribute('style', '--nav-height: 80px;')
        else document.body.setAttribute('style', '--nav-height: 80px;')
    }
    
    return (
        <nav>
            {/* desktop */}
            <div className='bar'>
                <Link to='/' id='brand'>
                    <p>300</p>
                </Link>

                <Link to='work-with-us' className='nav-button hover-overlay'>
                    work with us
                </Link>


                <button className='nav-button hover-overlay'>
                    français
                </button>

                {/* hamburger */}
                <motion.button 
                    id='hmbg' 
                    onClick={() => setOpen(prev => !prev)}
                    animate={open ? { backgroundColor: 'var(--white)' } : { backgroundColor: 'var(--black)' }}
                    transition={agressive({ duration: 0.3 })}>
                    <motion.svg 
                        variants={lineOne}
                        initial={{ opacity: 0, y: -5 }}
                        animate={open ? 'open' :  'closed'}
                        transition={agressive({ duration: 0.6 })}
                        width="34" height="4" viewBox="0 0 34 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.rect transition={agressive({})} width="34" height="4" fill={open ? 'var(--black)' : 'var(--white)'}/>
                    </motion.svg>
                    <motion.svg 
                        variants={lineTwo}
                        initial={{ opacity: 0, y: 5 }}
                        animate={open ? 'open' : 'closed'}
                        transition={agressive({ duration: 0.6 })}
                        width="34" height="4" viewBox="0 0 34 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.rect transition={agressive({})} width="34" height="4" fill={open ? 'var(--black)' : 'var(--white)'}/>
                    </motion.svg>
                </motion.button>

                {/* mobile body */}
                {open 
                    &&
                    <motion.div 
                        className="body"
                        initial={{ clipPath: 'inset(0 0 100% 0)' }}
                        animate={{ clipPath: 'inset(0 0 0 0)' }}
                        transition={agressive({ duration: 0.4 })}>
                        <Link 
                            to='/work-with-us'
                            onClick={() => setOpen(false)}>
                            work with us
                        </Link>
                        <button 
                            onClick={() => setOpen(false)}>
                            français
                        </button>
                    </motion.div>
                }
            </div>
        </nav>
    )
}

// get top scrolled offset
const yOffset = (): number => {
    return document.getElementById('root')?.scrollTop || 0
}

export default Nav