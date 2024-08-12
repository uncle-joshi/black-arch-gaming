export const metadata = {
  title: "BLACK-ARCH GAMING/games",
  description: "games page",
};

import CategoriesCarousel from "@/Components/Carousel/CategoriesCarousel";

const Games = () => {
  return (
    <section className="p-5">
      <div>
        <CategoriesCarousel />
      </div>
    </section>
  )
}

export default Games