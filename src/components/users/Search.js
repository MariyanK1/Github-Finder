import { useContext, useState } from "react";

import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

function Search() {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          onChange={onChange}
          value={text}
          placeholder="Search users..."
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
        {githubContext.users.length > 0 ? (
          <button
            className="btn btn-light btn-block"
            onClick={githubContext.clearUsers}
          >
            Clear
          </button>
        ) : null}
      </form>
    </div>
  );
}

export default Search;
