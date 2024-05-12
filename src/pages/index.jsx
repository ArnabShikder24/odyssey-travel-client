import RootLayout from "@/components/RootLayout";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="container mx-auto mb-24 grid grid-cols-1 lg:grid-cols-2 items-center justify-items-end px-20"
      >
        <div>
          <h1 className="font-semibold text-4xl md:text-6xl text-center lg:text-left">
            Your Trusted Destination For <span className="text-[#8338ec]">Apple</span> Products
          </h1>
          <Image
            src={"/png/iphoneBanner.png"}
            width={450}
            height={540}
            alt="hero section"
            className="lg:hidden mx-auto my-8"
          />
          <p className="paragraph text-center lg:text-left my-8">
          Apple Inc., with its headquarters in Cupertino, California, was established on April 1, 1976. They plan, build and market applications and internet services for electronic devices. It is known as one of the world's Top Four technology enterprises. Adds a new chapter of Apple Mobile. Through their creative goods and services, they still impress and amaze the world.

          It was limited only to California when the Apple Company began its journey, but today it is the most profitable company in history.
          </p>

          <button className="py-3 px-6 bg-[#8338ec] text-white rounded font-bold capitalize block mx-auto lg:m-0">
            get in touch
          </button>
        </div>
        <Image
          src={"/png/iphoneBanner.png"}
          width={450}
          height={540}
          alt="hero section"
          className="hidden lg:block"
        />
      </section>

      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div className="pr-12 sm:pr-0">
              <div className="relative max-w-xs mb-12">
                <img
                  className="object-bottom rounded-md"
                  src="https://images.unsplash.com/photo-1687170468710-bc75e9d8a9cb?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12"
                  src="https://images.unsplash.com/photo-1695322353008-fb6647b1cf4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Grow business with Celebration.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-end justify-between">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Latest from blog
              </h2>
              <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-3">
              <button
                type="button"
                className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                type="button"
                className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-5">
                <div className="relative">
                  <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                    <img
                      className="object-cover w-full h-full"
                      src="https://images.unsplash.com/photo-1609334761848-77b4d1994040?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </a>

                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                      {" "}
                      Lifestyle{" "}
                    </span>
                  </div>
                </div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                  {" "}
                  March 21, 2020{" "}
                </span>
                <p className="mt-5 text-2xl font-semibold">
                  <a href="#" title="" className="text-black">
                    {" "}
                    iPhone 15, iPhone 15 Plus, iPhone 15 Pro, and iPhone 15 Pro.{" "}
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                >
                  Continue Reading
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-5">
                <div className="relative">
                  <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                    <img
                      className="object-cover w-full h-full"
                      src="https://images.unsplash.com/photo-1612631656340-ad1e06d3a0de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </a>

                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                      {" "}
                      Marketing{" "}
                    </span>
                  </div>
                </div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                  {" "}
                  April 04, 2020{" "}
                </span>
                <p className="mt-5 text-2xl font-semibold">
                  <a href="#" title="" className="text-black">
                    {" "}
                    * Pricing for iPhone 15 and iPhone 15 Plus includes a $30
                    connectivity.{" "}
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                >
                  Continue Reading
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-5">
                <div className="relative">
                  <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                    <img
                      className="object-cover w-full h-full"
                      src="https://images.unsplash.com/photo-1596093016845-79eec1ad888a?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </a>

                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                      {" "}
                      Productivity{" "}
                    </span>
                  </div>
                </div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                  {" "}
                  May 12, 2020{" "}
                </span>
                <p className="mt-5 text-2xl font-semibold">
                  <a href="#" title="" className="text-black">
                    {" "}
                    To use Apple Pay, you need a supported card from a
                    participating card issuer.{" "}
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                >
                  Continue Reading
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
            <button
              type="button"
              className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              type="button"
              className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h4 className="text-xl font-medium text-gray-900">
              Numbers tell the hard works we’ve done in last 6 years
            </h4>
          </div>

          <div className="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-12 h-12 text-fuchsia-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold text-gray-900">6+</h4>
                    <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                      Years in business
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-12 h-12 text-fuchsia-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold text-gray-900">37+</h4>
                    <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                      Team members
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-12 h-12 text-fuchsia-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold text-gray-900">3,274</h4>
                    <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                      Projects delivered
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-12 h-12 text-fuchsia-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold text-gray-900">98%</h4>
                    <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                      Customer success
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              What our customers say
            </h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col bg-white border border-gray-200 rounded-md shadow-lg">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “The iPhone 13 Pro Max is a game-changer! The camera
                      quality is unmatched, the battery life lasts all day, and
                      the performance is lightning-fast. Apple continues to
                      raise the bar with each new release.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-1.jpg"
                      alt=""
                    />
                    <div className="ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Devon Lane
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        President of Sales
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-gray-200 rounded-md shadow-lg">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “I'm absolutely blown away by the performance of the new
                      MacBook Air with the M1 chip. It's unbelievably fast,
                      incredibly lightweight, and the battery life is
                      phenomenal. Apple has truly redefined what a laptop can
                      be.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-2.jpg"
                      alt=""
                    />
                    <div className="min-w-0 ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Ronald Richards
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        Marketing Coordinator
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-gray-200 rounded-md shadow-lg">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “The iPad Pro is hands down the best tablet I&apos;ve ever
                      owned. The Liquid Retina XDR display is stunning, the
                      processing power is unmatched, and the Apple Pencil
                      integration is seamless. It's the perfect tool for both
                      work and play."”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-3.jpg"
                      alt=""
                    />
                    <div className="min-w-0 ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Jane Cooper
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        Dog Trainer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-gray-200 rounded-md shadow-lg">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “AirPods Pro are a game-changer for anyone who loves music
                      or podcasts. The sound quality is exceptional, the noise
                      cancellation is top-notch, and they&apos;re incredibly
                      comfortable to wear for extended periods. Apple knocked it
                      out of the park with these.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-4.jpg"
                      alt=""
                    />
                    <div className="min-w-0 ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Theresa Webb
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        Web Designer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-gray-200 rounded-md shadow-lg">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “The Apple Watch Series 7 is a must-have accessory for
                      anyone leading an active lifestyle. The larger display is
                      gorgeous, the fitness tracking features are comprehensive,
                      and having access to notifications right on my wrist is
                      incredibly convenient. It&apos;s like having a personal
                      assistant with me wherever I go.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-5.jpg"
                      alt=""
                    />
                    <div className="min-w-0 ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Darlene Robertson
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        Medical Assistant
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-gray-200 rounded-md shadow-lg">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “I recently upgraded to the 16-inch MacBook Pro with the
                      M1 Pro chip, and I'm absolutely thrilled with it. The
                      display is stunning, the performance is blazing fast, and
                      the battery life is impressive for a laptop of this
                      caliber. Apple has once again delivered a powerhouse for
                      professionals.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-6.jpg"
                      alt=""
                    />
                    <div className="min-w-0 ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Floyd Miles
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        Nursing Assistant
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <div className="flow-root mt-12 sm:mt-16">
            <div className="divide-y divide-gray-200 -my-9">
              <div className="py-9">
                <p className="text-xl font-semibold text-black">
                  How to create an account?
                </p>
                <p className="mt-3 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
                <p className="mt-3 text-base text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="py-9">
                <p className="text-xl font-semibold text-black">
                  What payment method do you support?
                </p>
                <p className="mt-3 text-base text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Ut enim ad minim veniam.
                </p>
              </div>

              <div className="py-9">
                <p className="text-xl font-semibold text-black">
                  What payment method do you support?
                </p>
                <p className="mt-3 text-base text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="py-9">
                <p className="text-xl font-semibold text-black">
                  How do you provide support?
                </p>
                <p className="mt-3 text-base text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt{" "}
                  <a
                    href="#"
                    title=""
                    className="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                  >
                    support@Celebration.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
