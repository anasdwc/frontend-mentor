function ContentItem({ thumbnail, altThumb, number, title, description }) {
  return (
    <div className="content-item">
      <div className="content-item__thumbnail">
        <img src={thumbnail} alt={altThumb} />
      </div>
      <div className="content-item__body">
        <h3>
          <span className="number">{number}</span>
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ContentItem;
