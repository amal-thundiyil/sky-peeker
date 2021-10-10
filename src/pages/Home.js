import Searchbar from "../components/Searchbar";
import LocationList from "../components/LocationList";

const Home = () => {
  return (
    <>
      <section className="container">
        <Searchbar />
        <LocationList />
      </section>
    </>
  );
};

export default Home;
