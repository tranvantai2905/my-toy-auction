import Tech from "../../components/info/Tech";
import Tech2 from "../../components/info/Tech2";
import Tech3 from "../../components/info/Tech3";
import "../../components/info/news.css";

const InfoPage = () => {
  return (
    <>
      <div className="content">
        <div id="tech">
          <Tech2 />
          <Tech />
          <Tech3 />
        </div>
      </div>
    </>
  );
};

export default InfoPage;
