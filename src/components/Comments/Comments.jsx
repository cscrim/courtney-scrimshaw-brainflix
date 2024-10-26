import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from '../../assets/images/add_comment.svg';
import "./Comments.scss";

function Comments({ selected }) {

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);

    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;

  }


  return (
    <div className="comments">
      <div className="comments__count">
        {selected.comments.length} Comment{selected.comments.length !== 1 ? 's' : ''}
      </div>
      <div className="comments__input-container">
        <div className="comments__avatar">
          <img src={userAvatar} alt="user avatar" />
        </div>
        <div className="comments__input">
          <p>JOIN THE CONVERSATION</p>
          <form className="comments__form">
            <input type="text" placeholder="Add a new comment" />
            <button type="submit">
              <img src={commentIcon} alt="comment icon" className="comment-icon" />
              <span>COMMENT</span></button>
          </form>
        </div>
      </div>
 

      <div className="comments__rendered-container">
        {selected.comments.map(comment => (
          <div key={comment.id} className="comments__comment-container">
        <div className="comments__placeholder">
          
        </div>

        <div className="comments__comment">
          <div className="comments__name-date-wrapper">
          <div className="comments__name">
            {comment.name}
          </div>
          <div className="comments__date">
            {formatTime(comment.timestamp)}
            </div>
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
