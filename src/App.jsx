import './App.css'
import Mobile from './mobile'
import Desktop from './desktop'

function App() {

  let render 

  const widthWin = document.documentElement.clientWidth

  if (widthWin < 768) {
    render = <Mobile />
  }else {
    render = <Desktop />
  }
  return (
    <>
      {render}
    </>
  )
}

export default App
