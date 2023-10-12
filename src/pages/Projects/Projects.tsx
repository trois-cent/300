import './styles.scss'
import { motion } from 'framer-motion'

import PageNav from '../../components/navbars/PageNav/PageNav'
import { agressive } from '../../lib/styles/transitions'

const Projects = () => {

    
    return (
        <motion.div className='page' id='projects'>
            <PageNav />
            <motion.h1 layoutId='projects' transition={agressive}>projects</motion.h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic aliquam assumenda id fugiat corrupti ut officia libero, eveniet, distinctio nihil incidunt esse enim! Veniam laborum eaque laboriosam sint, eveniet vitae accusantium pariatur? In molestias ab praesentium perferendis voluptates fuga laudantium corrupti minus eaque esse! Eveniet dolor sapiente quia consectetur reiciendis!</p>
        </motion.div>
    )
}

export default Projects