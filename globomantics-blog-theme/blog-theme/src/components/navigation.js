import React from 'react'
import { Link } from 'gatsby'
import * as styles from './navigation.module.css'

export default (props) => (
  <nav role="navigation" {...props}>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/blog">All Posts</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/glossary">Glossary</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/">Robotics</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/">Media</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/">Support</Link>
      </li>
    </ul>
  </nav>
)
