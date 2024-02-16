import Image from 'next/image'


export default function Project1() {
  return (
    <article>
      <div style={{position: "relative", background: 'linear-gradient(90deg, rgba(184,204,220,1) 0%, rgba(41,52,64,1) 35%, rgba(158,182,203,1) 100%)' }}>
        <div className="flex justify-center h-screen/2">
          <Image 
              src="/images/ScreenshotRWD.png" 
              alt="ScreenshotRWD"
              width={1000} 
              height={1000} 
              className="border-solid border-2 border-slate-100 my-4 h-auto rounded-md" 
              quality={100}
              priority={true}
          />
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-center">Featured Project</h1>
        <a href="https://github.com/arduino731/van-vlymen-paws-portfolio" target="_blank"> GITHUB</a>
      </div>
      {/* <div class="px-2">
        <div class="flex -mx-2">
          <div class="w-1/3 px-2">
            <div class="bg-gray-400 h-12">
            <img src="/images/ScreenshotRWD.png" /> 
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="bg-gray-500 h-12"><img src="/images/ScreenshotRWD.png" /> </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="bg-gray-400 h-12"><img src="/images/ScreenshotRWD.png" /> </div>
          </div>
        </div>
      </div> */}

      <h2>LatestNews</h2>
      <h1>Pages & Routes</h1>
      <h2>Client Components </h2>
      <p>Portfolio: This section should be the core of your site. For each project, include:
      A brief description of the project, your role, and the problem it solved.
      Technologies used, showcasing your coding proficiency.
      Links to the live project (if available) and code repositories.
      A video demo for complex projects, highlighting key features and your problem-solving approach.
      High-quality images of the project interfaces.</p>

      

      <iframe width="250" height="315" src="https://www.youtube.com/embed/2vOmAAKTv74?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="250" height="315" src="https://www.youtube.com/embed/gUfnJ_Gykg0?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <iframe width="315" height="560" src="https://www.youtube.com/embed/2vOmAAKTv74" title="portfolio2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <Image 
          src="/images/UX.webp" 
          alt="UX"
          width={1000} 
          height={1000} 
          className="" 
          quality={100}
          // style={{height:"auto"}}
      />

    </article>
  )
}
