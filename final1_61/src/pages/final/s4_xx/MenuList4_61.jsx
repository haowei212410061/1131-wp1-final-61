import MenuItem4_61 from './MenuItem4_61'
import { useMenuContext_61 } from './contextMenu_61'
const MenuList3_61 = () => {
  const { menu } = useMenuContext_61()
  return (
    <div className='section-center'>
      {menu?.map((item) => {
        const { id, img, title, price, category, descrip } = item
        return (
          <MenuItem4_61
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
