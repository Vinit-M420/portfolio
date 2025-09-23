const Aboutme = () => {
    return (
        <div className="flex flex-col gap-5 mx-auto max-w-4xl lg:w-4xl md:w-2xl w-sm justify-center my-15">
            <h1 className="font-bold lg:text-4xl text-2xl text-black w-fit bg-orange px-2"> 
                {/* {bg-orange px-2 } */}
                About me
            </h1>
            <div className="text-md flex flex-col gap-5 leading-relaxed tracking-normal font-sans">
                <p>
                    I'm a SQL Developer turned Full Stack Engineer with a passion for crafting clean, aesthetic, and memorable digital experiences.
                    I specialize in the React.js, Node.js, and Express.js ecosystem, leveraging TypeScript to build scalable frontends and reliable backends. 
                </p>
                
                <p>
                    Besides work, I enjoy watching movies & anime, meeting new people and trying out new food.                
                </p>
                
                <p>
                    If you've got an idea or want to collaborate on an exciting project, feel free to drop me a DM.
                </p>
            </div>
        </div>
    )
}

export default Aboutme;