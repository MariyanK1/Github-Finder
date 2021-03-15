import RepoItem from "./RepoItem";

function Repos({ repos }) {
  return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
}

export default Repos;
