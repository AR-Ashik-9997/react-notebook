import Header from "../header/Header";
import ReactData from "./ReactData";

const Reactjs = ({ react }) => {
  return (
    <div>
      <Header />
      <div className="mt-20 mb-10">
        {react.map((data, id) => (
          <ReactData react={data} key={id}></ReactData>
        ))}
      </div>
    </div>
  );
};

export default Reactjs;
