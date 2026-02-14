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
              href="https://lukestahl.io/"
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
              href="https://x.com/LukeStahl11"
              aria-label="X (formerly Twitter)"
              className="mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{ display: 'inline-block', verticalAlign: 'middle' }}
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
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
