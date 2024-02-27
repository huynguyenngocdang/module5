import { YoutubeData } from "../../data/YoutubeData";

function YoutubeItem() {
  return (
    <div className="youtube-list">
      {YoutubeData.map((item, index) => (
        <YoutubeItemInfo
          key={item.id}
          image={item.image}
          avatar={item.avatar}
          title={item.title}
          author={item.author}
        ></YoutubeItemInfo>
      ))}
    </div>
  );
}

function YoutubeItemInfo(props) {
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image} alt="" />
        <div className="youtube-footer">
          <div className="youtube-avatar">
            <img src={props.avatar} alt="" />
          </div>
          <div className="youtube-info">
            <h3 className="youtube-title">
              {props.title || "this is example of title"}
            </h3>
            <h4 className="youtube-author">
              {props.author || "this is example of author"}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YoutubeItem;
