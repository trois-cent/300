type Transition = {

    duration?: number,

    delay?: number

}


export const agressive = ({ duration, delay } : Transition) => { return { duration: duration || 0.8, ease: [0.23, 1, 0.320, 1], delay: delay || 0 } }

export const progressive = ({ duration, delay } : Transition) => { return { duration: duration || 0.8, ease: [0.645, 0.045, 0.355, 1], delay: delay || 0 } }