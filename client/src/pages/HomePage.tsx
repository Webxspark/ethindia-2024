

function HomePage() {
  return (
    <div className=" dark:bg-grid-white/[0.02] mt-20">
      <div className=" w-full flex md:items-center md:justify-center  antialiased relative overflow-hidden">
        
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white bg-opacity-50">
            Spotlight <br /> is the new trend.
          </h1>
          <p className="mt-4 font-normal text-base dark:text-neutral-300 text-zinc-800 max-w-lg text-center mx-auto">
            Spotlight effect is a great way to draw attention to a specific part
            of the page. Here, we are drawing the attention towards the text
            section of the page. I don&apos;t know why but I&apos;m running out
            of copy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
