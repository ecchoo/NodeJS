const MinusSvg = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={34}
      height={26}
      fill="none"
      {...props}
    >
      <rect
        width={1.5}
        height={15}
        x={9.5}
        y={13.5}
        fill="#898989"
        rx={0.75}
        transform="rotate(-90 9.5 13.5)"
      />
      <rect width={33} height={25} x={0.5} y={0.5} stroke="#898989" rx={9.5} />
    </svg>
  )
}

export default MinusSvg