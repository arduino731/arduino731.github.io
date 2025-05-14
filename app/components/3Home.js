import useHandleScroll from '../hooks/HandleScroll'
 
const Home = () => {
    const currentSection = useHandleScroll();
    return (
        <div id="Home" className={`scrollHandle transition-opacity duration-1000 ease-in-out colorBackground h-screen flex flex-col justify-center items-center text-center px-6
        ${
        currentSection === 'home' ? 'opacity-100' : 'opacity-0'
        }`}
        data-id="home"
        >
            <h1 className="text-4xl md:text-6xl colorTextOpposite font-bold mb-4 fadeIn">Hello, I am&nbsp;
                <span className="uppercase colorText font-bold fadeIn">Brian van Vlymen</span>
            </h1>
            <h1 className="text-4xl md:text-6xl colorTextOpposite font-bold mb-4 fadeIn">Hi, I'm a Web Developer</h1>
            <p className="text-lg md:text-xl colorTextOpposite max-w-2xl fadeIn">
                I build beautiful and functional websites using modern technologies.
            </p>

            <div className="m-4">
                <a href="/#projects">
                    <button className="fadeIn px-4 py-2 hoverSpotlight colorText colorBackgroundOpposite">View My Work</button>
                </a>
            </div>

        </div>
        
    );
}

export default Home;