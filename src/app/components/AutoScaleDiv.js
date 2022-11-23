import React, { useEffect, useState, useRef } from 'react'

const AutoScaleDiv = ({ children }) => {
  const [scale, setScale] = useState(1);
  const ref = useRef();

  useEffect(() => {
    const node = ref.current;
    const parentNode = ref.current.parentElement;

    const availableWidth = parentNode.offsetWidth;
    const actualWidth = node.offsetWidth;
    let actualScale = (availableWidth / actualWidth)

    if (scale === actualScale) return;

    if (actualScale < 1) {
      setScale(actualScale);
    } else if (scale < 1) {
      setScale(1);
    }
  }, [children]);

  return (
    <div
      style={{
        transform: `scale(${scale},${scale})`, display: `inline-block`, padding: `0 30px`,
        position: `absolute`,
        right: `5px`,
        transformOrigin: `right`,
      }}
      ref={ref}
    >{children}</div>
  )
}

export default AutoScaleDiv