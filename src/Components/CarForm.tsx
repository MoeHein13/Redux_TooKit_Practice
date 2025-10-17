const CarForm = () => {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-xl font-semibold">CarForm</h1>

        <form>
          <label htmlFor="name">Name</label>
          <input type="text" />
        </form>
      </div>
    </>
  );
};

export default CarForm;
