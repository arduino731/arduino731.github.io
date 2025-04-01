 
const Home = () => {
    return (
        
        <div className="colorBackground h-screen flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-4xl md:text-6xl colorText font-bold mb-4">Hello, I am&nbsp;
                <span className="uppercase  border rounded border-slate-900 dark:bg-slate-100 bg-slate-900 font-bold">Brian van Vlymen</span>
            </h1>
            <h1 className="text-4xl md:text-6xl colorText font-bold mb-4">Hi, I'm a Web Developer</h1>
            <p className="text-lg md:text-xl colorText max-w-2xl">
                I build beautiful and functional websites using modern technologies.
            </p>
            <a className="button1" href="#projects">
                View My Work
            </a>
        </div>
        
    );
}

export default Home;