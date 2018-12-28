import NavLink from 'umi/navlink'
import styles from './styles.less'

const Layout = props => (
  <>
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/">
          <img
            className={styles.logo}
            src="https://zos.alipayobjects.com/rmsportal/AsASAiphPWWUJWG.png"
            alt="presentation"
          />
        </NavLink>

        <NavLink activeClassName={styles.active} to="/top">
          Top
        </NavLink>
        <NavLink activeClassName={styles.active} to="/new">
          New
        </NavLink>
        <NavLink activeClassName={styles.active} to="/show">
          Show
        </NavLink>
        <NavLink activeClassName={styles.active} to="/ask">
          Ask
        </NavLink>
        <NavLink activeClassName={styles.active} to="/job">
          Jobs
        </NavLink>

        <span className={styles.github}>
          Built with{' '}
          <a
            rel="noopener noreferrer"
            href="https://github.com/umijs/umi"
            target="_blank"
          >
            Umi
          </a>{' '}
          and{' '}
          <a
            rel="noopener noreferrer"
            href="https://github.com/dvajs/dva"
            target="_blank"
          >
            Dva
          </a>
        </span>
      </div>
    </header>
    <main className={styles.view}>{props.children}</main>
  </>
)

export default Layout
