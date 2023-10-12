import './styles.scss'
import { FC, Dispatch, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

type Props = {

    setLoader: Dispatch<React.SetStateAction<boolean>>

}

const Loader:FC<Props> = ({ setLoader }) => {
    const p = useRef<HTMLParagraphElement | null>(null)

    // start incrementation interval
    useEffect(() => {
        setTimeout(() => {
            const inter = setInterval(() => {
                if (p.current && p.current.textContent)
                p.current.textContent = increment(p.current.textContent, inter)
            }, 7.5)
        }, 1000)
    }, [])

    // increment text value by 1
    const increment = (text: string, inter: number): string => {
        let num: number = Number(text)

        if (num < 300) ++num
        else clearInterval(inter)

        const out = `${num.toLocaleString()}`.padStart(3, '0')

        return out
    }
    

    return (
        <motion.div 
            animate={{
                height: 'var(--nav-height)',
                transition: {
                    duration: .8,
                    ease: [.7,-0.01,.19,.99],
                    delay: 4
                }
            }}
            onAnimationComplete={() => setLoader(false)}
            id='loader'>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
                ref={p}>
                000
            </motion.p>
        </motion.div>
    )
}


export default Loader