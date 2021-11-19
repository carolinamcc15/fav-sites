import { useState, useEffect } from "react";
import SiteServices from "../../services/sites.services";

const EditForm = ({ site, fetchSites, clearEdit }) => {
    const [favInput, setFavInput] = useState("");
    const [urlInput, setUrlInput] = useState("");

    const onChangeHandler = (e, setValue) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        setFavInput(site.title);
        setUrlInput(site.url);
    }, [site]);

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if(favInput && urlInput ) {
            try {
                await SiteServices.editSite(site._id, favInput, urlInput);
                await fetchSites();
            }
            catch (error) {
                console.log(error);
            }
    
            setFavInput("");
            setUrlInput("");
            await clearEdit();
        }
        else {
            alert("Some fields are empty");
        }
        
    }

    return (
        <div className="w-10/12 max-w-30" >
            <h2 className="text-lg font-bold text-black mt-8 mb-2">Edit a site</h2>
            <form className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 bg-gray-300 bg-opacity-50 px-4 py-6 rounded-md shadow-md" onSubmit={onSubmitHandler}>
                <div className="flex flex-col w-full">
                    <label for="fav-name" className="text-sm">Title</label>
                    <input id="fav-name" className="mt-1 p-2 focus:outline-none focus:ring focus:ring-green-200 rounded shadow"
                        type="text" name="fav-name" onChange={e => onChangeHandler(e, setFavInput)} value={ favInput } placeholder="Google" required/>
                </div>
                <div className="flex flex-col w-full">
                    <label for="fav-name" className="text-sm">URL</label>
                    <input className="mt-1 p-2 focus:outline-none focus:ring focus:ring-green-200 rounded shadow"
                        type="url" name="fav-url" onChange={e => onChangeHandler(e, setUrlInput)} value={ urlInput } placeholder="https://www.google.com" required/>
                </div>
                <button className="px-7 py-2 bg-green-400 text-white font-semibold uppercase rounded hover:bg-green-500 transition duration-300"
                    type="submit">Save</button>
            </form>
        </div>
    )
}

export default EditForm