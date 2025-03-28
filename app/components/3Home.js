 
const Home = () => {
    return (
        
        <div className="h-screen flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hello, I am&nbsp;<span className="uppercase bg-zinc-400 border rounded border-slate-900">Brian van Vlymen</span></h1>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm a Web Developer</h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
            I build beautiful and functional websites using modern technologies.
            </p>
            <a href="#projects">
            View My Work
            </a>
        </div>
        
    );
}

export default Home;