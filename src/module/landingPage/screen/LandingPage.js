import React, { Component } from "react";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          {/* ======= Top Bar ======= */}
          <div
            id="topbar"
            className="d-none d-lg-flex align-items-center fixed-top"
          >
            <div className="container d-flex">
              <div className="contact-info mr-auto">
                <i className="icofont-envelope" />{" "}
                <a href="mailto:contact@example.com">contact@example.com</a>
                <i className="icofont-phone" /> +1 5589 55488 55
              </div>
              <div className="social-links">
                <a href="#" className="twitter">
                  <i className="icofont-twitter" />
                </a>
                <a href="#" className="facebook">
                  <i className="icofont-facebook" />
                </a>
                <a href="#" className="instagram">
                  <i className="icofont-instagram" />
                </a>
                <a href="#" className="skype">
                  <i className="icofont-skype" />
                </a>
                <a href="#" className="linkedin">
                  <i className="icofont-linkedin" />
                </a>
              </div>
            </div>
          </div>
          {/* ======= Header ======= */}
          <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
              <h1 className="logo mr-auto">
                <a href="index.html">
                  Oktara lemindo<span>.</span>
                </a>
              </h1>
              {/* Uncomment below if you prefer to use an image logo */}
              {/* <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt=""></a>*/}
              <nav className="nav-menu d-none d-lg-block">
                <ul>
                  <li className="active">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="#team">Team</a>
                  </li>
                  {/* <li className="drop-down">
                    <a href>Drop Down</a>
                    <ul>
                      <li>
                        <a href="#">Drop Down 1</a>
                      </li>
                      <li className="drop-down">
                        <a href="#">Deep Drop Down</a>
                        <ul>
                          <li>
                            <a href="#">Deep Drop Down 1</a>
                          </li>
                          <li>
                            <a href="#">Deep Drop Down 2</a>
                          </li>
                          <li>
                            <a href="#">Deep Drop Down 3</a>
                          </li>
                          <li>
                            <a href="#">Deep Drop Down 4</a>
                          </li>
                          <li>
                            <a href="#">Deep Drop Down 5</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Drop Down 4</a>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
              {/* .nav-menu */}
            </div>
          </header>
          {/* End Header */}
          {/* ======= Hero Section ======= */}
          <section id="hero" className="d-flex align-items-center">
            <div className="container" data-aos="zoom-out" data-aos-delay={100}>
              <h1>
                Welcome to <span>Oktara Lemindo</span>
              </h1>
              <h2>
                We are team of talanted designers making websites with Bootstrap
              </h2>
              <div className="d-flex">
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
                <a
                  href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                  className="venobox btn-watch-video"
                  data-vbtype="video"
                  data-autoplay="true"
                >
                  {" "}
                  Watch Video <i className="icofont-play-alt-2" />
                </a>
              </div>
            </div>
          </section>
          {/* End Hero */}
          <main id="main">
            {/* ======= Featured Services Section ======= */}
            <section id="featured-services" className="featured-services">
              <div className="container" data-aos="fade-up">
                <div className="row">
                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div
                      className="icon-box"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="icon">
                        <i className="bx bxl-dribbble" />
                      </div>
                      <h4 className="title">
                        <a href>Lorem Ipsum</a>
                      </h4>
                      <p className="description">
                        Voluptatum deleniti atque corrupti quos dolores et quas
                        molestias excepturi
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div
                      className="icon-box"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <div className="icon">
                        <i className="bx bx-file" />
                      </div>
                      <h4 className="title">
                        <a href>Sed ut perspiciatis</a>
                      </h4>
                      <p className="description">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div
                      className="icon-box"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <div className="icon">
                        <i className="bx bx-tachometer" />
                      </div>
                      <h4 className="title">
                        <a href>Magni Dolores</a>
                      </h4>
                      <p className="description">
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div
                      className="icon-box"
                      data-aos="fade-up"
                      data-aos-delay={400}
                    >
                      <div className="icon">
                        <i className="bx bx-world" />
                      </div>
                      <h4 className="title">
                        <a href>Nemo Enim</a>
                      </h4>
                      <p className="description">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Featured Services Section */}
            {/* ======= About Section ======= */}
            <section id="about" className="about section-bg">
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <h2>About</h2>
                  <h3>
                    Find Out More <span>About Us</span>
                  </h3>
                  <p>
                    Ut possimus qui ut temporibus culpa velit eveniet modi omnis
                    est adipisci expedita at voluptas atque vitae autem.
                  </p>
                </div>
                <div className="row">
                  <div
                    className="col-lg-6"
                    data-aos="zoom-out"
                    data-aos-delay={100}
                  >
                    <img src="assets/img/about.jpg" className="img-fluid" alt />
                  </div>
                  <div
                    className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <h3>
                      Voluptatem dignissimos provident quasi corporis voluptates
                      sit assumenda.
                    </h3>
                    <p className="font-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bx bx-store-alt" />
                        <div>
                          <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                          <p>
                            Magni facilis facilis repellendus cum excepturi
                            quaerat praesentium libre trade
                          </p>
                        </div>
                      </li>
                      <li>
                        <i className="bx bx-images" />
                        <div>
                          <h5>
                            Magnam soluta odio exercitationem reprehenderi
                          </h5>
                          <p>
                            Quo totam dolorum at pariatur aut distinctio dolorum
                            laudantium illo direna pasata redi
                          </p>
                        </div>
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* End About Section */}
            {/* ======= Skills Section ======= */}
            <section id="skills" className="skills">
              <div className="container" data-aos="fade-up">
                <div className="row skills-content">
                  <div className="col-lg-6">
                    <div className="progress">
                      <span className="skill">
                        HTML <i className="val">100%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="progress">
                      <span className="skill">
                        CSS <i className="val">90%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="progress">
                      <span className="skill">
                        JavaScript <i className="val">75%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="progress">
                      <span className="skill">
                        PHP <i className="val">80%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="progress">
                      <span className="skill">
                        WordPress/CMS <i className="val">90%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="progress">
                      <span className="skill">
                        Photoshop <i className="val">55%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={55}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Skills Section */}
            {/* ======= Counts Section ======= */}
            <section id="counts" className="counts">
              <div className="container" data-aos="fade-up">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="count-box">
                      <i className="icofont-simple-smile" />
                      <span data-toggle="counter-up">232</span>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                    <div className="count-box">
                      <i className="icofont-document-folder" />
                      <span data-toggle="counter-up">521</span>
                      <p>Projects</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                    <div className="count-box">
                      <i className="icofont-live-support" />
                      <span data-toggle="counter-up">1,463</span>
                      <p>Hours Of Support</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                    <div className="count-box">
                      <i className="icofont-users-alt-5" />
                      <span data-toggle="counter-up">15</span>
                      <p>Hard Workers</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Counts Section */}
            {/* ======= Clients Section ======= */}
            <section id="clients" className="clients section-bg">
              <div className="container" data-aos="zoom-in">
                <div className="row">
                  <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <img
                      src="assets/img/clients/client-1.png"
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <img
                      src="assets/img/clients/client-2.png"
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <img
                      src="assets/img/clients/client-3.png"
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <img
                      src="assets/img/clients/client-4.png"
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <img
                      src="assets/img/clients/client-5.png"
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <img
                      src="assets/img/clients/client-6.png"
                      className="img-fluid"
                      alt
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* End Clients Section */}
            {/* ======= Services Section ======= */}
            <section id="services" className="services">
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <h2>Services</h2>
                  <h3>
                    Check our <span>Services</span>
                  </h3>
                  <p>
                    Ut possimus qui ut temporibus culpa velit eveniet modi omnis
                    est adipisci expedita at voluptas atque vitae autem.
                  </p>
                </div>
                <div className="row">
                  <div
                    className="col-lg-4 col-md-6 d-flex align-items-stretch"
                    data-aos="zoom-in"
                    data-aos-delay={100}
                  >
                    <div className="icon-box">
                      <div className="icon">
                        <i className="bx bxl-dribbble" />
                      </div>
                      <h4>
                        <a href>Lorem Ipsum</a>
                      </h4>
                      <p>
                        Voluptatum deleniti atque corrupti quos dolores et quas
                        molestias excepturi
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                    data-aos="zoom-in"
                    data-aos-delay={200}
                  >
                    <div className="icon-box">
                      <div className="icon">
                        <i className="bx bx-file" />
                      </div>
                      <h4>
                        <a href>Sed ut perspiciatis</a>
                      </h4>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                    data-aos="zoom-in"
                    data-aos-delay={300}
                  >
                    <div className="icon-box">
                      <div className="icon">
                        <i className="bx bx-tachometer" />
                      </div>
                      <h4>
                        <a href>Magni Dolores</a>
                      </h4>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                    data-aos="zoom-in"
                    data-aos-delay={100}
                  >
                    <div className="icon-box">
                      <div className="icon">
                        <i className="bx bx-world" />
                      </div>
                      <h4>
                        <a href>Nemo Enim</a>
                      </h4>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                    data-aos="zoom-in"
                    data-aos-delay={200}
                  >
                    <div className="icon-box">
                      <div className="icon">
                        <i className="bx bx-slideshow" />
                      </div>
                      <h4>
                        <a href>Dele cardo</a>
                      </h4>
                      <p>
                        Quis consequatur saepe eligendi voluptatem consequatur
                        dolor consequuntur
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                    data-aos="zoom-in"
                    data-aos-delay={300}
                  >
                    <div className="icon-box">
                      <div className="icon">
                        <i className="bx bx-arch" />
                      </div>
                      <h4>
                        <a href>Divera don</a>
                      </h4>
                      <p>
                        Modi nostrum vel laborum. Porro fugit error sit minus
                        sapiente sit aspernatur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Services Section */}
            {/* ======= Testimonials Section ======= */}
            <section id="testimonials" className="testimonials">
              <div className="container" data-aos="zoom-in">
                <div className="owl-carousel testimonials-carousel">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-1.jpg"
                      className="testimonial-img"
                      alt
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                  </div>
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-2.jpg"
                      className="testimonial-img"
                      alt
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Export tempor illum tamen malis malis eram quae irure esse
                      labore quem cillum quid cillum eram malis quorum velit
                      fore eram velit sunt aliqua noster fugiat irure amet legam
                      anim culpa.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                  </div>
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-3.jpg"
                      className="testimonial-img"
                      alt
                    />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Enim nisi quem export duis labore cillum quae magna enim
                      sint quorum nulla quem veniam duis minim tempor labore
                      quem eram duis noster aute amet eram fore quis sint minim.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                  </div>
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-4.jpg"
                      className="testimonial-img"
                      alt
                    />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                      multos export minim fugiat minim velit minim dolor enim
                      duis veniam ipsum anim magna sunt elit fore quem dolore
                      labore illum veniam.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                  </div>
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-5.jpg"
                      className="testimonial-img"
                      alt
                    />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Quis quorum aliqua sint quem legam fore sunt eram irure
                      aliqua veniam tempor noster veniam enim culpa labore duis
                      sunt culpa nulla illum cillum fugiat legam esse veniam
                      culpa fore nisi cillum quid.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* End Testimonials Section */}
            {/* ======= Portfolio Section ======= */}
            <section id="portfolio" className="portfolio">
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <h2>Portfolio</h2>
                  <h3>
                    Check our <span>Portfolio</span>
                  </h3>
                  <p>
                    Ut possimus qui ut temporibus culpa velit eveniet modi omnis
                    est adipisci expedita at voluptas atque vitae autem.
                  </p>
                </div>
                <div className="row" data-aos="fade-up" data-aos-delay={100}>
                  <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                      <li data-filter="*" className="filter-active">
                        All
                      </li>
                      <li data-filter=".filter-app">App</li>
                      <li data-filter=".filter-card">Card</li>
                      <li data-filter=".filter-web">Web</li>
                    </ul>
                  </div>
                </div>
                <div
                  className="row portfolio-container"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <img
                      src="assets/img/portfolio/portfolio-1.jpg"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>App 1</h4>
                      <p>App</p>
                      <a
                        href="assets/img/portfolio/portfolio-1.jpg"
                        data-gall="portfolioGallery"
                        className="venobox preview-link"
                        title="App 1"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img
                      src="assets/img/portfolio/portfolio-2.jpg"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>Web 3</h4>
                      <p>Web</p>
                      <a
                        href="assets/img/portfolio/portfolio-2.jpg"
                        data-gall="portfolioGallery"
                        className="venobox preview-link"
                        title="Web 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <img
                      src="assets/img/portfolio/portfolio-3.jpg"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>App 2</h4>
                      <p>App</p>
                      <a
                        href="assets/img/portfolio/portfolio-3.jpg"
                        data-gall="portfolioGallery"
                        className="venobox preview-link"
                        title="App 2"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <img
                      src="assets/img/portfolio/portfolio-4.jpg"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>Card 2</h4>
                      <p>Card</p>
                      <a
                        href="assets/img/portfolio/portfolio-4.jpg"
                        data-gall="portfolioGallery"
                        className="venobox preview-link"
                        title="Card 2"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img
                      src="assets/img/portfolio/portfolio-5.jpg"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>Web 2</h4>
                      <p>Web</p>
                      <a
                        href="assets/img/portfolio/portfolio-5.jpg"
                        data-gall="portfolioGallery"
                        className="venobox preview-link"
                        title="Web 2"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <img
                      src="assets/img/portfolio/portfolio-6.jpg"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>App 3</h4>
                      <p>App</p>
                      <a
                        href="assets/img/portfolio/portfolio-6.jpg"
                        data-gall="portfolioGallery"
                        className="venobox preview-link"
                        title="App 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <img
                      src="assets/img/portfolio/portfolio-7.jpg"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>Card 1</h4>
                      <p>Card</p>
                      <a
                        href="assets/img/portfolio/portfolio-7.jpg"
                        data-gall="portfolioGallery"
                        className="venobox preview-link"
                        title="Card 1"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <img
                      src="assets/img/portfolio/portfolio-8.jpg"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>Card 3</h4>
                      <p>Card</p>
                      <a
                        href="assets/img/portfolio/portfolio-8.jpg"
                        data-gall="portfolioGallery"
                        className="venobox preview-link"
                        title="Card 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img
                      src="assets/img/portfolio/portfolio-9.jpg"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>Web 3</h4>
                      <p>Web</p>
                      <a
                        href="assets/img/portfolio/portfolio-9.jpg"
                        data-gall="portfolioGallery"
                        className="venobox preview-link"
                        title="Web 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Portfolio Section */}
            {/* ======= Team Section ======= */}
            <section id="team" className="team section-bg">
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <h2>Team</h2>
                  <h3>
                    Our Hardworking <span>Team</span>
                  </h3>
                  <p>
                    Ut possimus qui ut temporibus culpa velit eveniet modi omnis
                    est adipisci expedita at voluptas atque vitae autem.
                  </p>
                </div>
                <div className="row">
                  <div
                    className="col-lg-3 col-md-6 d-flex align-items-stretch"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <div className="member">
                      <div className="member-img">
                        <img
                          src="assets/img/team/team-1.jpg"
                          className="img-fluid"
                          alt
                        />
                        <div className="social">
                          <a href>
                            <i className="icofont-twitter" />
                          </a>
                          <a href>
                            <i className="icofont-facebook" />
                          </a>
                          <a href>
                            <i className="icofont-instagram" />
                          </a>
                          <a href>
                            <i className="icofont-linkedin" />
                          </a>
                        </div>
                      </div>
                      <div className="member-info">
                        <h4>Walter White</h4>
                        <span>Chief Executive Officer</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 d-flex align-items-stretch"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <div className="member">
                      <div className="member-img">
                        <img
                          src="assets/img/team/team-2.jpg"
                          className="img-fluid"
                          alt
                        />
                        <div className="social">
                          <a href>
                            <i className="icofont-twitter" />
                          </a>
                          <a href>
                            <i className="icofont-facebook" />
                          </a>
                          <a href>
                            <i className="icofont-instagram" />
                          </a>
                          <a href>
                            <i className="icofont-linkedin" />
                          </a>
                        </div>
                      </div>
                      <div className="member-info">
                        <h4>Sarah Jhonson</h4>
                        <span>Product Manager</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 d-flex align-items-stretch"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <div className="member">
                      <div className="member-img">
                        <img
                          src="assets/img/team/team-3.jpg"
                          className="img-fluid"
                          alt
                        />
                        <div className="social">
                          <a href>
                            <i className="icofont-twitter" />
                          </a>
                          <a href>
                            <i className="icofont-facebook" />
                          </a>
                          <a href>
                            <i className="icofont-instagram" />
                          </a>
                          <a href>
                            <i className="icofont-linkedin" />
                          </a>
                        </div>
                      </div>
                      <div className="member-info">
                        <h4>William Anderson</h4>
                        <span>CTO</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 d-flex align-items-stretch"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <div className="member">
                      <div className="member-img">
                        <img
                          src="assets/img/team/team-4.jpg"
                          className="img-fluid"
                          alt
                        />
                        <div className="social">
                          <a href>
                            <i className="icofont-twitter" />
                          </a>
                          <a href>
                            <i className="icofont-facebook" />
                          </a>
                          <a href>
                            <i className="icofont-instagram" />
                          </a>
                          <a href>
                            <i className="icofont-linkedin" />
                          </a>
                        </div>
                      </div>
                      <div className="member-info">
                        <h4>Amanda Jepson</h4>
                        <span>Accountant</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Team Section */}
            {/* ======= Pricing Section ======= */}
            {/* <section id="pricing" className="pricing">
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <h2>Pricing</h2>
                  <h3>
                    Check our <span>Pricing</span>
                  </h3>
                  <p>
                    Ut possimus qui ut temporibus culpa velit eveniet modi omnis
                    est adipisci expedita at voluptas atque vitae autem.
                  </p>
                </div>
                <div className="row">
                  <div
                    className="col-lg-3 col-md-6"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <div className="box">
                      <h3>Free</h3>
                      <h4>
                        <sup>$</sup>0<span> / month</span>
                      </h4>
                      <ul>
                        <li>Aida dere</li>
                        <li>Nec feugiat nisl</li>
                        <li>Nulla at volutpat dola</li>
                        <li className="na">Pharetra massa</li>
                        <li className="na">Massa ultricies mi</li>
                      </ul>
                      <div className="btn-wrap">
                        <a href="#" className="btn-buy">
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 mt-4 mt-md-0"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <div className="box featured">
                      <h3>Business</h3>
                      <h4>
                        <sup>$</sup>19<span> / month</span>
                      </h4>
                      <ul>
                        <li>Aida dere</li>
                        <li>Nec feugiat nisl</li>
                        <li>Nulla at volutpat dola</li>
                        <li>Pharetra massa</li>
                        <li className="na">Massa ultricies mi</li>
                      </ul>
                      <div className="btn-wrap">
                        <a href="#" className="btn-buy">
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 mt-4 mt-lg-0"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <div className="box">
                      <h3>Developer</h3>
                      <h4>
                        <sup>$</sup>29<span> / month</span>
                      </h4>
                      <ul>
                        <li>Aida dere</li>
                        <li>Nec feugiat nisl</li>
                        <li>Nulla at volutpat dola</li>
                        <li>Pharetra massa</li>
                        <li>Massa ultricies mi</li>
                      </ul>
                      <div className="btn-wrap">
                        <a href="#" className="btn-buy">
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 mt-4 mt-lg-0"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <div className="box">
                      <span className="advanced">Advanced</span>
                      <h3>Ultimate</h3>
                      <h4>
                        <sup>$</sup>49<span> / month</span>
                      </h4>
                      <ul>
                        <li>Aida dere</li>
                        <li>Nec feugiat nisl</li>
                        <li>Nulla at volutpat dola</li>
                        <li>Pharetra massa</li>
                        <li>Massa ultricies mi</li>
                      </ul>
                      <div className="btn-wrap">
                        <a href="#" className="btn-buy">
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            {/* End Pricing Section */}
            {/* ======= Frequently Asked Questions Section ======= */}
            <section id="faq" className="faq section-bg">
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <h2>F.A.Q</h2>
                  <h3>
                    Frequently Asked <span>Questions</span>
                  </h3>
                  <p>
                    Ut possimus qui ut temporibus culpa velit eveniet modi omnis
                    est adipisci expedita at voluptas atque vitae autem.
                  </p>
                </div>
                <ul
                  className="faq-list"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <li>
                    <a data-toggle="collapse" className href="#faq1">
                      Non consectetur a erat nam at lectus urna duis?{" "}
                      <i className="icofont-simple-up" />
                    </a>
                    <div
                      id="faq1"
                      className="collapse show"
                      data-parent=".faq-list"
                    >
                      <p>
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis
                        urna id volutpat lacus laoreet non curabitur gravida.
                        Venenatis lectus magna fringilla urna porttitor rhoncus
                        dolor purus non.
                      </p>
                    </div>
                  </li>
                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq2"
                      className="collapsed"
                    >
                      Feugiat scelerisque varius morbi enim nunc faucibus a
                      pellentesque? <i className="icofont-simple-up" />
                    </a>
                    <div id="faq2" className="collapse" data-parent=".faq-list">
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </p>
                    </div>
                  </li>
                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq3"
                      className="collapsed"
                    >
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi? <i className="icofont-simple-up" />
                    </a>
                    <div id="faq3" className="collapse" data-parent=".faq-list">
                      <p>
                        Eleifend mi in nulla posuere sollicitudin aliquam
                        ultrices sagittis orci. Faucibus pulvinar elementum
                        integer enim. Sem nulla pharetra diam sit amet nisl
                        suscipit. Rutrum tellus pellentesque eu tincidunt.
                        Lectus urna duis convallis convallis tellus. Urna
                        molestie at elementum eu facilisis sed odio morbi quis
                      </p>
                    </div>
                  </li>
                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq4"
                      className="collapsed"
                    >
                      Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?{" "}
                      <i className="icofont-simple-up" />
                    </a>
                    <div id="faq4" className="collapse" data-parent=".faq-list">
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </p>
                    </div>
                  </li>
                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq5"
                      className="collapsed"
                    >
                      Tempus quam pellentesque nec nam aliquam sem et tortor
                      consequat? <i className="icofont-simple-up" />
                    </a>
                    <div id="faq5" className="collapse" data-parent=".faq-list">
                      <p>
                        Molestie a iaculis at erat pellentesque adipiscing
                        commodo. Dignissim suspendisse in est ante in. Nunc vel
                        risus commodo viverra maecenas accumsan. Sit amet nisl
                        suscipit adipiscing bibendum est. Purus gravida quis
                        blandit turpis cursus in
                      </p>
                    </div>
                  </li>
                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq6"
                      className="collapsed"
                    >
                      Tortor vitae purus faucibus ornare. Varius vel pharetra
                      vel turpis nunc eget lorem dolor?{" "}
                      <i className="icofont-simple-up" />
                    </a>
                    <div id="faq6" className="collapse" data-parent=".faq-list">
                      <p>
                        Laoreet sit amet cursus sit amet dictum sit amet justo.
                        Mauris vitae ultricies leo integer malesuada nunc vel.
                        Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                        eget lorem dolor sed. Ut venenatis tellus in metus
                        vulputate eu scelerisque. Pellentesque diam volutpat
                        commodo sed egestas egestas fringilla phasellus
                        faucibus. Nibh tellus molestie nunc non blandit massa
                        enim nec.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            {/* End Frequently Asked Questions Section */}
            {/* ======= Contact Section ======= */}
            <section id="contact" className="contact">
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <h2>Contact</h2>
                  <h3>
                    <span>Contact Us</span>
                  </h3>
                  <p>
                    Ut possimus qui ut temporibus culpa velit eveniet modi omnis
                    est adipisci expedita at voluptas atque vitae autem.
                  </p>
                </div>
                <div className="row" data-aos="fade-up" data-aos-delay={100}>
                  <div className="col-lg-6">
                    <div className="info-box mb-4">
                      <i className="bx bx-map" />
                      <h3>Our Address</h3>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="info-box  mb-4">
                      <i className="bx bx-envelope" />
                      <h3>Email Us</h3>
                      <p>contact@example.com</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="info-box  mb-4">
                      <i className="bx bx-phone-call" />
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55</p>
                    </div>
                  </div>
                </div>
                <div className="row" data-aos="fade-up" data-aos-delay={100}>
                  <div className="col-lg-6 ">
                    <iframe
                      className="mb-4 mb-lg-0"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                      frameBorder={0}
                      style={{ border: 0, width: "100%", height: 384 }}
                      allowFullScreen
                    />
                  </div>
                  <div className="col-lg-6">
                    <form
                      action="forms/contact.php"
                      method="post"
                      role="form"
                      className="php-email-form"
                    >
                      <div className="form-row">
                        <div className="col form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                            data-rule="minlen:4"
                            data-msg="Please enter at least 4 chars"
                          />
                          <div className="validate" />
                        </div>
                        <div className="col form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            data-rule="email"
                            data-msg="Please enter a valid email"
                          />
                          <div className="validate" />
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 8 chars of subject"
                        />
                        <div className="validate" />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          rows={5}
                          data-rule="required"
                          data-msg="Please write something for us"
                          placeholder="Message"
                          defaultValue={""}
                        />
                        <div className="validate" />
                      </div>
                      <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">
                          Your message has been sent. Thank you!
                        </div>
                      </div>
                      <div className="text-center">
                        <button type="submit">Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            {/* End Contact Section */}
          </main>
          {/* End #main */}
          {/* ======= Footer ======= */}
          <footer id="footer">
            {/* <div className="footer-newsletter">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <h4>Join Our Newsletter</h4>
                    <p>
                      Tamen quem nulla quae legam multos aute sint culpa legam
                      noster magna
                    </p>
                    <form action method="post">
                      <input type="email" name="email" />
                      <input type="submit" defaultValue="Subscribe" />
                    </form>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6 footer-contact">
                    <h3>
                      BizLand<span>.</span>
                    </h3>
                    <p>
                      A108 Adam Street <br />
                      New York, NY 535022
                      <br />
                      United States <br />
                      <br />
                      <strong>Phone:</strong> +1 5589 55488 55
                      <br />
                      <strong>Email:</strong> info@example.com
                      <br />
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li>
                        <i className="bx bx-chevron-right" />{" "}
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />{" "}
                        <a href="#">About us</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />{" "}
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />{" "}
                        <a href="#">Terms of service</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />{" "}
                        <a href="#">Privacy policy</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                      <li>
                        <i className="bx bx-chevron-right" />{" "}
                        <a href="#">Web Design</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />{" "}
                        <a href="#">Web Development</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />{" "}
                        <a href="#">Product Management</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />{" "}
                        <a href="#">Marketing</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />{" "}
                        <a href="#">Graphic Design</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Our Social Networks</h4>
                    <p>
                      Cras fermentum odio eu feugiat lide par naso tierra videa
                      magna derita valies
                    </p>
                    <div className="social-links mt-3">
                      <a href="#" className="twitter">
                        <i className="bx bxl-twitter" />
                      </a>
                      <a href="#" className="facebook">
                        <i className="bx bxl-facebook" />
                      </a>
                      <a href="#" className="instagram">
                        <i className="bx bxl-instagram" />
                      </a>
                      <a href="#" className="google-plus">
                        <i className="bx bxl-skype" />
                      </a>
                      <a href="#" className="linkedin">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container py-4">
              <div className="copyright">
                © Copyright{" "}
                <strong>
                  <span>BizLand</span>
                </strong>
                . All Rights Reserved
              </div>
              <div className="credits">
                {/* All the links in the footer should remain intact. */}
                {/* You can delete the links only if you purchased the pro version. */}
                {/* Licensing information: https://bootstrapmade.com/license/ */}
                {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/bizland-bootstrap-business-template/ */}
                Designed by{" "}
                <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
          </footer>
          {/* End Footer */}
          <div id="preloader" />
          <a href="#" className="back-to-top">
            <i className="icofont-simple-up" />
          </a>
        </div>
      </div>
    );
  }
}

export default LandingPage;
