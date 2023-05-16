import React, { useState, useEffect } from 'react'

const TypingText = () => {
  const txt = "안녕하세요! 조현웅입니다.";
  const [Text, setText] = useState('');
  const [Count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setText(Text + txt[Count]);
        setCount(Count + 1);
    }, 200);
    if(Count === txt.length)  {  
        clearInterval(interval); 
    }
    return () => clearInterval(interval); 
  })
  
  return (
  	<p className="text" >{ Text }</p>
  )
}

export default TypingText