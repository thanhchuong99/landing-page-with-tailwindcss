import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import checkPointSvg from "../../assests/checkpoint.svg";
import { useSpring, animated } from "react-spring";
const Content = () => {
  const customer = useSpring({ customers: 10245, from: { customers: 0 } });
  const card = useSpring({ cards: 12045, from: { cards: 0 } });
  return (
    <section className="md:flex">
      <div className="ml-[70px] mr-[54px]  p-4 text-bold bg-gradient-to-b from-white/40 to-transparent shadow-md rounded-3xl flex flex-col items-center justify-center flex-[0.5]">
        <div className=" flex items-center ">
          <FaUser size={"22px"} />
          <div className="text-26 ml-4 ">
            <animated.div>
              {customer.customers.to((val) => Math.floor(val))}
            </animated.div>
            <p className="font-semibold text-13 ">Customer</p>
          </div>
        </div>
        <div className="flex">
          <BsFillCreditCardFill size={"22px"} className="mt-[12px]" />
          <div className="text-26 ml-4">
            <animated.div>
              {card.cards.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold">Cards issued</p>
          </div>
        </div>
      </div>
      <div className="text-13 flex flex-col w-full mt-20 font-semibold flex-1">
        <div className="check-content">
          <img src={checkPointSvg} alt="" />
          <p>Card reports sent to your phone every weeks</p>
        </div>
        <div className="check-content">
          <img src={checkPointSvg} alt="" />
          <p>No external fees</p>
        </div>
        <div className="check-content">
          <img src={checkPointSvg} alt="" />
          <p>Set spending limits and restrictions</p>
        </div>
      </div>
    </section>
  );
};
export default Content;
