import React from "react";

const CallToAction = () => {
  return (
    <section
      className="bg-cover bg-center relative py-32"
      style={{ backgroundImage: 'url("./other-bg.jpg")' }}
    >
      <div className="grid grid-cols-3 m-auto ml-40">
        <div>
          <h1 className="pt-12 text-5xl">100% Pure Handmade Soap</h1>
          <p className="text-lg mt-8 font-light">
            Our range of high-quality essential oils has been hand-picked by our
            scent specialists.
          </p>
          <p className="border-2 border-black px-6 py-4 mt-4 w-fit text-lg font-light">
            Shop Now
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
