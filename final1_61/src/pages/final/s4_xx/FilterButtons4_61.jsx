import { useMenuContext_61 } from './contextMenu_61'
const FilterButtons3_61 = () => {
  const { filterData } = useMenuContext_61()
  return (
    <div className='btn-container'>
      <button
        type='button'
        className='filter-btn'
        data-id='all'
        onClick={() => filterData('all')}
      >
        all
      </button>
      <button
        type='button'
        className='filter-btn'
        data-id='breakfast'
        onClick={() => filterData('breakfast')}
      >
        breakfast
      </button>
      <button
        type='button'
        className='filter-btn'
        data-id='lunch'
        onClick={() => filterData('lunch')}
      >
        lunch
      </button>
      <button
        type='button'
        className='filter-btn'
        data-id='dessert'
        onClick={() => filterData('dessert')}
      >
        dessert
      </button>
      <button
        type='button'
        className='filter-btn'
        data-id='shakes'
        onClick={() => filterData('shakes')}
      >
        shakes
      </button>
    </div>
  )
}
export default FilterButtons3_61
