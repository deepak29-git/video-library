import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useHistory } from "../../Context/history-context";
import { clearAllWatchHistory } from "../../Utility/clear-all-watch-history";
import { deleteFromHistory } from "../../Utility/delete-from-history";
import "../History/History.css";
export const History = () => {
  const { history,setHistory } = useHistory();
  console.log(history, "history");
  return (
    <div>
      <Header />
      <div className="clear-all-history ">
        <button onClick={()=>clearAllWatchHistory(setHistory)} className="btn primary-bg">CLEAR ALL WATCH HISTORY</button>
      </div>
      <div className="grid-container">
        <Sidebar />
        {history.map(({ _id, title, image }) => (
          <div key={_id} className="video-container">
            <img className="thumbnail-image" src={image} alt={title} />
            <div className="space-between">
              <p className="h4 video-title">{title}</p>
              <span
                onClick={() => deleteFromHistory(_id,setHistory)}
                className="material-icons btn"
                >
                delete
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
