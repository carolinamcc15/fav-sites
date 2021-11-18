import Card from "./Card/Card";

const Favorites = ({sites = [], onEditHandler, onDeleteHandler }) => {
    return (
        <ul className="flex flex-wrap md:items-end gap-5 bg-gray-100 bg-opacity-50 w-10/12 max-w-30 mt-8 px-4 py-6 rounded-md shadow-md">
            {
            sites.map(site => {
                return <Card key={ site._id } site={ site } onEditHandler={ onEditHandler } onDeleteHandler={ onDeleteHandler } />
                })
            }
        </ul>
    )
}

export default Favorites;