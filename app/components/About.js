import Image from 'next/image'

const About = () => {
    return (
      <div>

        <div className="flex items-center justify-center">
          <h1 className="md:text-3xl">About</h1>
        </div>
        <div className="p-2 m-4 flex justify-center ">
          <div className=" w-1/4 text-center">
            <Image 
              src="/images/fast.png" 
              className="bg-slate-500 mx-auto block ring-1 ring-slate-900/5 shadow-xl rounded-lg border-slate-950 border-2" 
              alt="logo"
              width={100} 
              height={100} 
            />
            <h1 className="text-3xl">FAST</h1>
            <p className="">Fast load times and lag free interaction, my highest priority.</p>
          </div>
          <div className=" w-1/4 text-center">
            <Image 
              src="/images/responsive.png" 
              className="bg-slate-500 mx-auto block ring-1 ring-slate-900/5 shadow-xl rounded-lg border-slate-950 border-2" 
 
              alt="logo"
              width={100} 
              height={100} 
            />
            <h1 className="text-3xl">RESPONSIVE </h1>
            <p className="">My layouts will work on any device, big or small.</p>
          </div>
          <div className=" w-1/4 text-center">
            <Image 
              src="/images/intuitive.png" 
              className="bg-slate-500 mx-auto block ring-1 ring-slate-900/5 shadow-xl rounded-lg border-slate-950 border-2" 
              alt="logo"
              width={100} 
              height={100} 
            />
            <h1 className="text-3xl">INTUITIVE</h1>
            <p className="">Strong preference for easy to use, intuitive UX/UI.</p>
          </div>
          <div className=" w-1/4 text-center">
            <Image 
              src="/images/dynamic.png" 
              className="bg-slate-500 mx-auto block ring-1 ring-slate-900/5 shadow-xl rounded-lg border-slate-950 border-2" 
              alt="logo"
              width={100} 
              height={100} 
            />
            <h1 className="text-3xl">DYNAMIC</h1>
            <p className="">Websites don&apos;t have to be static, I love making pages come to life.</p>
          </div>
        </div>




        <p>When creating a portfolio for a full-stack development role, the primary focus should be on showcasing your skills, projects, and relevant experience in the field of computer science and web development. Therefore, emphasizing your educational background and technical expertise is usually more important than displaying professional pictures of yourself.</p>        
          
          <ol className="list-decimal pl-4">
            <li className="mb-2"><span className="font-bold"> Relevance:</span> Your portfolio should primarily highlight your qualifications and experience that are directly related to the job you &apos;re applying for. Your computer science degree demonstrates your formal education in the field, which is highly relevant to full-stack development roles.</li>  
            <li className="mb-2"><span className="font-bold">Technical Skills:</span> Employers are generally more interested in your technical skills, coding abilities, and project work. Your portfolio should showcase your projects, coding proficiency, and problem-solving skills.</li>  
            <li className="mb-2"><span className="font-bold">Professionalism:</span> While it &apos; s important to have a professional appearance, including a professional photo of yourself on your portfolio can be a nice touch, but it should not be the primary focus. The emphasis should be on your work and accomplishments, not your appearance.</li>  
          </ol>  

        <p>That said, it &apos;s still important to maintain a professional appearance online, including on platforms like LinkedIn. You can have a professional photo on your LinkedIn profile and include a link to your portfolio there. However, your portfolio&apos;s primary focus should be on showcasing your skills, projects, and achievements in the field of computer science and web development.

Remember, your portfolio is a tool to sell your technical abilities and experience to potential employers, so make sure it effectively communicates your expertise in those areas.</p>
          
             
      </div> 
    )}
    
    
  export default About