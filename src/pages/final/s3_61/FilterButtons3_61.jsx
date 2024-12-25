const FilterButtons3_61 = ({ fn }) => {
  return (
    <div className='btn-container'>
      <button
        type='button'
        className='filter-btn'
        data-id='all'
        onClick={() => fn('all')}
      >
        all
      </button>
      <button
        type='button'
        className='filter-btn'
        data-id='breakfast'
        onClick={() => fn('breakfast')}
      >
        breakfast
      </button>
      <button
        type='button'
        className='filter-btn'
        data-id='lunch'
        onClick={() => fn('lunch')}
      >
        lunch
      </button>
      <button
        type='button'
        className='filter-btn'
        data-id='dessert'
        onClick={() => fn('dessert')}
      >
        dessert
      </button>
      <button
        type='button'
        className='filter-btn'
        data-id='shakes'
        onClick={() => fn('shakes')}
      >
        shakes
      </button>
    </div>
  )
}
export default FilterButtons3_61
