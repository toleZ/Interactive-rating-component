import { useState } from "react";
import Stars from "./Stars";

const Card = () => {
  const [isSubmited, setIsSubmited] = useState(false);

  if (isSubmited !== false)
    return (
      <div className="w-96 bg-dark-blue rounded-2xl p-6 flex flex-col justify-center items-center">
        <img
          src="../../public/images/illustration-thank-you.svg"
          alt="illustration-thank-you"
        />

        <div className="py-1 px-4 my-8 rounded-3xl bg-slate-700 font-overpass font-normal text-orange">
          You selected {isSubmited} of 5
        </div>

        <h1 className="text-center font-overpass font-bold text-white text-xl">
          Thank you!
        </h1>
        <p className="text-center font-overpass font-normal text-light-grey mt-2 mb-4">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    );

  return (
    <div className="w-96 bg-dark-blue rounded-2xl p-6">
      <img
        src="../../public/images/icon-star.svg"
        alt="icon-star"
        className="bg-slate-700 rounded-full p-2 mb-6"
      />

      <h1 className="font-overpass font-bold text-white text-xl my-2">
        How did we go?
      </h1>
      <p className="font-overpass font-normal text-light-grey">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <Stars onSubmit={setIsSubmited} />
    </div>
  );
};

export default Card;
