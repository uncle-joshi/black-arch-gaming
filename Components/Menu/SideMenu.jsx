import Image from "next/image"
import Logo from "../../public/logo.jpg"

const sideMenu = () => {
  return (
    <section className='w-20 h-screen p-2 border-2 border-[#f51524] rounded-xl'>
      <div className='w-16 h-16'>
        <Image
         src={Logo}
         alt="logo"
         className="w-full h-full cursor-pointer rounded-full"
        />
      </div>
    </section>
  )
}

export default sideMenu