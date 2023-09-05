import React, { useState } from "react";
import { HomeActiveSvg, HomeInactiveSvg, SearchActiveSvg, SearchInactiveSvg } from "../../assets/svg";
const menuListApi = [
  {
    id: 1,
    name: "Home",
    activeSvg: HomeActiveSvg,
    inActiveSvg: HomeInactiveSvg,
    active: true,

  },
  {
    id: 2,
    name: "Search",
    activeSvg: SearchActiveSvg,
    inActiveSvg: SearchInactiveSvg,
    active: false,
  },
];

const MenuCard = () => {
  const [menuList, setMenuList] = useState(menuListApi);
  const ActiveTab = (index) => {
    const updatedMenuList = menuList.map((item, i) => {
      if (i === index) {
        return { ...item, active: true };
      }
      else {
        return { ...item, active: false };
      }
    });
    setMenuList(updatedMenuList)
  }
  return (

    <div className="bg-[#121212] rounded-lg">
      <ul className="px-3 py-2">{
        menuList && menuList.map((value, index) => {
          const textColor1 = value.active ? 'white' : '[#B3B3B3]';
          return (

            <li key={ index } className={ `text-sm py-1 px-3 flex text-${textColor1} ${value.active ? 'active' : ''}` } >
              <a className="flex gap-5" onClick={ () => ActiveTab(index) } href="#">

                <span className={ `fill-${textColor1} [&>svg]:h-[20px]` }>
                  { value.active ? value.activeSvg : value.inActiveSvg }
                </span>
                { value.name }
              </a>
            </li>
          )
        }

        )
      }</ul>
    </div>

  );
};

export default MenuCard;