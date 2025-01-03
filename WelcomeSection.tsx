import Image from "next/image";

const WelcomeSection = () => {
  return (
    <section
      id="welcome-section"
      className="flex flex-col items-center bg-blue-100 py-16 text-center"
    >
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center lg:space-x-8">
        {/* Left Side: Text */}
        <div className="lg:w-1/2">
          <h1 className="text-6xl font-bold text-gray-800">Hello, I'm Harley.</h1>
          <p className="mt-4 text-xl text-gray-600">Every Web Developer Helps</p>
        </div>
        {/* Right Side: Image */}
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <Image
            src="/IMG_5057_3.jpg"
            alt="Harley's Photo"
            className="rounded-full mx-auto"
            width={256} // 256px width for w-64 equivalent
            height={256} // 256px height for h-64 equivalent
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
