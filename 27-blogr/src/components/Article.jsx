import clsx from "clsx";

function Post({ title, paragraph, extendedClass }) {
  return (
    <div
      className={clsx(
        "px-8 text-center md:text-left",
        extendedClass && extendedClass
      )}
    >
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
    <section className="my-24 flex flex-col items-center md:relative md:my-44 md:grid md:grid-cols-2 md:grid-rows-[.5fr_1fr_1fr] md:gap-y-8 md:px-44">
      <h2 className="text-center font-overpass text-2xl font-[600] text-very-dark-blue md:col-span-full md:mb-12 md:text-4xl">
        Designed for the future
      </h2>
      <picture className="md:relative md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-4">
        <source
          media="(min-width: 768px)"
          srcset="./images/illustration-editor-desktop.svg"
        />
        <img
          src="./images/illustration-editor-mobile.svg"
          alt=""
          className="my-12 w-full md:absolute md:inset-y-0 md:left-20 md:my-auto md:min-w-[60rem]"
        />
      </picture>
      <Post
        title="Introducing an extensible editor"
        paragraph="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog"
      />
      <Post
        title="Robust content management"
        paragraph="Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control"
        extendedClass="md:col-start-1 md:col-end-2"
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
