const Card = ({ site, onEditHandler, onDeleteHandler }) => {
    return (
    <li className="pb-2 bg-gray-50 shadow-md lg:w-5/12 w-full rounded lg:flex-auto" data-id={ site._id }>
        <div className="flex justify-end">
            <button 
                className="text-sm py-1 px-2 text-white bg-blue-400 hover:bg-blue-500 transition duration-300 rounded-bl"
                onClick={ () => { onEditHandler(site._id) } }>EDIT</button>
            <button 
                className="text-sm py-1 px-2 text-white bg-red-400 hover:bg-red-500 transition duration-300 rounded-tr"
                onClick={ () => { onDeleteHandler(site._id) } }>DELETE</button>
        </div>
        <a href={ site.url }>
            <h2 className="px-2 md:px-4 font-semibold ">{ site.title }</h2>
        </a>
    </li>
    )
}

export default Card