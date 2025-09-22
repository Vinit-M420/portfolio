import { useNavbarStore } from "../store";

const Navbar = () => {
    const { navbarState, setNavbarState } = useNavbarStore();

    return (
        <div className="border border-neutral-700 rounded-2xl p-2 
                flex justify-center items-center w-fit mx-auto gap-3 mt-5">
            <a className={`text-lg cursor-pointer px-2 
                ${navbarState === "about" ? `text-black font-bold bg-white rounded-xl`: `text-gray-300`}`}
                onClick={() => setNavbarState('about')}>
                Home
            </a>
            <a className={`text-lg cursor-pointer px-2 
                ${navbarState === 'projects' ? `text-black font-bold bg-green rounded-xl` : `text-gray-300`}`}
                onClick={() => setNavbarState('projects')}>
                Projects
            </a>
            <a className={`text-lg cursor-pointer px-2
                ${navbarState === 'resume' ? `text-black font-bold bg-blue rounded-xl` : `text-gray-300`}`}
                onClick={() => setNavbarState('resume')}>
                Resume
            </a>
        </div>
    )
}

export default Navbar;