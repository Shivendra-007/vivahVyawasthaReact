import "./carousal.css"

function Carousel() {
    return <div className="container-fluid">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://e0.pxfuel.com/wallpapers/755/849/desktop-wallpaper-indian-bridal-makeup-indian-bride.jpg" className="d-block w-100 h-5" alt="..." />

                    <div className="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://w0.peakpx.com/wallpaper/524/143/HD-wallpaper-top-50-bridal-makeup-artists-in-panchkula-price-info-reviews-indian-makeup.jpg" className="d-block w-100 h-5" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.weddingwishlist.com/wp-content/uploads/2019/07/Bridal-Meke-up-artist-1024x538.png" className="d-block w-100 h-5" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
}
export default Carousel;