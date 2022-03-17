import Link from 'next/link'

export default function Header() {
  return (
    // <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    //   <Link href="/">
    //     <a className="hover:underline">Home</a>
    //   </Link>
      
    // </h2>

    <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="/"><i aria-hidden className="fa fa-home" style={{ fontSize: 36 }}></i></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/posts/blog">All Recipes</a>
                </li>
                {/* <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li> */}
            </ul>
        </div>
    </div>
</nav>
  )
}
