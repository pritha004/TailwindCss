import Button from "../components/Button"
import logo from "../../public/vite.svg";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex flex-1 justify-center items-center">
        <img src={logo} alt="shoe" width={500} height={300} className="object-contain"/>
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
           <span className="text-coral-red">Special
          </span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla reprehenderit sunt officiis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam earum iusto commodi.</p>
        <p className="mt-6 lg:max-w-lg info-text">Nulla reprehenderit sunt officiis! Lorem ipsum dolor, sit amet consectetu.</p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button label="Shop now" />
          <Button label="Learn more" bgColor="bg-white" borderColor="border-slate-gray" textColor="text--slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer