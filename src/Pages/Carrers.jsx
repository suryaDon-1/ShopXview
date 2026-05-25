import {
  Code2,
  Database,
  Palette,
  BriefcaseBusiness,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

function Careers() {
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote / India",
      icon: Code2,
      description:
        "Build modern, responsive, and high-performance user interfaces using React and modern frontend technologies.",
    },
    {
      title: "Backend Developer",
      location: "Remote / India",
      icon: Database,
      description:
        "Develop scalable APIs, manage databases, and improve backend performance using Node.js and MongoDB.",
    },
    {
      title: "UI/UX Designer",
      location: "Remote / India",
      icon: Palette,
      description:
        "Design clean and intuitive user experiences with modern design systems and tools like Figma.",
    },
    {
      title: "E-commerce Operations Intern",
      location: "Hybrid",
      icon: BriefcaseBusiness,
      description:
        "Assist with product listings, order management, customer operations, and day-to-day e-commerce workflows.",
    },
  ];

  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* HERO */}
      <section
        className="
          relative
          overflow-hidden

          py-20 sm:py-24 lg:py-32
          px-4 sm:px-6

          bg-gray-50 dark:bg-zinc-950

          border-b border-gray-200 dark:border-zinc-800
        "
      >
        {/* BLUR BG */}
        <div
          className="
            absolute top-0 left-1/2 -translate-x-1/2
            w-[500px] h-[500px]
            rounded-full
            bg-gray-200/50 dark:bg-white/5
            blur-3xl
            pointer-events-none
          "
        />

        <div className="relative max-w-5xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
            Join Our Team
          </p>

          <h1
            className="
              mt-5
              text-4xl sm:text-5xl lg:text-7xl
              font-black
              leading-tight
              tracking-tight

              text-black dark:text-white
            "
          >
            Build the Future of{" "}
            <span className="text-gray-500 dark:text-gray-400">
              Modern Commerce
            </span>
          </h1>

          <p
            className="
              mt-6 sm:mt-8
              max-w-3xl mx-auto

              text-base sm:text-lg lg:text-xl
              leading-relaxed

              text-gray-600 dark:text-gray-400
            "
          >
            At ShopX, we’re creating a clean and modern shopping experience for
            customers worldwide. We’re looking for passionate people who want to
            grow, learn, and build impactful products with us.
          </p>
        </div>
      </section>

      {/* JOBS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28">
        {/* TITLE */}
        <div className="mb-12 sm:mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 mb-4">
            Open Positions
          </p>

          <h2
            className="
              text-3xl sm:text-4xl lg:text-5xl
              font-black

              text-black dark:text-white
            "
          >
            Current Opportunities
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
          {jobs.map((job, index) => {
            const Icon = job.icon;

            return (
              <div
                key={index}
                className="
                  rounded-3xl
                  p-6 sm:p-8

                  border border-gray-200 dark:border-zinc-800

                  bg-gray-50 dark:bg-zinc-900

                  transition-all duration-300

                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                {/* ICON */}
                <div
                  className="
                    w-14 h-14
                    rounded-2xl

                    bg-black dark:bg-white

                    flex items-center justify-center
                  "
                >
                  <Icon className="h-6 w-6 text-white dark:text-black" />
                </div>

                {/* TITLE */}
                <h3 className="mt-6 text-2xl font-bold text-black dark:text-white">
                  {job.title}
                </h3>

                {/* LOCATION */}
                <div className="mt-3 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="h-4 w-4" />
                  {job.location}
                </div>

                {/* DESCRIPTION */}
                <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-400">
                  {job.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT */}
      <section
        className="
          py-16 sm:py-20 lg:py-24
          px-4 sm:px-6

          bg-gray-50 dark:bg-zinc-950

          border-t border-gray-200 dark:border-zinc-800
        "
      >
        <div className="max-w-4xl mx-auto">
          {/* TITLE */}
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 mb-4">
              Contact
            </p>

            <h2
              className="
                text-3xl sm:text-4xl lg:text-5xl
                font-black

                text-black dark:text-white
              "
            >
              Get in Touch
            </h2>
          </div>

          {/* CONTACT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* EMAIL */}
            <div
              className="
                rounded-3xl
                p-6

                border border-gray-200 dark:border-zinc-800

                bg-white dark:bg-zinc-900

                text-center
              "
            >
              <div
                className="
                  w-12 h-12
                  rounded-2xl

                  bg-black dark:bg-white

                  flex items-center justify-center

                  mx-auto
                "
              >
                <Mail className="h-5 w-5 text-white dark:text-black" />
              </div>

              <h3 className="mt-5 font-bold text-black dark:text-white">
                Email
              </h3>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 break-all">
                careers@shopxmail.com
              </p>
            </div>

            {/* PHONE */}
            <div
              className="
                rounded-3xl
                p-6

                border border-gray-200 dark:border-zinc-800

                bg-white dark:bg-zinc-900

                text-center
              "
            >
              <div
                className="
                  w-12 h-12
                  rounded-2xl

                  bg-black dark:bg-white

                  flex items-center justify-center

                  mx-auto
                "
              >
                <Phone className="h-5 w-5 text-white dark:text-black" />
              </div>

              <h3 className="mt-5 font-bold text-black dark:text-white">
                Phone
              </h3>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                +91 98765 43210
              </p>
            </div>

            {/* ADDRESS */}
            <div
              className="
                rounded-3xl
                p-6

                border border-gray-200 dark:border-zinc-800

                bg-white dark:bg-zinc-900

                text-center
              "
            >
              <div
                className="
                  w-12 h-12
                  rounded-2xl

                  bg-black dark:bg-white

                  flex items-center justify-center

                  mx-auto
                "
              >
                <MapPin className="h-5 w-5 text-white dark:text-black" />
              </div>

              <h3 className="mt-5 font-bold text-black dark:text-white">
                Address
              </h3>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Sector 21, Gurugram, Haryana, India
              </p>
            </div>
          </div>

          {/* NOTE */}
          <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-500">
            Note: This is a demo careers page created for learning purposes.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Careers;