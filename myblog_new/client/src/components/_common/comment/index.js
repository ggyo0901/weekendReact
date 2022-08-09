const Comment = () => {
  return (
    <div div class="post_comment_box">
      <form class="post_comment_form">
        <input />
        <button>등록</button>
      </form>
      <div class="post_comment_list">
        <div class="post_comment_email">
          <div class="post_comment_avatar">
            <img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/profle-512.png" />
          </div>
          <div class="comment_email">korpg95274</div>
        </div>
        <div class="post_comment_content">안녕하세요</div>
        <div class="post_comment_btn">
          <div class="post_comment_date">2022.07.21</div>
          <button class="comment_del_btn">✖</button>
        </div>
      </div>
    </div>
  );
};
export default Comment;
