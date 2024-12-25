import MenuItem3_61 from './MenuItem3_61'

const MenuList3_61 = ({ menu }) => {
  return (
    <div className='section-center'>
      {menu?.map((item) => {
        const { id, img, title, price, category, descrip } = item
        return (
          <MenuItem3_61
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
  )
}
export default MenuList3_61
