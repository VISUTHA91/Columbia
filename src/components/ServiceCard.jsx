

const ServiceCard = ({imgURL,label,subtext}) => {
  return (
  
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16  hover:bg-sky-500 hover:ring-sky-500 hover:text-white'>
      <div className='w-11 h-11 flex justify-center items-center bg-coral-red hover:bg-black rounded-full'>
        <img src={imgURL}  width={24} height={24}/>
      </div>
      <div>
        <h2 className='font-palanquin text-3xl'>{label}</h2>
        <p className='mt-3 breal-words font-montserrat'>{subtext}</p>
      
        </div>
    </div>

  )
}

export default ServiceCard