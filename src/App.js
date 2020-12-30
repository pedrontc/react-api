import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState();

  const hendleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
    fetch(`https://api.github.com/users/${search}`)
      .then((response) => response.json())
      .then((userResponse) => setUserData(userResponse));
  };

  console.log(userData);

  const hendleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">Github Profile</h1>
      <form onSubmit={hendleSubmit}>
        <div className="form-group">
          <label>Github user</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              required
              value={search}
              onChange={hendleChange}
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">
                Search
              </button>
            </span>
          </div>
        </div>
      </form>
      <div className="py-5">
        {!userData && (
          <img
            src="https://github.githubassets.com/images/modules/open_graph/github-mark.png"
            alt=""
            className="responsive rounded-circle"
            height="200px"
          />
        )}
        {userData && (
          <div>
            <img
              src={userData.avatar_url}
              alt=""
              className="responsive rounded-circle"
              height="200px"
            />
            <h1 className="pt-3">
              <a href="https://github.com/pedrontc" target="_blank">
                {userData.name}
              </a>
            </h1>
            <h3>{userData.location}</h3>
            <p>
              <a href={userData.blog} target="_blank" className="text-info">
                {userData.blog}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
