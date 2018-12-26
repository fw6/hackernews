export default (state, ownProps) => ({
  user: state.user.usersById[ownProps.match.params.userId]
})
