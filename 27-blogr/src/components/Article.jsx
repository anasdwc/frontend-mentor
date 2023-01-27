function Post({ title, paragraph }) {
  return (
    <div className="px-8 text-center">
      <h3 className="font-overpass text-2xl font-[600] text-very-dark-blue">
        {title}
      </h3>
      <p className="mt-4 mb-8 font-[300] leading-relaxed text-very-dark-grayish-blue opacity-80">
        {paragraph}
      </p>
    </div>
  );
}

function ArticleOne() {
  return (
    <section className="my-24 flex flex-col items-center">
      <div>
        <h2 className="text-center font-overpass text-2xl font-[600] text-very-dark-blue">
          Designed for the future
        </h2>
        <img
          src="./images/illustration-editor-mobile.svg"
          alt=""
          className="my-12 w-full"
        />
      </div>
      <Post
        title="Introducing an extensible editor"
        paragraph="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog"
      />
      <Post
        title="Robust content management"
        paragraph="Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control"
      />
    </section>
  );
}

function ArticleTwo() {
  return (
    <section className="my-12 flex flex-col items-center">
      <div>
        <img
          src="./images/illustration-laptop-mobile.svg"
          alt=""
          className="my-12 w-full"
        />
      </div>
      <Post
        title="Free, open, simple"
        paragraph="Blogr is a free and open source application backend by a large community of helpful developers. It supports features such as code syntax highlighting. RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn"
      />
      <Post
        title="Powerful tooling"
        paragraph="Batteries included. We built a simple and straighforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites."
      />
    </section>
  );
}

export { ArticleOne, ArticleTwo };
