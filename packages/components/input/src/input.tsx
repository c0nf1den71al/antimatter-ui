export default function Input({type, placeholder}) {

  return (
    <input className="px-2 py-1 rounded outline-none text-black border border-black" type={type} placeholder={placeholder}/>
  )
}