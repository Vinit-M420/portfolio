const Aboutme = () => {
    return (
        <div className="flex flex-col gap-5 mx-auto max-w-5xl justify-center my-15">
            <h1 className="font-bold text-4xl text-black w-fit bg-orange px-2"> 
                {/* {bg-orange px-2 } */}
                About me
            </h1>
            <div className="text-lg tracking-normal flex flex-col gap-5 leading-relaxed">
                <p>
                    I'm a SQL Developer turned Full Stack Engineer with a passion for crafting clean, aesthetic, and memorable digital experiences.
                    I specialize in the React.js, Node.js, and Express.js ecosystem, leveraging TypeScript to build scalable frontends and reliable backends. 
                </p>
                
                <p>
                    Besides work, I enjoy watching movies, meeting new people and trying out new food.                
                </p>
                
                <p>
                    If you've got an idea or want to collaborate on an exciting project, feel free to drop me a DM.
                </p>
            </div>
        </div>
    )
}

export default Aboutme;