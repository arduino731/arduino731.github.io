 
const Home = () => {
    return (
        
        <div className="colorBackground h-screen flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-4xl md:text-6xl colorTextOpposite font-bold mb-4">Hello, I am&nbsp;
                <span className="uppercase colorText font-bold">Brian van Vlymen</span>
            </h1>
            <h1 className="text-4xl md:text-6xl colorTextOpposite font-bold mb-4">Hi, I'm a Web Developer</h1>
            <p className="text-lg md:text-xl colorTextOpposite max-w-2xl">
                I build beautiful and functional websites using modern technologies.
            </p>

            <div className="m-4">
                <a href="#projects">
                    <button className="px-4 py-2 hoverSpotlight colorText colorBackgroundOpposite">View My Work</button>
                </a>
            </div>

        </div>
        
    );
}

export default Home;