import Image from "next/image";

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      id="home"
      className="w-full min-h-screen pt-28 pb-12 flex items-center bg-[#0a192f]"
    >
      {/* Container */}
      <div className="max-w-[1500px] mx-auto xl:px-40 lg:px-20 md:px-12 sm:px-8 px-4 flex flex-col justify-center h-full">
        <div className="max-w-[1500px] w-full grid sm:grid-cols-3 gap-2">
          <div className="col-span-2">
            <p className="text-xl text-pink-600">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
              Dylan Finlay
            </h1>
            <h2 className="text-4xl sm:text:7xl font-bold text-[#8892b0]">
              I&apos;m a UW Mechatronics Engineering student.
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[900px]">
              I&apos;m a 3rd year Mechatronics Engineering student at the
              University of Waterloo. Currently enrolled in my 3B term, I spend
              my days in class and working on projects to explore the world of
              software and robotics. Don&apos;t worry though, I also do other
              stuff with my life! I love fitness, travel, photography and lots
              more. As a co-op student, I am actively seeking connections for
              future opportunities, so please reach out!
            </p>
            <div>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
              >
                View Work
                <span className="group-hover:rotate-90 duration-300 ml-3">
                  →
                </span>
              </button>
            </div>
          </div>
          <div className="sm:p-4 flex justify-center items-center col-span-1">
            <Image
              className="w-auto h-auto max-h-[400px] object-cover shadow-lg shadow-pink-600"
              src="/assets/portfolio/Headshot1.JPG"
              alt="Headshot"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
