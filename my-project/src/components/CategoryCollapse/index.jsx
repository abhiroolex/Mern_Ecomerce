import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FiMinusSquare } from "react-icons/fi";
import { FaRegSquarePlus } from "react-icons/fa6";

const CategoryCollapse = ({ categories }) => {
  const [submenuOpen, setSubmenuOpen] = useState({});
  const [innerMenuOpen, setInnerMenuOpen] = useState({});

  const toggleSubmenu = (index) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleInnerMenu = (parentIndex, index) => {
    setInnerMenuOpen((prev) => ({
      ...prev,
      [`${parentIndex}-${index}`]: !prev[`${parentIndex}-${index}`],
    }));
  };

  return (
    <div className="scroll">
      <ul className="w-full">
        {categories.map((cat, i) => {
          const hasSubcategories = cat.subcategories && cat.subcategories.length > 0;
          const hasItems = cat.items && cat.items.length > 0;

          return (
            <li key={i} className="list-none flex flex-col relative">
              <Button
                className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]"
                onClick={() => (hasSubcategories || hasItems) && toggleSubmenu(i)}
              >
                {cat.title}
              </Button>

              {(hasSubcategories || hasItems) &&
                (submenuOpen[i] ? (
                  <FiMinusSquare
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => toggleSubmenu(i)}
                  />
                ) : (
                  <FaRegSquarePlus
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => toggleSubmenu(i)}
                  />
                ))}

              {submenuOpen[i] && hasSubcategories && (
                <ul className="submenu w-full pl-3">
                  {cat.subcategories.map((sub, j) => {
                    const subHasItems = sub.items && sub.items.length > 0;

                    return (
                      <li key={j} className="list-none relative mb-2">
                        <Button
                          className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]"
                          onClick={() => subHasItems && toggleInnerMenu(i, j)}
                        >
                          {sub.title}
                        </Button>

                        {subHasItems &&
                          (innerMenuOpen[`${i}-${j}`] ? (
                            <FiMinusSquare
                              className="absolute top-[10px] right-[15px] cursor-pointer"
                              onClick={() => toggleInnerMenu(i, j)}
                            />
                          ) : (
                            <FaRegSquarePlus
                              className="absolute top-[10px] right-[15px] cursor-pointer"
                              onClick={() => toggleInnerMenu(i, j)}
                            />
                          ))}

                        {subHasItems && innerMenuOpen[`${i}-${j}`] && (
                          <ul className="inner_submenu w-full pl-3">
                            {sub.items.map((item, k) => (
                              <li key={k} className="list-none relative mb-2">
                                <Link
                                  to="/"
                                  className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}

              {submenuOpen[i] && hasItems && !hasSubcategories && (
                <ul className="inner_submenu w-full pl-3">
                  {cat.items.map((item, k) => (
                    <li key={k} className="list-none relative mb-2">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryCollapse;
