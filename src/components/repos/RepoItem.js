function RepoItem({ repo }) {
  return (
    <div className="card">
      <h3>
        <a href={repo.html_url} rel="noreferrer" target="_blank">
          {repo.name}
        </a>
      </h3>
    </div>
  );
}

export default RepoItem;
