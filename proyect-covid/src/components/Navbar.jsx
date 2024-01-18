import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<a className="navbar-brand" to={'/'}>
					Covid
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to={'/countries'}>
								Countries
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to={'/deaths'}>
								Deaths
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to={'/form'}>
								Form Countries
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to={'/line'}>
								Cases in the World
							</Link>
						</li>
                        <li className="nav-item">
							<Link className="nav-link" to={'/world'}>
								World wide
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
