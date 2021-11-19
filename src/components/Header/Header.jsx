import star from "../../assets/images/star.png";

const Header = () => {
    return (
        <div className="flex items-center gap-4 justify-center">
            <img src={ star } alt="Favorites star" className="w-8 md:w-10"/>
            <h1 className="text-center text-3xl text-black font-bold uppercase">My favorite sites</h1>
        </div>
    )
}

export default Header