import Cards from "../../assests/isocard.svg";
const Slogan = () => {
  return (
    <section className="text-32 mt-12 text-center font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-48 relative">
      <div className="md:col-span-1 md:col-start-2 text-center ">
        Earn <span className="text-purple-300">More </span>
        <p>Pay Less</p>
        <button className="mt-8 bg-purple-500 px-6 py-1.5 text-[18px] rounded-xl hover:bg-pink-500 transition-all duration-300 text-white ">
          Start
        </button>
      </div>

      <div className="mt-16 md:absolute md:right-[-6rem] flex justify-center">
        <img src={Cards} alt="card" />
      </div>
    </section>
  );
};
export default Slogan;
