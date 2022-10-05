import Header from "../header/Header";
import HtmlData from "./HtmlData";

const Html = ({html}) => {
  
  return (
    <div>
      <Header />
      <div className="mt-20 mb-10">
        {html.map((data, id) => (
          <HtmlData html={data} key={id}></HtmlData>
        ))}
      </div>
    </div>
  );
};

export default Html;
