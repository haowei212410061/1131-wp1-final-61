import { useState, useEffect } from 'react'
import Wrapper from '../../../assets/wrappers/Menu_xx'
import menu_data from './menu_data'
import FilterButtons3_61 from './FilterButtons3_61'
import MenuList3_61 from './MenuList3_61'

const S3Page_61 = () => {
  const [menu, setMenu] = useState(menu_data)
  function filterData(category) {
    if (category === 'all') {
      setMenu(menu_data)
    } else {
      const newArr = menu_data.filter((item) => item.category === category)
      setMenu(newArr)
    }
  }

  return (
    <Wrapper>
      <section className='menu-demo'>
        <div className='section-center'>
          <section className='menu'>
            <div className='title'>
              <h2>S3Page: 周浩偉, 212410061</h2>
              <div className='underline'></div>
            </div>
            <FilterButtons3_61 fn={filterData} />

            <MenuList3_61 menu={menu} />
          </section>
        </div>
      </section>
    </Wrapper>
  )
}
export default S3Page_61
