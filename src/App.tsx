import SvgComponent from "./components/SvgComponent";
import "./index.css";
const App = () => {
  return (
    <body className="bg-YellowBg  w-screen h-screen flex justify-center items-center">
      <div className="bg-WhiteNeutral w-[336px] h-[522px] rounded-2xl div-shadow px-5 py-8 sm:w-[386px]">
        <div className="m-auto overflow-hidden rounded-xl w-[100%] sm:w-[330px] h-[200px]">
          <SvgComponent width={360} height={360} />
        </div>
        <div className=" w-[330px] mt-[26px] mb-[16px] m-auto min-h-10">
          <span className="py-[5px] px-[13px] bg-YellowBg font-bold rounded-md text-sm">
            Learning
          </span>
          <h5 className="font-bold text-sm mt-4">Published 21 Dec 2023</h5>
          <h1 className="text-2xl font-bold text-BlackNeutral mt-4">
            HTML & CSS foundations
          </h1>
          <p className="mt-4 mx-1 text-sm text-GreyNeutral font-medium sm:mx-0 sm:text-base">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className="flex justify-start items-center min-h-2 w-[330px] m-auto ">
          <img
            src="/public/images/image-avatar.webp"
            alt="avatar"
            className="w-10"
          />
          <h5 className="font-extrabold text-BlackNeutral text-sm ml-3">
            Greg Hooper
          </h5>
        </div>
      </div>
    </body>
  );
};

export default App;
