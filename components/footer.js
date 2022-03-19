import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-accent-3 border-t border-accent-3">
      <Container>
        <div className="py-20 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Stahlwalker
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://stahlwalker.org/"
              className="mx-1 bg-white border border-dark text-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Learn More
            </a>
            <a
              href={`https://github.com/Stahlwalker/cookblog`}
              className="mx-3 font-bold hover:underline"
            >
              View on <i aria-hidden className="fa fa-github"></i>
              
            </a>
   
          
          </div>
          
        </div>
        <div className="socialicons">
          <a
              href="https://twitter.com/LucasStahl11/"
              
            >
              <i aria-hidden className="fa fa-twitter"></i>
            
            </a>
            <a
              href="https://www.linkedin.com/in/lucasstahl/"
              
            >
              <i aria-hidden className="fa fa-linkedin"></i>
            
            </a>
            </div>
      </Container>
    </footer>
  )
}
