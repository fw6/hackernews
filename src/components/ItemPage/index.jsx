import { Link } from 'dva/router'
import { connect } from 'dva'
import styles from './styles.less'
import { itemSelector } from '../../selectors/item'
import Spinner from '../Spinner'
import { host, timeAgo } from '../../utils/filters'
import Comment from '../Comment'

const ItemPage = ({ loading, item, itemsById }) => (
  <>
    {item ? (
      <div>
        <Spinner loading={loading} />
        <div className={styles.header}>
          <a href={item.url}>
            <h1>{item.title}</h1>
          </a>

          {item.url ? (
            <span className={styles.host}>{host(item.url)}</span>
          ) : null}

          <p className={styles.meta}>
            <span>{`${item.score} points | by `}</span>
            <Link to={`/user/${item.by}`}>{item.by}</Link>
            <span>{` ${timeAgo(item.time)} ago`}</span>
          </p>
        </div>

        <div className={styles.comments}>
          <p className={styles.commentsHeader}>
            {item.kids ? `${item.descendants} comments` : 'No comments yet.'}
          </p>
          <div className={styles.commentChildren}>
            {item.kids
              ? item.kids.map(id => (
                  <Comment key={id} id={id} itemsById={itemsById} />
                ))
              : null}
          </div>
        </div>
      </div>
    ) : null}
  </>
)

const mapStateToProps = (state, ownProps) => ({
  loading: state.loading.global,
  ...itemSelector(state, ownProps)
})

export default connect(mapStateToProps)(ItemPage)
