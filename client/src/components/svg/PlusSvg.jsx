const PlusSvg = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={34}
      height={26}
      fill="none"
      {...props}
    >
      <rect
        width={1.8}
        height={18.571}
        x={16.1}
        y={3.714}
        fill="#898989"
        rx={0.9}
      />
      <rect
        width={1.857}
        height={18}
        x={8}
        y={13.929}
        fill="#898989"
        rx={0.929}
        transform="rotate(-90 8 13.929)"
      />
      <rect width={33} height={25} x={0.5} y={0.5} stroke="#898989" rx={9.5} />
    </svg>
  )
}

export default PlusSvg