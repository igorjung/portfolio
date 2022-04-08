export default function getColor(lvl:number) {
  switch (lvl) {
    case 1:
      return 'orange'
    case 2:
      return 'gray'
    case 3:
      return 'yellow'
    default:
      return 'blac'
  }
}
