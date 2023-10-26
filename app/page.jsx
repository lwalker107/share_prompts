
const Home = () => {
  return (
    // Using tailwind to create style using utility classes
    <section className="w-full flex-center 
    flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopolis is an open-source AI prompting 
        tool for modern world to discover, create and
        share creative prompts
      </p>
    </section>
  )
}

export default Home
