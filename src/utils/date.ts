function padding(num: number) {
  return ('0' + num).slice(-2)
}

export const getDateWithTimeString = (date: Date, withTime = false): string => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}${
    withTime ? ` - ${padding(date.getHours())}:${padding(date.getMinutes())}` : ''
  }`
}

export const getShortISODate = (date: string) => {
  return date.split("T").join(" ")
};

export const getTime = (date: string) => {
  return date.split("T")[1].slice(0, 5)
}

export const convertNumberTimeToTextTime = (time: string) => {
  const hour = +Number(time.split(":")[0])
  const minute = +Number(time.split(":")[1])
  const textTime = `${hour !== 0 ? hour + ' ساعت و ' : ''} ${minute !== 0 ? minute + ' دقیقه ' : ''}`
  return minute === 0 ? textTime.replace("و", "") : textTime
}

export const convertRawDateToPersianDate = (rawDate: string) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }

  return new Date(rawDate).toLocaleDateString('fa-IR', options as any)
}

export const convertRawDateToUsDate = (rawDate: string) => {
  const options = { month: 'short', day: 'numeric' }

  return new Date(rawDate).toLocaleDateString('en-US', options as any)
}