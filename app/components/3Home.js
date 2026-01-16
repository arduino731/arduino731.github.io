import useHandleScroll from '../hooks/HandleScroll'
 
const Home = () => {
    const currentSection = useHandleScroll();
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
            <h1 className="text-2xl md:text-3xl colorTextOpposite font-semi mb-4 fadeIn">Full-Stack Developer & DevOps Engineer</h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl colorText leading-relaxed colorTextOpposite  fadeIn">
                I specialize in building <strong>high-performance web applications</strong> and 
                <strong> optimized Linux infrastructure</strong>. Whether it's crafting GSAP animations 
                or managing secure server environments, I deliver end-to-end digital solutions.
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