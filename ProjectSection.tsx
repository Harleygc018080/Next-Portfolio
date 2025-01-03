export default function ProjectsSection() {
    return (
      <section id="projects" className="py-16 bg-white">
        <h1 className="text-4xl font-bold text-center text-gray-700 mb-8">These are my Projects</h1>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <a
            href="/quiz.html"
            className="project-tile bg-gray-100 p-4 rounded-lg hover:text-blue-600 shadow hover:bg-gray-200 transition"
          >
            <img
              src="/project1image.jpg"
              alt="Project 1 screenshot"
              className="rounded mb-4"
            />
            <p className="text-center text-lg font-semibold">
              <span>&lt;</span>Project1<span>/&gt;</span>
            </p>
          </a>
          <a
            href="/todolist.html"
            className="project-tile bg-gray-100 p-4 rounded-lg hover:text-blue-600 shadow hover:bg-gray-200 transition"
          >
            <img
              src="/projectimage2.jpg"
              alt="Project 2 screenshot"
              className="rounded mb-4"
            />
            <p className="text-center text-lg font-semibold">
              <span>&lt;</span>Project2<span>/&gt;</span>
            </p>
          </a>
          <a
            href="/eCom.html"
            className="project-tile bg-gray-100 p-4 rounded-lg hover:text-blue-600 shadow hover:bg-gray-200 transition"
          >
            <img
              src="/project3image.jpg"
              alt="Project 3 screenshot"
              className="rounded mb-4"
            />
            <p className="text-center text-lg font-semibold">
              <span>&lt;</span>Project3<span>/&gt;</span>
            </p>
          </a>
          <a
            href="/forge.html"
            className="project-tile bg-gray-100 p-4 rounded-lg hover:text-blue-600 shadow hover:bg-gray-200 transition"
          >
            <img
              src="/project4image.jpg"
              alt="Project 4 screenshot"
              className="rounded mb-4"
            />
            <p className="text-center text-lg font-semibold">
              <span>&lt;</span>Project4<span>/&gt;</span>
            </p>
          </a>
          <a
            href="/sample-graphicdesign.pdf"
            className="project-tile bg-gray-100 p-4 rounded-lg hover:text-blue-600 shadow hover:bg-gray-200 transition"
          >
            <img
              src="/project5image.jpg"
              alt="Project 5 screenshot"
              className="rounded mb-4"
            />
            <p className="text-center text-lg font-semibold">
              <span>&lt;</span>Project5<span>/&gt;</span>
            </p>
          </a>
          <a
            href="/"
            className="project-tile bg-gray-100 p-4 rounded-lg hover:text-blue-600 shadow hover:bg-gray-200 transition"
          >
            <img
              src="/project6image.jpg"
              alt="Project 6 screenshot"
              className="rounded mb-4"
            />
            <p className="text-center text-lg font-semibold">
              <span>&lt;</span>Project6<span>/&gt;</span>
            </p>
          </a>
        </div>
        <div className="text-center mt-8">
          <a href="#" className="text-blue-600 text-lg font-medium hover:underline">
            Show All Projects <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>
    );
  }
  