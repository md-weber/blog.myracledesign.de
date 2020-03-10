import { Link } from "gatsby"
import React from "react"
import navigationBarStyles from "./navigation-bar.module.css"

const LinkButton = ({ to, text }) => {
  return <li className={navigationBarStyles.navigation__listItem}>
    <Link to={to}>{text}</Link>
  </li>
}

const NavigationBar = () => {
  return <nav>
    <ul className={navigationBarStyles.navigation__list}>
      <LinkButton text={"Home"} to={"/"}/>
      <LinkButton text={"Blog"} to={"/blog/"}/>
    </ul>
  </nav>
}

export default NavigationBar
