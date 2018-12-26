import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Link } from 'dva/router'
import styles from './styles.less'
import Spinner from '../Spinner'
import Item from '../Item'

const ItemList = ({ loading, items, page, maxPage, activeType, location }) => (
  <>
    <Spinner loading={loading} />
    <div className={styles.nav}>
      {page > 1 ? (
        <Link to={`/${activeType}/${page - 1}`}>&lt; prev</Link>
      ) : (
        <a className={styles.disabled}>&lt; prev</a>
      )}
      <span>{`${page}/${maxPage}`}</span>
      {page > maxPage ? (
        <Link to={`/${activeType}/${page + 1}`}>more &gt;</Link>
      ) : (
        <a className={styles.disabled}>more &gt;</a>
      )}
    </div>
    <ReactCSSTransitionGroup
      transitionName="list"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      <div key={location.pathname} className={styles.list}>
        <ReactCSSTransitionGroup
          transitionName="item"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {items.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </ReactCSSTransitionGroup>
      </div>
    </ReactCSSTransitionGroup>
  </>
)

export default ItemList
