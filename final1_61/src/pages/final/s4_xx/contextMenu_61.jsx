import { useState, useEffect, createContext, useContext } from 'react'
import { toast } from 'react-toastify'
import menu_data from './menu_data'

const MenuContext_61 = createContext()

const MenuContextProvider_61 = ({ children }) => {
  const [menu, setMenu] = useState(menu_data)
  function filterData(category) {
    if (category === 'all') {
      setMenu(menu_data)
      localStorage.setItem('list', JSON.stringify(menu_data))
    } else {
      const newArr = menu_data.filter((item) => item.category === category)
      setMenu(newArr)
      localStorage.setItem('list', JSON.stringify(newArr))
    }
  }
  return (
    <MenuContext_61.Provider value={{ menu, filterData }}>
      {children}
    </MenuContext_61.Provider>
  )
}

const useMenuContext_61 = () => {
  return useContext(MenuContext_61)
}

export { MenuContextProvider_61, useMenuContext_61 }
