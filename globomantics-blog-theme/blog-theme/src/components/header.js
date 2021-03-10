import React from 'react'
import { Link } from 'gatsby'
import Container from './container'
import Navigation from './navigation'
import styles from './header.module.css'
import logo from './logo.svg'
import avatar from './avatar.svg'

const Search = () => (
  <div className={styles.search}>
    <button type="submit"><i className="fa fa-search"></i></button>
    <input type="text" placeholder="Search" />
  </div>
)

const Divider = () => (
  <div className={styles.divider}></div>
)

const SignInButton = () => (
  <div className={styles.signInButton}>
    <a href="#">
      <img src={avatar} alt="sign in" />
      Sign-in
    </a>
  </div>
)

export default () => (
  <div className={styles.wrapper}>
    <Container className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="logo" />
      </Link>
      <span className={styles.tagline}>ENGINEERING BLOGS</span>
      <div className={styles.middle}>
        <Search />
        <Navigation className={styles.navigation} />
      </div>
      <div className={styles.end}>
        <Divider />
        <SignInButton />
      </div>
    </Container>
  </div>
)
