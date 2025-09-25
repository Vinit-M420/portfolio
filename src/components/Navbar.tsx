import { useNavbarStore } from "../store";

const Navbar = () => {
    const { navbarState, setNavbarState } = useNavbarStore();

    return (
        <nav className="border border-neutral-700 rounded-2xl p-2 
                flex justify-center items-center w-fit mx-auto gap-3 mt-5">
            <a className={`md:text-lg text-md cursor-pointer px-2 
                ${navbarState === "about" ? `text-black font-bold bg-white rounded-xl`: `
                    text-gray-300 hover:bg-gray-500 hover:rounded-2xl hover:text-white`}`}
                onClick={() => setNavbarState('about')}>
                Home
            </a>
            <a className={`md:text-lg text-md cursor-pointer px-2 
                ${navbarState === 'projects' ? `text-black font-bold bg-white rounded-xl` : `
                    text-gray-300 hover:bg-gray-500 hover:rounded-2xl hover:text-white`}`}
                onClick={() => setNavbarState('projects')}>
                Projects
            </a>
            {/* <a className={`md:text-lg text-md cursor-pointer px-2
                ${navbarState === 'resume' ? `text-black font-bold bg-blue rounded-xl` : `
                    text-gray-300 hover:bg-gray-500 hover:rounded-2xl hover:text-white`}`}
                onClick={() => setNavbarState('resume')}>
                Resume
            </a> */}
        </nav>
    )
}

export default Navbar;