import { Link } from "react-router-dom";
const Heading = () => {
  return (
    <div>
      <div className="p-5 text-center bg-light">
        <h1 className="mb-3">Your management task</h1>
        <Link className="btn btn-primary" to="/create-task" role="button">
          Create a task
        </Link>
      </div>
    </div>
  );
};

export default Heading;
