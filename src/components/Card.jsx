const Card = ({data}) => {
  return (
    <div className="col-3">
      <div className="card">
        <h5 className="card-header">{data.name}</h5>
        <div className="card-body">
          {/* <h5 className="card-title">Special title treatment</h5> */}
          <p className="card-text">
            {data.description}
          </p>
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
