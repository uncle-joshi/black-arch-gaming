export const metadata = {
  title: "BLACK-ARCH GAMING/games",
  description: "games page",
};

import CategoriesCarousel from "@/Components/Carousel/CategoriesCarousel";

const Games = () => {
  return (
    <section className="p-2">
      <div>
        <CategoriesCarousel />
      </div>
    </section>
  )
}

export default Games