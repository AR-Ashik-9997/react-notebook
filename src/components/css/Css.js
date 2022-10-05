import Header from "../header/Header";
import CssData from "./CssData";

const Css = ({css}) => {
  
  return (
    <div>
      <Header />
      <div className="mt-20 mb-10">
        {css.map((data) => (
          <CssData css={data} key={data.id}></CssData>
        ))}
      </div>
    </div>
  );
};

export default Css;
