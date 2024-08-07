import Carousel from "@/Components/Carousal/Carousel";
import Pgcards from "@/Components/GamesCard/PopularGamesCards/Pgcards";

export default function Home() {
  return (
    <section>
      <div className="my-1">
        <Carousel />
      </div>
      <div className="my-1">
        <h1>POPULAR GAMES</h1>
        <div>
          <Pgcards />
        </div>
      </div>
    </section>
  );
}
