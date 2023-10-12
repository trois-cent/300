import './styles.scss'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

import { progressive } from '../../../lib/styles/transitions'

const PageNav = () => {
    const location = useLocation()

    // generate absolute path based on clicked page link
    const generatePath = (i: number): string => {
        const pages = location.pathname.split('/')

        let path = ''
        for (let k = 1; k <= i; k++) {
            path = `${path}/${pages[k]}`
        }

        return path
    }

    return (
        <motion.div 
            className='page-nav'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={progressive({ duration: 0.4, delay: .4 })}>
        {
            location.pathname.split('/').map((page, i) => {
                return (
                    i === 0 
                    ?
                    <Link to='/' key={i}>home</Link>
                    : page ?
                    <div key={i}>
                        <span>/</span>
                        <Link to={generatePath(i)}>{page.replace('-', ' ')}</Link>
                    </div>
                    :
                    <></>
                )
            })
        }
        </motion.div>
    )
}

export default PageNav
