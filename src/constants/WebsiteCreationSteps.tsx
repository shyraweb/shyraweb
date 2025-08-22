export const WEBSITE_CREATION_STEPS = [
  {
    title: "Choose UI Components",
    description:
      "Quickly build stunning layouts using our collection of over 100 UI components, all neatly organized into categories like navigations, features, and headers.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Customize styles",
    description:
      "With extensive configuration options, you can effortlessly customize every element of your templates to perfectly match your vision.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Download or Deploy Instantly",
    description:
      "Simply export to get all the source files. There are no dependencies or vendor lock-in, so you have complete control. You can also easily deploy your code to Git.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
]
