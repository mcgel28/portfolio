import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const TypingEffect = () => {

    function handleType(count) {
        console.log(count);
    }
    
    function handleDone() {
        console.log('Done after 5 loops');
    }

  return (
    <div>
          <Typewriter
            words={['Web Developer']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={110}
            deleteSpeed={100}
            delaySpeed={1800}
            onLoopDone={handleDone}
            onType={handleType}
          />
    </div>
  )
}

export default TypingEffect;