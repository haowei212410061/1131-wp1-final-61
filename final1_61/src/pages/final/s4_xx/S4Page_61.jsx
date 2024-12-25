import { useState, useEffect } from 'react'
import Wrapper from '../../../assets/wrappers/Menu_xx'
import FilterButtons4_61 from './FilterButtons4_61'
import MenuList4_61 from './MenuList4_61'

import { MenuContextProvider_61 } from './contextMenu_61'

const S4Page_61 = () => {
  return (
    <MenuContextProvider_61>
      <Wrapper>
        <section className='menu-demo'>
          <div className='section-center'>
            <section className='menu'>
              <div className='title'>
                <h2>S4Page_61: 周浩偉</h2>
                <div className='underline'></div>
              </div>
              <FilterButtons4_61 />
              <MenuList4_61 />
            </section>
          </div>
        </section>
      </Wrapper>
    </MenuContextProvider_61>
  )
}

export default S4Page_61
