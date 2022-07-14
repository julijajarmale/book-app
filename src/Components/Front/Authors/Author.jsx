function Author({ author }) {
  return (
    <li className="list-item">
      <div className="item author-pic">
        {author.picture ? (
          <div className="photo-bin">
            <img src={author.picture} alt={author.name} />
          </div>
        ) : null}
      </div>
      <div className="content">
        <span className="item">{author.name}</span>
        <span className="item">{author.surname}</span>
      </div>
    </li>
  );
}

export default Author;
