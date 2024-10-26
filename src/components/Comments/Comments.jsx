import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import "./Comments.scss";

function Comments({ selected }) {
  return (
    <div className="comments">
      <div className="comments__count">3 comments (update to be dynamic)</div>
      <div className="comments__input-container">
        <div className="comments__avatar">
          <img src={userAvatar} alt="user avatar" />
        </div>
        <div className="comments__input">
          <p>JOIN THE CONVERSATION</p>
          <form className="comments__form">
            <input type="text" placeholder="Add a new comment" />
            <button type="submit">COMMENT</button>
          </form>
        </div>
      </div>
      {/* <div className="comments__border">
          
        </div> */}



      <div className="comments__rendered-container">
        {selected.comments.map(comment => (
          <div key={comment.id} className="comments__comment-container">
        <div className="comments__placeholder">
          
        </div>

        <div className="comments__comment">
          <div className="comments__name">
            {comment.name}
          </div>
          <div className="comments__text">
          {comment.comment}
          </div>
        </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
