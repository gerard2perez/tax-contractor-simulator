import { useState } from 'react'

function useFullScreen () {
  const [fullScreen, setFullScreen] = useState(false)
  const toggleFullScreen = () => {
    // eslint-disable-next-line no-case-declarations
    const element = document.querySelector('body')
    if (fullScreen) {
      // @ts-ignore
      const cancellFullScreen = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen
      cancellFullScreen.call(document)
      setFullScreen(false)
    } else {
      // @ts-ignore
      const requestFullScreen = element.requestFullscreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen
      requestFullScreen.call(element)
      setFullScreen(!fullScreen)
    }
  }
  return { fullScreen, toggleFullScreen }
}

export { useFullScreen }
