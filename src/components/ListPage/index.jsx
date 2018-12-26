import { connect } from 'dva'
import { listSelector } from '../../selectors/item'
import ItemList from '../ItemList'

const ListPage = ({ loading, items, page, maxPage, activeType, location }) => (
  <>
    <ItemList
      loading={loading}
      items={items}
      page={page}
      maxPage={maxPage}
      activeType={activeType}
      location={location}
    />
  </>
)

const mapStateToProps = (state, ownProps) => ({
  loading: state.loading.global,
  ...listSelector(state, ownProps)
})

export default connect(mapStateToProps)(ListPage)
