import Button from "../components/Button"
import logo from "../../public/vite.svg";

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality
          </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla reprehenderit sunt officiis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam earum iusto commodi.</p>
        <p className="mt-6 lg:max-w-lg info-text">Nulla reprehenderit sunt officiis! Lorem ipsum dolor, sit amet consectetu.</p>
        <div className="mt-11">
         <Button label="View Details"/>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={logo} alt="shoe" width={500} height={300} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality