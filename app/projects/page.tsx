import AllProjects from "@/components/AllProjects"
import Navbar from "@/components/Navbar"
import { Metadata } from "next"

export const metadata : Metadata = {
  title: "Projects",
}

export default  function AllProjectsContent() {
    return (
        <div>
            <Navbar currentPath="/projects" />
            <AllProjects />
        </div>
    )
}