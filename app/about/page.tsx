import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="mx-20 pt-12 grid gap-20 grid-cols-2">
        <Image
          src={"/yellow-bow.jpeg"}
          width="800"
          height="1000"
          alt="big left foreground"
        />
        <div>
          <h1 className="text-9xl">About us.</h1>
          <div className="grid grid-cols-2 gap-20 mt-8">
            <p className="text-lg ">
              Cillum amet eu voluptate cupidatat ex irure excepteur incididunt
              Lorem eu deserunt. Nisi duis ex dolore enim mollit dolore laboris
              qui mollit proident veniam ad. Occaecat velit ad ad anim tempor
              cupidatat nulla ad nulla sit quis elit.
            </p>
            <div>
              <p className="text-sm font-light">
                Minim est incididunt elit nulla voluptate pariatur irure dolore
                enim voluptate incididunt. Ea amet et ad laborum et est
                consectetur eiusmod eiusmod minim ea duis eu est. Sunt ex
                commodo esse aute et sint sunt esse incididunt commodo commodo.
                Voluptate Lorem minim aliqua laborum tempor deserunt incididunt
                pariatur ad non incididunt.
              </p>
              <p className="mt-12 text-sm font-light">
                Reprehenderit do ullamco esse velit consequat et. Sunt id aliqua
                nisi ullamco dolore aliquip elit amet. Non consectetur labore ea
                mollit aliqua ex velit voluptate ipsum commodo nulla minim.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-12" />
      <div className="grid pb-12 grid-cols-2 gap-12 mx-auto text-center mt-12 w-1/2">
        <div>
          <p>Headshot Image</p>
          <h1 className="font-medium text-3xl">Karen Head</h1>
          <p className="mt-8">
            Cillum dolore deserunt do reprehenderit labore ipsum aliqua
            reprehenderit. Veniam non ipsum deserunt in fugiat elit excepteur
            Lorem laboris nisi reprehenderit nulla. Consequat quis sint qui
            exercitation nostrud culpa exercitation irure sint commodo nulla.
            Deserunt incididunt dolore sunt irure irure elit do veniam.
          </p>
        </div>
        <div>
          <p>Headshot Image</p>
          <h1 className="font-medium text-3xl">Jill Lastname</h1>
          <p className="mt-8">
            Aute anim ut qui anim cupidatat. Excepteur officia veniam pariatur
            fugiat eu exercitation. Tempor nulla officia veniam esse labore
            dolor consectetur id commodo ullamco cillum velit. Dolor sunt eu
            pariatur fugiat est pariatur. Consequat laborum exercitation
            exercitation tempor esse reprehenderit ad voluptate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
