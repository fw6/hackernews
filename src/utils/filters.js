export function host(url) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  const parts = host.split('.').slice(-3)
  if (parts[0] === 'www') parts.shift()
  return parts.join('.')
}

function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }
  return `${time}${label}s`
}

/**
 * Requests a Time Stamp, returning a string.
 *
 * @param  {string|number} time   时间戳
 * @return {string}               格式化3days|5minutes|2hours
 */
export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)

  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  }
  // ~~x x为字符串内数字转数字，true/false转1/0，其他输出0
  return pluralize(~~(between / 86400), ' day')
}
