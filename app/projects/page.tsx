import AllProjects from "@/components/AllProjects"
import Navbar from "@/components/Navbar"


export default  function AllProjectsContent() {
    return (
        <div>
        <Navbar currentPath="/projects" />
        <AllProjects />
        </div>
    )
}