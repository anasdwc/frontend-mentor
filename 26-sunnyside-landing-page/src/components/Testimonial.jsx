import React from "react";

function TestimonialItem({ image, username, message, job }) {
  return (
    <div className="item my-16 mx-4 flex flex-col items-center">
      <div>
        <img className="w-16 rounded-full" src={`./images/${image}`} alt="" />
      </div>
      <div className="text-center text-very-dark-grayish-blue">
        <div>
          <p className="my-8 text-base leading-relaxed">{message}</p>
        </div>
        <div>
          <h4 className="font-['Fraunces'] text-lg text-very-dark-desaturated-blue">
            {username}
          </h4>
          <p className="pt-1 text-sm text-grayish-blue">{job}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonial() {
  return (
    <section className="px-4 py-6 md:mx-auto md:max-w-7xl md:py-20">
      <h3 className="text-center font-['Fraunces'] text-base uppercase tracking-[.3rem] text-dark-grayish-blue">
        Client Testimonials
      </h3>
      <div className="testimonial-list md:grid md:grid-cols-3">
        <TestimonialItem
          message="We put our trust in Sunnyside and they delivered, making sure our
          needs were met and deadlines were always hit."
          image="image-emily.jpg"
          username="Emily R."
          job="Marketing Director"
        />
        <TestimonialItem
          message="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
          username="Thomas S."
          job="Chief Operating Officer"
          image="image-thomas.jpg"
        />
        <TestimonialItem
          message="Increadible and result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          username="Jennie F."
          job="Bussiness Owner"
          image="image-jennie.jpg"
        />
      </div>
    </section>
  );
}
