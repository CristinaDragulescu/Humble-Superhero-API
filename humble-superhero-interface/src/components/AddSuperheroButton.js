function AddSuperheroButton({ onClick }) {
  return (
    <button className="btn btn-primary my-3 mx-3" onClick={onClick}>
      Add a superhero
    </button>
  );
}

export default AddSuperheroButton;
