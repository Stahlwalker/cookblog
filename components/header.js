import Link from 'next/link'

export default function Header() {
  return (
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
            </ul>
        </div>
    </div>
</nav>
  )
}
