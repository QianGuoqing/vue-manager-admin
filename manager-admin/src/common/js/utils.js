export function formatTime() {
  let time = new Date()
  let year = time.getFullYear()
  let month = addZero(time.getMonth() + 1)
  let day = addZero(time.getDate())
  let hour = addZero(time.getHours())
  let minute = addZero(time.getMinutes())
  let second = addZero(time.getSeconds())
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

function addZero(str) {
  let intStr = parseInt(str)
  if (intStr < 10) {
    return '0' + intStr
  }
  return str
}