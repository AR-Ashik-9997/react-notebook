import Header from "../header/Header";
import JsData from "./JsData";
import './Js.css';
const JavaScript = ({ js }) => {
  return (
    <div>
      <Header />
      <div className="mt-20 mb-10">
        {js.map((data, id) => (
          <JsData js={data} key={id}></JsData>
        ))}
      </div>
    </div>
  );
};

export default JavaScript;
