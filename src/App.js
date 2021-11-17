import Header from "./components/Header/Header"
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen px-3 py-6 md:p-8 m-0 bg-gradient-to-r from-purple-400 to-blue-400 ">
      <Header />
      <Form />
      <Favorites />
    </div>
  );
}

export default App;
