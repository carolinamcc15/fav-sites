const Card = ({ id, title, url }) => {
    return (
    <li className="pb-2 bg-gray-50 shadow-md lg:w-5/12 w-full rounded lg:flex-1" data-id={ id}>
        <div className="flex justify-end">
            <button className="text-sm py-1 px-2 text-white bg-blue-400 hover:bg-blue-500 transition duration-300 rounded-bl">EDIT</button>
            <button className="text-sm py-1 px-2 text-white bg-red-400 hover:bg-red-500 transition duration-300 rounded-tr">DELETE</button>
        </div>
        <a href={ url }>
            <h2 className="px-2 md:px-4 font-semibold ">{ title }</h2>
        </a>
    </li>
    )
}

export default Card