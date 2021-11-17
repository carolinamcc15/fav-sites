import Card from "./Card/Card";

const Favorites = () => {
    return (
        <ul className="flex flex-wrap md:items-end gap-5 bg-gray-100 bg-opacity-50 w-10/12 max-w-30 mt-8 px-4 py-6 rounded-md shadow-md">
            <Card id={ 1 } title="Google" url="https://www.google.com/" />
            <Card id={ 1 } title="Sakai 2" url="https://www.google.com/" />
        </ul>
    )
}

export default Favorites;