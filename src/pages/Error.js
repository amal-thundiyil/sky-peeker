import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section className="section">
        <div className="section-center">
          <h1>Error Occured... Oooooooooops! </h1>
          <h6>...i did it again :)</h6>
          <Link to="/" className="btn">
            Back Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default Error;
