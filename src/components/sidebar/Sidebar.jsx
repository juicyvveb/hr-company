import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Burger from "../burger/Burger";
import s from './Sidebar.module.scss';
import './appear_animation.scss';
import { Button } from "../button/Button";
import { Logo } from "../logo/Logo";
import { Link } from "react-router-dom";
import { drop_menu } from "../../js/dropMenu";
import { NavLink } from "react-router-dom";

export const Sidebar = ({ nav }) => {
  const [sidebar, setSidebar] = useState(false); //скрыт ли сайдбар, как условие для CCSTransition
  const nodeRef = useRef(null); //для CCSTransition

  useEffect(() => {
    drop_menu(s.dropdownLink, `${s['dropdownItem__active']}`);
  })

  return (
    <CSSTransition
      in={sidebar}
      nodeRef={nodeRef}
      timeout={100}
      classNames={'my-node'}
    >
      <div
        id="sidebar"
        className={s.sidebar}
        ref={nodeRef}
        onClick={() => { setSidebar(false) }}
      >
        <div className={`${s['sidebar-content']}`}>
          <div className={s.logo}>
            <Logo />
          </div>
          <ul className={`${s['sidebar-nav']}`}
              onClick={(e) => { e.stopPropagation() }}
          >
            <Burger
              open={sidebar}
              clickBurger={(e) => { setSidebar(!sidebar); }}
            />
            {
              nav.map((el, i) => (
                // элемент меню с выпадающим списком
                <li key={i} className={`${s.dropdownLink} ${s.link}`} > 
                  <a
                    className={s['dropdownLink-item']}
                  >
                    {el}
                  </a>
                  <ul>
                    {
                      [...Array(5)].map((item, k) => (
                        <li key={k}>
                          <NavLink
                            className={({ isActive }) => {
                              return isActive ? s.activeLink : undefined
                            }}
                            to={`/types/${el}/${k + 1}`}
                            onClick={(e) => { e.stopPropagation(); setSidebar(false) }}>
                            {`${el}_${k + 1}`}
                          </NavLink>
                        </li>
                      ))
                    }
                  </ul>
                </li>
              ))
            }
            {/* обычный элемент меню */}
            <li className={s.link} onClick={() => setSidebar(false)}><Link to='pricing'>pricing</Link></li>
            <li className={s.link} onClick={() => setSidebar(false)}><Link to='company'>company</Link></li>
          </ul>

            {/* дополнительные кнопки-ссылки */}
          <div className={`${s['sidebar-subBlock']}`}>
            <div className={`${s['sidebar-subBlock--button']} ${s['sidebar-subBlock--button__signIn']}`}>
              <Link to={'/login'}>
                <Button>sign in</Button>
              </Link>
            </div>
            <div className={`${s['sidebar-subBlock--button']} ${s['sidebar-subBlock--button__request']}`}>
              <Link to={'/demo'}>
                <Button>request demo</Button>
              </Link>
            </div>
          </div>
        </div>



      </div>
    </CSSTransition>
  )
}