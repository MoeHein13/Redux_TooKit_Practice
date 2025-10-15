import CarForm from "./Components/CarForm";
import CarList from "./Components/CarList";
import CarSearchTerm from "./Components/CarSearchTerm";
import CarValue from "./Components/CarValue";

const App = () => {
  return (
    <div className="max-w-3xl border-2 border-gray-400  p-3 mx-auto mt-10 ">
      <h1 className="text-2xl font-bold text-center mb-10">Car Details</h1>
      <CarForm />
      <CarSearchTerm />
      <CarList />
      <CarValue />
    </div>
  );
};

export default App;
