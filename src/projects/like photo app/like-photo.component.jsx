import { useState } from "react";
import Title from "../components/title/title.component";
import "./like-photo.styles.scss";
import {
  AiFillSmile,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";

const LikePhotoApp = () => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);


  const onClickHandler = () => {
    setLike(!like);
    
    if(!like) {
        setCount(count + 1);
    } else {
        setCount( count - 1)
    }
  }


  return (
    <div>
      <Title text={"Double Click To Like"} />
      <Title classes={"sub-title"} text={`Likes ${count}`} />
      <div className="card-container">
        <div className="header">
          <AiFillSmile size={24} />
          <small>DogyDog</small>
        </div>
        <div className="body" onDoubleClick={onClickHandler}>
          <img
            src="https://images.pexels.com/photos/5732474/pexels-photo-5732474.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Nice dog"
          />
        </div>
        <div className="footer">
          <AiOutlineComment size={24} />
          {like ? (
            <AiFillHeart size={24} color="red" onClick={onClickHandler} />
          ) : (
            <AiOutlineHeart size={24}  onClick={onClickHandler} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LikePhotoApp;
