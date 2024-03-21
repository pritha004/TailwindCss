const Button = ({label, bgColor,textColor,borderColor}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
    ${bgColor? `${bgColor} ${textColor} ${borderColor}`:` bg-coral-red text-white border-coral-red`}`}>
        {label}
    </button>
  )
}

export default Button