import { Link } from "react-router-dom";

const Logo = ({ type }) => {
  return (
    <div>
      <Link
        to='/'
        className={`font-semibold dark:text-white flex items-center gap-1 ${
          type ? "text-white text-4xl" : "text-2xl"
        }`}
      >
        Threat
        <span
          className={`text-rose-500 font-bold ${
            type ? "text-5xl" : "text-3xl"
          }`}
        >
          Wire
        </span>
        <span
          className={`tracking-tight font-medium ${
            type ? "text-xl" : "text-sm"
          } text-gray-500 dark:text-gray-400`}
        >
          Chronicles
        </span>
      </Link>
    </div>
  );
};

export default Logo;
