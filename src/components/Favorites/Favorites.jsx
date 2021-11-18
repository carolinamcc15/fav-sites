import Card from "./Card/Card";

const Favorites = ({sites = []}) => {
    return (
        <ul className="flex flex-wrap md:items-end gap-5 bg-gray-100 bg-opacity-50 w-10/12 max-w-30 mt-8 px-4 py-6 rounded-md shadow-md">
            {
            sites.map(site => {
                return <Card key={ site._id} id={ site._id } title={ site.title } url={ site.url } />
                })
            }
        </ul>
    )
}

export default Favorites;