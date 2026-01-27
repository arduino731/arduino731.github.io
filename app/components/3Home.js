import useHandleScroll from '../hooks/HandleScroll'
 
const Home = () => {
    const { visibleSection: currentSection } = useHandleScroll();
    return (
        <div id="Home" className={`scrollHandle transition-opacity duration-1000 ease-in-out colorBackground h-screen flex flex-col justify-center items-center text-center px-3
        ${
        currentSection === 'home' ? 'opacity-100' : 'opacity-0'
        }`}
        data-id="home"
        >
            <h1 className="text-4xl md:text-6xl colorTextOpposite font-extrabold mb-4">Hello, I am&nbsp;
                <span className="uppercase colorText font-bold fadeIn">Brian van Vlymen</span>
            </h1>
            <h1 className="text-2xl md:text-3xl colorTextOpposite font-semi mb-4 fadeIn">UI/UX Engineer | Frontend Developer</h1>

            <div className="m-4">
                <a href="/#projects">
                    <button className="fadeIn px-4 py-2 hoverSpotlight colorText colorBackgroundOpposite">View My Work</button>
                </a>
            </div>
        </div>
        
    );
}

export default Home;