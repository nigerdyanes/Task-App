import "../assets/styles/components/FormCreate.css";
const FormEdit = ({ data, onSubmit, task, setTask }) => {

  const handleInputChange = (e) => {
    setTask({
        ...task,
        [e.target.name] : e.target.value
      })
  }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title text-center">Update task</h4>
          <div className="container">
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter task name"
                  onChange={handleInputChange}
                  defaultValue={data.name}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  placeholder="Enter a description task"
                  rows="3"
                  onChange={handleInputChange}
                  defaultValue={data.description}
                ></textarea>
              </div>
              <div className="mb-3 text-center">
                <button
                  type="submit"
                  className="Button__submit btn btn-success btn-lg"
                >
                  Save task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEdit;
