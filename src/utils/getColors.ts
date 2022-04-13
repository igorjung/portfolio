export default function getColor(lvl:number) {
  switch (lvl) {
    case 1:
      return '#D98D62'
    case 2:
      return '#BFBFBF'
    case 3:
      return '#F2D022'
    default:
      return 'black'
  }
}
