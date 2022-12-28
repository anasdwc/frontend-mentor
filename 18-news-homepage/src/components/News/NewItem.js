function NewItem({ title, description }) {
  return (
    <div className="news-item">
      <h3>
        <a href="#new">{title}</a>
      </h3>
      <p>{description}</p>
    </div>
  );
}

export default NewItem;
