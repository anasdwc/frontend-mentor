import NewItem from "./NewItem";

function News({ data }) {
  return (
    <div className="news">
      <h2>New</h2>
      <div className="news__list">
        {data.map((item) => (
          <NewItem
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default News;
