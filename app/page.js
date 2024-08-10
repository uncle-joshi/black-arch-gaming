import Carousel from "@/Components/Carousel/Carousel";
import Pgcards from "@/Components/GamesCard/PopularGamesCards/Pgcards";

export default function Home() {
  return (
    <section>
      <div className="my-1">
        <Carousel />
      </div>
      <div className="mt-3">
        <div className="text-2xl p-3">POPULAR GAMES</div>
        <div>
          <Pgcards />
        </div>
      </div>
    </section>
  );
}
