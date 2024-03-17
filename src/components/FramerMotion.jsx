import React, { useState } from 'react'
import {motion} from 'framer-motion'
const FramerMotion = () => {
    const[rotate,setrotate]=useState(false)
  return (
    <div>
        <motion.div animate={{y:100}}>
            <div className='example-container'>

            </div>

        </motion.div>
    </div>
  )
}

export default FramerMotion