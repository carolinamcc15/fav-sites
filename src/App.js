import Header from "./components/Header/Header"
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import SiteServices from "./services/sites.services";
import { useState, useEffect } from "react/cjs/react.development";

function App() {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    const fetchSites = async () => {
      try {
        const response = await SiteServices.getAllSites();
        setSites(response);
      }
      catch(error) {
        console.log(error);
      }
    }
    fetchSites();
  }, [sites])

  const onDeleteHandler = async (id) => {
    try {
      const response = await SiteServices.deleteSite(id);
      console.log(response);
    }
    catch(error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen px-3 py-6 md:p-8 m-0 bg-gradient-to-r from-purple-400 to-blue-400 ">
      <Header />
      <Form  />
      <Favorites sites={sites} onDeleteHandler={ onDeleteHandler }/>
    </div>
  );
}

export default App;
