import { connect } from 'dva'
import styles from './styles.less'
import userSelector from '../../selectors/user'
import Spinner from '../Spinner'
import { timeAgo } from '../../utils/filters'

const renderUser = user => (
  <>
    <h1>User: {user.id}</h1>
    <ul>
      <li>
        <span className={styles.label}>Created: </span>
        <span>{`${timeAgo(user.created)} ago`}</span>
      </li>
      <li>
        <span className={styles.label}>Karma: </span>
      </li>
      {user.about ? (
        <li
          className={styles.about}
          dangerouslySetInnerHTML={{ __html: user.about }}
        />
      ) : null}
    </ul>
    <p className={styles.links}>
      <a
        href={`https://news.ycombinator.com/submitted?id=${user.id}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        submissions
      </a>
      <span> | </span>
      <a
        href={`https://news.ycombinator.com/threads?id=${user.id}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        comments
      </a>
    </p>
  </>
)

const UserPage = ({ loading, user }) => {
  return (
    <div className={styles.normal}>
      <Spinner loading={loading} />
      {user ? renderUser(user) : null}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  loading: state.loading.global,
  ...userSelector(state, ownProps)
})

export default connect(mapStateToProps)(UserPage)
