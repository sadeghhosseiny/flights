function padding(num: number) {
  return ('0' + num).slice(-2)
}

export const getDateWithTimeString = (date: Date, withTime = false): string => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}${
    withTime ? ` - ${padding(date.getHours())}:${padding(date.getMinutes())}` : ''
  }`
}

export const getShortISODate = (date: string) => {
  console.log("first", new Date(date))
  return date.split("T").join(" ")
};
