/* eslint-disable react/jsx-key */
"use client"
import Image from 'next/image'
import motion from "framer-motion"

// githubURL
// https://github.com/arduino731/jennifershows_Angular
// https://github.com/arduino731/van-vlymen-paws-portfolio


const projectImages = ["secondPort.png", "secondPort.png", "secondPort.png"]
const projects = [
    {
        image: "secondPort.png",
        url : "/projects/1", 
        className: "flex"
    },{
        image: "secondPort.png",
        url : "/projects/2", 
        className: "flex"
    },{
        image: "secondPort.png",
        url : "/projects/3", 
        className: "flex"
    }
]



const box = {
    x: 50
}
const imageVariants = {
    top: { x: "100", scale: 1 },
    left: { x: "-50%", scale: 0.7 },
    right: { x: "-90%", scale: 0.5 },
    bottom: { x: "90%", scale: 0.5 },
  };

 const Projects = () => {
    return ( 
        <div>
            <div className="flex items-center justify-center">
                <h1 className="text-5xl">PROJECTS</h1>
                <p>adversarial search programming</p>
            </div>
                    
            <div className="flex justify-center items-center h-screen">
                {projects.map((item, index) => (
                <a href={item.url} >

                    <Image 
                        key={index}
                        src={`/images/projects/${item.image}`} 
                        alt={`/images/projects/${item.image}`} 
                        initial="top"
                        className="m-2 border-solid border-2 border-slate-900  rounded-md  shadow-[0_0_10px_black] hover:border-slate-300 hover:shadow-lightspot" 
                        animate={{x:100 }}
                        transition={{ duration: 0.5 }}
                        width={200} 
                        height={200} 
                    />                                         
                </a>
                ))}




            </div>

            <ol class=" text-center ">
                <li>Project Overview: Briefly describe the project, including its purpose and the problem it solves.</li>

                <li>Technologies Used: List the technologies, frameworks, and tools you used in the project. This might include HTML, CSS, JavaScript, React, Angular, Vue, etc.</li>

                <li>Features and Functionality: Outline the key features of your project. What makes it stand out? What can users do on your site?</li>

                <li>Design and User Experience: Describe the design choices you made, such as color schemes, layout, and responsive design considerations. Mention any user experience principles you applied.</li>

                <li>Challenges and Solutions: Discuss any significant challenges you faced during the development and how you overcame them. This can demonstrate your problem-solving skills.</li>

                <li>Performance Optimization: If applicable, mention steps you took to optimize the site for performance, such as minimizing load times or ensuring efficient code.</li>

                <li>SEO and Accessibility Considerations: Explain how you made the site SEO-friendly and accessible to users with disabilities.</li>

                <li>Personal Learning and Development: Reflect on what you learned during the project and how it contributed to your growth as a developer.</li>

                <li>Screenshots or Demo Link: Provide visuals or a link to a live demo of the project.</li>

                <li>Code Repository: Include a link to the code repository (e.g., GitHub) if it’s publicly available.</li>

                <p>Could you provide more specific details or aspects of your project that you'd like to highlight? This will help me tailor the advice more closely to your work.</p>
            </ol>  
        </div>

        
     );
 }
  
 export default Projects;