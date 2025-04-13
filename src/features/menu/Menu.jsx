import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log('menu', menu);
  return <ul>
    {menu.map((item) => (
      <MenuItem
        key={item.id}
        pizza={item}
      />
    ))}
  </ul>;
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
