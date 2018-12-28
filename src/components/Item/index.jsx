import { Link } from 'dva/router'
import styles from './styles.less'
import { host, timeAgo } from '../../utils/filters'

const Item = ({ item }) => {
  const { score, title, url, type, id, by, descendants, time } = item

  return (
    <li className={styles.normal}>
      <span className={styles.score}>{score}</span>
      <p className={styles.title}>
        {url ? (
          <>
            <a href={url} rel="noopener noreferrer" target="_blank">
              {title}
            </a>
            <span className={styles.host}>( {host(url)} )</span>
          </>
        ) : (
          <Link to={`/item/${id}`}>{title}</Link>
        )}
      </p>

      <p className={styles.meta}>
        {type !== 'job' ? (
          <span className={styles.by}>
            by <Link to={`/user/${by}`}>{by}</Link>
          </span>
        ) : null}
        <span className={styles.time}>{` ${timeAgo(time)}`} ago</span>
        {type !== 'job' ? (
          <span className={styles.commentsLink}>
            <span>{' | '}</span>
            <Link to={`/item/${id}`}>{descendants} comments</Link>
          </span>
        ) : null}
      </p>
      {type !== 'story' ? <span className={styles.label}>{type}</span> : null}
    </li>
  )
}

export default Item
