

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL} alt="customer" className="rounded-full object-contain w-[100px] h-[100px] bg-slate-300"/>
        <p className="mt- max-w-sm text-center info-text">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.">
            Rating
            <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
        </div>
        <h3 className="mt-1 text-3xl font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard