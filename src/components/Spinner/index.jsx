import classnames from 'classnames'
import styles from './styles.less'

export default ({ loading }) => {
  const svgCls = classnames({
    [styles.spinner]: true,
    [styles.show]: loading
  })

  return (
    <>
      <svg className={svgCls} width="44px" height="44px" viewBox="0 0 44 44">
        <circle
          className={styles.path}
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          cx="22"
          r="20"
        />
      </svg>
    </>
  )
}
