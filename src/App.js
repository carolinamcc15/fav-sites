import Header from "./components/Header/Header"
import AddForm from "./components/AddForm/AddForm";
import EditForm from "./components/EditForm/EditForm";
import Favorites from "./components/Favorites/Favorites";
import SiteServices from "./services/sites.services";
import { useState, useEffect } from "react";

function App() {
  const [sites, setSites] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editSite, setEditSite] = useState({});

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

  const onEdit = async (id) => {
    const editing = sites.filter(site => site._id === id);
    const siteObj = editing[0];
  
    if(!editMode) {
      setEditMode(true);
    }
    else if(editMode && editSite === siteObj._id ) {
      setEditMode(false);
    }

    setEditSite(siteObj);
  }

  const clearEdit = async () => {
    setEditMode(false);
    setEditSite("");
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen px-3 py-6 md:p-8 m-0 bg-gray-50">
      <Header />
      <AddForm fetchSites={ fetchSites } />
      { editMode && 
          <EditForm site={ editSite } fetchSites={ fetchSites } clearEdit = { clearEdit } />
      }
      <Favorites sites={ sites } onDeleteHandler={ onDeleteHandler } onEditHandler={ onEdit }/>
    </div>
  );
}

export default App;
