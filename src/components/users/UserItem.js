import { Link } from "react-router-dom";

function UserItem({ user: { avatar_url, login, html_url } }) {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="img"
        className="round-img"
        style={{ width: "60px" }}
      />

      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          View
        </Link>
      </div>
    </div>
  );
}

export default UserItem;
