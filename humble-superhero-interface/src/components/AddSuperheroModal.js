import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { superheroService } from "../services/superheroService";
Modal.setAppElement("#root");

function AddSuperheroModal({ isOpen, onClose, triggerRefresh }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    superheroService.createSuperhero(data);
    reset();
    triggerRefresh(); //trigger a refresh to update the table
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div className="modal-content p-4">
        <h2 className="text-center mb-4">Add a Superhero</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input className="form-control" {...register("name")} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Superpower:</label>
            <input
              className="form-control"
              {...register("superpower")}
              required
            />
          </div>
          <div className="mb-3">
            <label>
              Humility Score:
              <input
                type="number"
                className="form-control"
                min="1"
                max="10"
                {...register("humilityScore")}
              />
            </label>
          </div>
          <div>
            <button type="submit" className="btn btn-primary me-2">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default AddSuperheroModal;
