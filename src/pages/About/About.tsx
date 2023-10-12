import './styles.scss'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import PageNav from '../../components/navbars/PageNav/PageNav'
import { agressive, progressive } from '../../lib/styles/transitions'
import { Link } from 'react-router-dom'

const About = () => {
    const whoref = useRef<HTMLButtonElement | null>(null)
    const whatref = useRef<HTMLButtonElement | null>(null)
    const whyref = useRef<HTMLButtonElement | null>(null)
    const howref = useRef<HTMLButtonElement | null>(null)

    const [firstLoad, setFirstLoad] = useState<boolean>(true)

    // set first load to false after .5 second
    useEffect(() => {
        setTimeout(
            () => setFirstLoad(false),
            750
        )
    }, [])

    return (
        <motion.div className='page' id='about'>
            {/* url navigator */}
            <PageNav />
            
            {/* header */}
            <section>
                <motion.h1 
                    layoutId='about-us' 
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={agressive({})}>
                    about us
                </motion.h1>
            </section>

            <section id='links' className={firstLoad ? 'firstload' : ''}>
                <motion.div 
                    className="grid-wrap"
                    initial={{ backgroundColor: 'var(--black)', y: 100 }}
                    whileInView={{ backgroundColor: 'var(--white)', y: 0 }}
                    transition={progressive({ delay: firstLoad ? 0.2 : 0 })}>
                    <div className="grid" id='links'>
                        <button 
                            className='hover-overlay' 
                            onClick={() => whoref.current?.scrollIntoView({ behavior: 'smooth' })}>
                            <motion.p
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={progressive({ delay: 0.2 })}>
                                who
                            </motion.p>
                        </button>
                        <button 
                            className='hover-overlay' 
                            onClick={() => whatref.current?.scrollIntoView({ behavior: 'smooth' })}>
                            <motion.p
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={progressive({ delay: 0.2 })}>
                                what
                            </motion.p>
                        </button>
                        <button 
                            className='hover-overlay' 
                            onClick={() => whyref.current?.scrollIntoView({ behavior: 'smooth' })}>
                            <motion.p
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={progressive({ delay: 0.2 })}>
                                why
                            </motion.p>
                        </button>
                        <button 
                            className='hover-overlay' 
                            onClick={() => howref.current?.scrollIntoView({ behavior: 'smooth' })}>
                            <motion.p
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={progressive({ delay: 0.2 })}>
                                how
                            </motion.p>
                        </button>
                    </div>
                </motion.div>
            </section>

            <section ref={whoref} id='who'>
                <motion.div 
                    className="grid-wrap"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={progressive({ delay: firstLoad ? 0.4 : 0 })}>
                    <div className="grid">
                        <div className="letter">
                            <span>w</span>
                        </div>
                        <div className="letter">
                            <span>h</span>
                        </div>
                        <div className="letter" id='o'>
                            <span>o</span>
                        </div>
                        <div className="letter" id='per'>
                            <span>300%</span>
                        </div>
                        <div className="letter" id='question-mark'>
                            <span>?</span>
                        </div>
                        <p>
                            We’re a small team, and we intend to keep it that way. We strongly believe that a small group of competent like-minded individuals can outdo an army. Sounds familiar? Let’s just say that we’re not the firsts to be called 300. We carry their drive, passion and just like them, we give our 300%.
                        </p>
                    </div>
                </motion.div>
            </section>

            <section ref={whatref} id='what'>
                <motion.div 
                    className="grid-wrap"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={progressive({})}>
                    <div className="grid">
                        <p>
                            We're not your average agency. We think of ourselves as a strategic partner. From branding to web and mobile development, we provide our clients with top of the line solutions. We thrive on passion, challenges, and ideas. Tell us your needs, your goals, your vision; we'll make a path. 
                        </p>
                        <div className="letter">
                            <span>w</span>
                        </div>
                        <div className="letter" id='question-mark'>
                            <span>?</span>
                        </div>
                        <div className="letter">
                            <span>h</span>
                        </div>
                        <div className="letter">
                            <span>a</span>
                        </div>
                        <div className="letter">
                            <span>t</span>
                        </div>
                    </div>
                </motion.div>
            </section>

            <section ref={whyref} id='why'>
                <motion.div 
                    className="grid-wrap"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={progressive({})}>
                    <div className="grid">
                        <div className="letter full-col">
                            <span>w</span>
                        </div>
                        <div className="letter">
                            <span>h</span>
                        </div>
                        <div className="letter y">
                            <span>?</span>
                        </div>
                        <div className="letter full-col">
                            <span>y</span>
                        </div>
                        <p>
                            If you haven’t noticed yet, we’re passionate people. We truly enjoy diving into your projects and building experiences for your customers to fully live your brand. The way we see it, we get to be a part of your journey. The ride is where all the fun lies.
                        </p>
                    </div>
                </motion.div>
            </section>

            <section ref={howref} id='how'>
                <motion.div 
                    className="grid-wrap"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={progressive({})}>
                    <div className="grid">
                        <div className="letter">
                            <span>h</span>
                        </div>
                        <div className="letter">
                            <span>o</span>
                        </div>
                        <div className="letter">
                            <span>?</span>
                        </div>
                        <div className="letter">
                            <span>w</span>
                        </div>
                        <Link to='/methods' className='hover-overlay'>
                            <p className='arrow-link'>
                                <svg width="48" height="12" viewBox="0 0 48 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M48 6L38 0.2265L38 11.7735L48 6ZM-8.74228e-08 7L39 7L39 5L8.74228e-08 5L-8.74228e-08 7Z" fill="white"/>
                                </svg>
                                Our Methods 
                            </p>
                        </Link>
                    </div>
                </motion.div>
            </section>

            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={progressive({})}>
                <Link to='/projects' className='arrow-link animate'>
                    <svg width="48" height="12" viewBox="0 0 48 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M48 6L38 0.2265L38 11.7735L48 6ZM-8.74228e-08 7L39 7L39 5L8.74228e-08 5L-8.74228e-08 7Z" fill="white"/>
                    </svg>
                    Our Projects
                </Link>
            </motion.section>

            <section>
                <p className='copyrights'>
                    © 2023. 300 inc. All rights Reserved.
                </p>
            </section>
        </motion.div>
    )
}

export default About