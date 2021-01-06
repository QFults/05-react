import { useState } from 'react'
import Navbar from './components/Navbar'
import Drwr from './components/Drawer'

const App = () => {

  const [drawerState, setDrawerState] = useState({
    left: false
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  }

  return (
    <>
      <Navbar
        toggleDrawer={toggleDrawer} />
      <Drwr
        drawerState={drawerState}
        toggleDrawer={toggleDrawer} />
    </>
  )
}

export default App
