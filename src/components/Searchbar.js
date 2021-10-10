import { useState } from "react/cjs/react.development";
import { useGlobalContext } from "../context";

const Searchbar = () => {
  const { setSearchTerm, currLocation } = useGlobalContext();
  const [inputText, setInputText] = useState(currLocation);

  const handleChange = (value) => {
    setInputText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText) setSearchTerm(inputText);
    else alert("Please enter a non-empty value.");
    setInputText("");
  };

  return (
    <form
      className="search-container"
      autoComplete={"off"}
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type="text"
        name="search-text"
        id="search-text"
        placeholder="Enter desired location"
        value={inputText}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button type="submit" className="add-btn btn">
        add
      </button>
    </form>
  );
};

export default Searchbar;
