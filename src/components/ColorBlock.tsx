type ColorBlockProps = {
  height: number
  width: number
  color: string
}

const ColorBlock = ({ height, width, color }: ColorBlockProps): JSX.Element => (
  <div style={{ height, width, backgroundColor: color }} />
)

export default ColorBlock
