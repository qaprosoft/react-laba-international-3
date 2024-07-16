const PostsList = ({posts = []}) =>
  posts.map(postItem => (
    <div
      key={postItem.id}
      style={{
        border: '2px solid #e5e5e5',
        marginBottom: '12px',
        padding: '10px',
      }}
    >
      <p>
        user id: {postItem.userId}, post id: {postItem.id}
      </p>
      <p>{postItem.title}</p>
    </div>
  ));

export default PostsList;
