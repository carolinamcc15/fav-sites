import Header from "./components/Header/Header"
import AddForm from "./components/AddForm/AddForm";
import EditForm from "./components/EditForm/EditForm";
import Favorites from "./components/Favorites/Favorites";
import SiteServices from "./services/sites.services";
import { useState, useEffect } from "react/cjs/react.development";

function App() {
  const [sites, setSites] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const fetchSites = async () => {
    try {
      const response = await SiteServices.getAllSites();
      setSites(response);
    }
    catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSites();
  }, [])

  const onDeleteHandler = async (id) => {
    try {
      await SiteServices.deleteSite(id);
      fetchSites();
    }
    catch(error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen px-3 py-6 md:p-8 m-0 bg-gradient-to-r from-purple-400 to-blue-400 ">
      <Header />
      <AddForm fetchSites={ fetchSites } />
      { editMode && 
        <div>
          <h2>Edit site</h2>
          <EditForm />
        </div>
      }
      <Favorites sites={sites} onDeleteHandler={ onDeleteHandler }/>
    </div>
  );
}

export default App;
