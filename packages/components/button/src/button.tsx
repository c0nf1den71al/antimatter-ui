export default function Button({ children, varient }) {

  const classes = {
    default: "bg-black text-white"
  }

  return (
    <button className={`px-2 py-1 rounded ${classes.default}`}>{children}</button>
  )
}