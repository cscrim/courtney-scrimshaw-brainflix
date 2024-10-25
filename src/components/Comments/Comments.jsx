import "./Comments.scss";

function Comments({ selected }) {
  return (
    <div className="comments">
      <div className="comments__input-container">
        <div className="comments__avatar"></div>
        <div className="comments__input"></div>
      </div>

      <div className="comments__rendered-container">
        <div className="comments__placeholder"></div>
        <div className="comments__comment">
          <div className="comments__name">

          </div>
          <div className="comments__text">
            {/* {selected.comments} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
