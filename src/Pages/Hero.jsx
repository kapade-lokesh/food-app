import react from "react";
import pizza from "../assets/Images/pizza2.png";
import Layout from "../Components/Layouts/Layout";
const Hero = () => {
  return (
    <Layout>
      <div>
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto  py-24  lg:py-24">
            <div className="text-center  lg:flex justify-between align-center">
              <div>
                <div className="mt-20">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    The Best Place To Satisfy Your{" "}
                    <span className="text-indigo-600">Tummy</span>
                  </h1>
                  <p className="mt-6 text-lg leading-8  text-gray-600">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua.
                  </p>
                </div>

                <div className="hidden sm:mb-8 py-11 sm:flex sm:justify-center">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Best offers on the veg Pizza.{" "}
                    <a href="#" className="font-semibold text-indigo-600">
                      <span aria-hidden="true" className="absolute inset-0" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src={pizza}
                  className=" sm:mt-34 md:-mt-11  lg:-mt-11 "
                  alt="main-image"
                />
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hero;
