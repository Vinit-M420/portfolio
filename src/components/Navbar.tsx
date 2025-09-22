import { useNavbarStore } from "../store";

const Navbar = () => {
    const { navbarState, setNavbarState } = useNavbarStore();
    return (
        <div className="border border-neutral-700 rounded-2xl p-2 
                flex justify-center items-center w-fit mx-auto gap-3 mt-5">
            <div className={`text-lg text-white cursor-pointer px-2
                ${navbarState === "about" ? `text-orange font-bold bg-white rounded-xl`: ``}`}
                onClick={() => setNavbarState('about')}>
                About
            </div>
            <div className={`text-lg text-white cursor-pointer px-2
                ${navbarState === 'projects' ? `text-green font-bold bg-white rounded-xl` : ``}`}
                onClick={() => setNavbarState('projects')}>
                Project
            </div>
            <div className={`text-lg text-white cursor-pointer px-2
                ${navbarState === 'resume' ? `text-blue font-bold bg-white rounded-xl` : ``}`}
                onClick={() => setNavbarState('resume')}>
                Resume
            </div>

        </div>
    )

}

export default Navbar;