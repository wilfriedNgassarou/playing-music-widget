export function formatDuration(number: number) {
  const minutes = Math.floor(number / 60)
  const seconds = number - (minutes * 60);

  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}