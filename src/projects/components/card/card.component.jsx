const Card = ({ header, body, footer }) => {
  return (
    <div
      className="card shadow m-3 "
      style={{ width: "400px", maxWidth: "500px" }}>
      {!header ? null : <div className="card-header text-white">{header}</div>}
      <div className="card-body">{body}</div>

      {!footer ? null : (
        <small className="card-footer text-white">{footer}</small>
      )}
    </div>
  );
};

export default Card;
