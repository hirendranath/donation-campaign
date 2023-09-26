import ContentWrapper from "../ContentWrapper/ContentWrapper";
const Banner = () => {
  return (
    <section className="banner w-full h-[500px] flex justify-center items-center">
      <ContentWrapper>
        <div className="flex flex-col justify-center items-center mx-auto">
          <h1 className="text-center text-2xl md:text-5xl font-bold not-italic text-[#0B0B0B]">
            I Grow By Helping People In Need...
          </h1>
          <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:w-[582px] mt-10">
            <input
              type="text"
              placeholder="Search..."
              className="rounded-lg md:w-[470px] h-12 border border-[#DEDEDE] outline-none md:rounded-none md:rounded-l-lg px-7"
            />
            <button
              type="submit"
              className="md:w-28 h-12 rounded-lg bg-color-rose text-white md:rounded-none md:rounded-r-lg"
            >
              Search
            </button>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default Banner;
