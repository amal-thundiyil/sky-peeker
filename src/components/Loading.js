import loading from "../images/loading.gif";

const Loading = () => {
  return (
    <section className="loader">
      <div>
        <img src={loading} alt="loading" />
      </div>
    </section>
  );
};

export default Loading;
