import React from "react";
import { IoMdStar } from "react-icons/io";

const review = [
  {
    rate: 5,
    rateInPercent: "w-[58%]",
    review: 658,
  },
  {
    rate: 4,
    rateInPercent: "w-[78%]",
    review: 800,
  },
  {
    rate: 3,
    rateInPercent: "w-[32%]",
    review: 458,
  },
  {
    rate: 2,
    rateInPercent: "w-[10%]",
    review: 68,
  },
  {
    rate: 1,
    rateInPercent: "w-[20%]",
    review: 121,
  },
];

const ProductReview = () => {
  return (
    <div>
      <section className="bg-white py-8 antialiased dark:bg-gray-800 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 border-b dark:border-gray-700">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Reviews
            </h2>
            <div className="mt-2 flex items-center gap-2 sm:mt-0">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((rate) => (
                  <IoMdStar key={rate} className="text-yellow-500 text-xl" />
                ))}
              </div>
              <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                (4.6)
              </p>
              <a
                href="#"
                className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
              >
                {" "}
                645 Reviews{" "}
              </a>
            </div>
          </div>
          <div className="my-6 gap-8 sm:flex sm:items-start md:my-8">
            <div className="shrink-0 space-y-4">
              <p className="text-2xl font-semibold leading-none text-gray-900 dark:text-white">
                4.65 out of 5
              </p>
              <button
                type="button"
                data-modal-target="review-modal"
                data-modal-toggle="review-modal"
                className="mb-2 me-2 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Write a review
              </button>
            </div>
            <div className="mt-6 min-w-0 flex-1 space-y-3 sm:mt-0">
              {review.map((review, index) => (
                <div key={index} className="flex items-center gap-2">
                  <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                    {review.rate}
                  </p>
                  <IoMdStar className="text-yellow-500" />
                  <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className={`h-1.5 ${review.rateInPercent} rounded-full bg-yellow-300`} />
                  </div>
                  <a
                    href="#"
                    className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left"
                  >
                    {review.review} <span className="hidden sm:inline">reviews</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductReview;
