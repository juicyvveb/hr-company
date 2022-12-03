import React, { useEffect, useRef } from "react";
import s from './Header.module.scss';
import { Logo } from "../logo/Logo";
import { Link as NavbarLink } from '../links/Link';
import { Button } from "../button/Button";
import { drop_menu } from "../../js/dropMenu";
import { disappear } from "./appear";
import { Link, NavLink } from "react-router-dom";


export const Header = ({ nav }) => {
  const headerRef = useRef(null)
  useEffect(() => {
    drop_menu(s.dropdownItem, `${s['dropdownItem__active']}`)
    disappear(headerRef, s['header__disappear'])
  })

  return (
    <div className={`${s.header} wrap`} ref={headerRef}>
      <div className={`${s['header-logo']}`}>
        <Logo />
      </div>
      <ul className={`${s['header-nav']}`}>
        {
          nav.map((el, i) => (
            <li key={i} className={s.dropdownItem}>
              <NavbarLink
                onClick={(e) => { e.preventDefault(); e.stopPropagation() }}
                address={`/${el}`}
              >
                {el}
              </NavbarLink>
              <ul>
                {
                  [...Array(5)].map((item, k) => (
                    <li key={k}>
                      <NavLink
                        className={({ isActive }) => {
                          return isActive ? s.activeLink : undefined
                        }}
                        to={`/types/${el}/${k + 1}`}
                        onClick={(e) => e.stopPropagation()}>
                        {`${el}_${k + 1}`}
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
            </li>
          ))
        }
        <li className={s.dropdownItem}> <Link to='pricing'>pricing</Link></li>
        <li className={s.dropdownItem}><Link to='company'>company</Link></li>
      </ul>

      <div className={`${s['header-subBlock']}`}>
        <div className={`${s['header-subBlock--button']} ${s['header-subBlock--button__signIn']}`}>
          <Link to={'/login'}>
            <Button>sign in</Button>
          </Link>
        </div>
        <div className={`${s['header-subBlock--button']} ${s['header-subBlock--button__request']}`}>
          <Link to={'/demo'}>
            <Button>request demo</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}