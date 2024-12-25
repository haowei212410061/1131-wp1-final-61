import { useState, useEffect } from 'react'
import Wrapper from '../../../assets/wrappers/Menu_xx'
import menu_data from './menu_data'
import MenuItem_61 from './MenuItem2_61'

const S2Page_61 = () => {
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
              <h2>S2Page: 周浩偉, 212410061</h2>
              <div className='underline'></div>
            </div>
            <div className='btn-container'>
              <button
                type='button'
                className='filter-btn'
                data-id='all'
                onClick={() => {
                  filterData('all')
                }}
              >
                all
              </button>
              <button
                type='button'
                className='filter-btn'
                data-id='breakfast'
                onClick={() => {
                  filterData('breakfast')
                }}
              >
                breakfast
              </button>
              <button
                type='button'
                className='filter-btn'
                data-id='lunch'
                onClick={() => {
                  filterData('lunch')
                }}
              >
                lunch
              </button>
              <button
                type='button'
                className='filter-btn'
                data-id='dessert'
                onClick={() => {
                  filterData('dessert')
                }}
              >
                dessert
              </button>
              <button
                type='button'
                className='filter-btn'
                data-id='shakes'
                onClick={() => {
                  filterData('shakes')
                }}
              >
                shakes
              </button>
            </div>
            <div className='section-center'>
              {menu?.map((item) => {
                const { id, img, title, price, category, descrip } = item
                return (
                  <MenuItem_61
                    key={id}
                    id={id}
                    img={img}
                    title={title}
                    category={category}
                    price={price}
                    descrip={descrip}
                  />
                )
              })}
            </div>
          </section>
        </div>
      </section>
    </Wrapper>
  )
}
export default S2Page_61
