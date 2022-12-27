import ContentItem from "./ContentItem";

function Content({ data }) {
  return (
    <div className="content">
      {data.map((item, index) => (
        <ContentItem
          key={item.id}
          number={`0${index + 1}`}
          title={item.title}
          description={item.description}
          thumbnail={item.image}
        />
      ))}
    </div>
  );
}

export default Content;
