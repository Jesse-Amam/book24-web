import Head from "next/head";
import React, { Component} from "react";
import Header from '../components/header';
import SignInModal from '../components/signInModal';
import Footer from "../components/footer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async componentDidMount() {}
  
  render() {
    return (
      <div>
        <Head>
             <meta name="description" content="SPARKER - Premium directory and listings template by Ansonika."/>
    <meta name="author" content="Ansonika"/>
    <title>SPARKER | Premium directory and listings template by Ansonika.</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
    <link href="css/bootstrap.min.css" rel="stylesheet"/>
    <link href="css/style.css" rel="stylesheet"/>
	<link href="css/vendors.css" rel="stylesheet"/>
    <link href="css/custom.css" rel="stylesheet"/>
        </Head>
        <div id="page">
		<Header/>
	
	<main className="pattern">
		<section className="hero_single version_2">
			<div className="wrapper">
				<div className="container">
					<h3>Find what you need!</h3>
					<p>Discover top rated hotels, events and book tours around the world</p>
					<form method="post" action="grid-listings-filterscol">
						<div className="row no-gutters custom-search-input-2">
							<div className="col-lg-4">
								<div className="form-group">
									<input className="form-control" type="text" placeholder="What are you looking for..."/>
									<i className="icon_search"></i>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="form-group">
									<input className="form-control" type="text" placeholder="Where"/>
									<i className="icon_pin_alt"></i>
								</div>
							</div>
							<div className="col-lg-3">
								<select className="wide">
									<option>All Categories</option>	
									<option>Shops</option>
									<option>Hotels</option>
									<option>Restaurants</option>
									<option>Bars</option>
									<option>Events</option>
									<option>Fitness</option>
								</select>
							</div>
							<div className="col-lg-2">
								<input type="submit" value="Search"/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
		<div className="main_categories">
			<div className="container">
				<ul className="clearfix">
					{/* <li>
						<a href="/grid-listings-filterscol">
							<i className="icon-shop"></i>
							<h3>Shops</h3>
						</a>
					</li> */}
					<li>
						<a href="/grid-listings-filterscol">
							<i className="icon-lodging"></i>
							<h3>Hotels</h3>
						</a>
					</li>
					<li>
						<a href="/grid-listings-filterscol">
							<i className="icon-compass"></i>
							<h3>Cars</h3>
						</a>
					</li>
					<li>
						<a href="/grid-listings-filterscol">
							<i className="icon-bar"></i>
							<h3>Rentals</h3>
						</a>
					</li>
					<li>
						<a href="/grid-listings-filterscol">
							<i className="icon-dot-3"></i>
							<h3>Tour</h3>
						</a>
					</li>
					<li>
						<a href="/grid-listings-filterscol">
							<i className="icon-lodging"></i>
							<h3>Events</h3>
						</a>
					</li>

					<li>
						<a href="/grid-listings-filterscol">
							<i className="icon-dot-3"></i>
							<h3>Things to Do</h3>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div className="container margin_60_35">
			<div className="main_title_3">
				<span></span>
				<h2>Popular Hotels</h2>
				<p>A compiled list of popular hotels around the world</p>
				<a href="/grid-listings-filterscol">See all</a>
			</div>
			<div className="row add_bottom_30">
				<div className="col-xs-12 col-sm6 col-md-3">
				<div className="item has-matchHeight">
				<div className="featured-image">
                  <div className="featured">Bestseller</div>
				  <a href="/detail-hotel" className="grid_item small">
							<img src="/images/sheraton.jpg" alt=""
								className="img-responsive img-full"
							/>
					</a>
				</div>
				<h5>
				<a href="/detail-hotel" 
				className="st-link c-main">Four Points By Sheraton</a></h5>
				<div className="sub-title">
				<i className="input-icon field-icon fa">
				<svg width="15px" height="15px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    {/* <!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch --> */}
    
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Ico_maps" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g id="Group" transform="translate(4.000000, 0.000000)" stroke="#666666">
            <g id="pin-1" transform="translate(-0.000000, 0.000000)">
                <path d="M15.75,8.25 C15.75,12.471 12.817,14.899 10.619,17.25 C9.303,18.658 8.25,23.25 8.25,23.25 C8.25,23.25 7.2,18.661 5.887,17.257 C3.687,14.907 0.75,12.475 0.75,8.25 C0.75,4.10786438 4.10786438,0.75 8.25,0.75 C12.3921356,0.75 15.75,4.10786438 15.75,8.25 Z" id="Shape"></path>
                <circle id="Oval" cx="8.25" cy="8.25" r="3"></circle>
            </g>
        </g>
    </g>
</svg></i>Plot 9/10 Block, 2 Oniru Chieftaincy Estate, Victoria Island</div>
					</div>
					<div>
            <div className="reviews">
                <span className="rate">0                    /5 Not Rated                </span>
                <span className="summary">
                    No Review                </span>
            </div>
            <div className="price-wrapper">
                <i className="input-icon field-icon fa"><svg width="10px" height="16px" viewBox="0 0 11 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    {/* <!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch --> */}
    
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Hotel-layout" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Room_Only_Detail_1" transform="translate(-135.000000, -4858.000000)" fill="#ffab53" fill-rule="nonzero">
            <g id="nearby-hotel" transform="translate(130.000000, 4334.000000)">
                <g id="h1-g" transform="translate(5.000000, 136.000000)">
                    <g id="hotel-grid">
                        <g id="price" transform="translate(0.000000, 383.000000)">
                            <g id="thunder" transform="translate(0.000000, 5.000000)">
                                <path d="M10.0143234,6.99308716 C9.91102517,6.83252576 9.73362166,6.73708716 9.54386728,6.73708716 L5.61404272,6.73708716 L5.61404272,0.561648567 C5.61404272,0.296666111 5.42877956,0.0676134793 5.16941114,0.0125959355 C4.90555149,-0.0435444154 4.64730587,0.0923152337 4.5395164,0.333718743 L0.0482883306,10.4389819 C-0.0291853536,10.6118942 -0.0123432484,10.8139994 0.0909549973,10.9723152 C0.194253243,11.1317538 0.371656752,11.2283152 0.561411138,11.2283152 L4.4912357,11.2283152 L4.4912357,17.4037538 C4.4912357,17.6687363 4.67649886,17.8977889 4.93586728,17.9528065 C4.97516552,17.9606661 5.01446377,17.9651573 5.05263921,17.9651573 C5.27046377,17.9651573 5.47369184,17.8382801 5.56576201,17.6316837 L10.0569901,7.5264205 C10.133341,7.35238541 10.1187445,7.15252576 10.0143234,6.99308716 Z" id="Shape"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg></i>                from <span className="price">{'\u20A6'}69,600</span><span className="unit">/night</span>
            </div>
        </div>
				</div>
				<div className="col-xs-12 col-sm6 col-md-3">
				<div className="item has-matchHeight">
				<div className="featured-image">
                  <div className="featured">Bestseller</div>
				  <a href="/detail-hotel" className="grid_item small">
							<img src="/images/federalPalace.jpg" alt=""
								className="img-responsive img-full"
							/>
					</a>
				</div>
				<h5>
				<a href="/detail-hotel" 
				className="st-link c-main">Federal Palace Hotel Lagos</a></h5>
				<div className="sub-title">
				<i className="input-icon field-icon fa">
				<svg width="15px" height="15px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    {/* <!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch --> */}
    
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Ico_maps" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g id="Group" transform="translate(4.000000, 0.000000)" stroke="#666666">
            <g id="pin-1" transform="translate(-0.000000, 0.000000)">
                <path d="M15.75,8.25 C15.75,12.471 12.817,14.899 10.619,17.25 C9.303,18.658 8.25,23.25 8.25,23.25 C8.25,23.25 7.2,18.661 5.887,17.257 C3.687,14.907 0.75,12.475 0.75,8.25 C0.75,4.10786438 4.10786438,0.75 8.25,0.75 C12.3921356,0.75 15.75,4.10786438 15.75,8.25 Z" id="Shape"></path>
                <circle id="Oval" cx="8.25" cy="8.25" r="3"></circle>
            </g>
        </g>
    </g>
</svg></i>6-8 Ahmadu Bello Way, Victoria Island, Lagos</div>
					</div>
					<div>
            <div className="reviews">
                <span className="rate">0                    /5 Not Rated                </span>
                <span className="summary">
                    No Review                </span>
            </div>
            <div className="price-wrapper">
                <i className="input-icon field-icon fa"><svg width="10px" height="16px" viewBox="0 0 11 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    {/* <!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch --> */}
    
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Hotel-layout" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Room_Only_Detail_1" transform="translate(-135.000000, -4858.000000)" fill="#ffab53" fill-rule="nonzero">
            <g id="nearby-hotel" transform="translate(130.000000, 4334.000000)">
                <g id="h1-g" transform="translate(5.000000, 136.000000)">
                    <g id="hotel-grid">
                        <g id="price" transform="translate(0.000000, 383.000000)">
                            <g id="thunder" transform="translate(0.000000, 5.000000)">
                                <path d="M10.0143234,6.99308716 C9.91102517,6.83252576 9.73362166,6.73708716 9.54386728,6.73708716 L5.61404272,6.73708716 L5.61404272,0.561648567 C5.61404272,0.296666111 5.42877956,0.0676134793 5.16941114,0.0125959355 C4.90555149,-0.0435444154 4.64730587,0.0923152337 4.5395164,0.333718743 L0.0482883306,10.4389819 C-0.0291853536,10.6118942 -0.0123432484,10.8139994 0.0909549973,10.9723152 C0.194253243,11.1317538 0.371656752,11.2283152 0.561411138,11.2283152 L4.4912357,11.2283152 L4.4912357,17.4037538 C4.4912357,17.6687363 4.67649886,17.8977889 4.93586728,17.9528065 C4.97516552,17.9606661 5.01446377,17.9651573 5.05263921,17.9651573 C5.27046377,17.9651573 5.47369184,17.8382801 5.56576201,17.6316837 L10.0569901,7.5264205 C10.133341,7.35238541 10.1187445,7.15252576 10.0143234,6.99308716 Z" id="Shape"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg></i>                from <span className="price">{'\u20A6'}62,400</span><span className="unit">/night</span>
            </div>
        </div>
				</div>
				<div className="col-xs-12 col-sm6 col-md-3">
				<div className="item has-matchHeight">
				<div className="featured-image">
                  <div className="featured">Bestseller</div>
				  <a href="/detail-hotel" className="grid_item small">
							<img src="/images/radissonBlu.jpg" alt=""
								className="img-responsive img-full"
							/>
					</a>
				</div>
				<h5>
				<a href="/detail-hotel" 
				className="st-link c-main">Radisson Blue, Vi Lagos</a></h5>
				<div className="sub-title">
				<i className="input-icon field-icon fa">
				<svg width="15px" height="15px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    {/* <!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch --> */}
    
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Ico_maps" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g id="Group" transform="translate(4.000000, 0.000000)" stroke="#666666">
            <g id="pin-1" transform="translate(-0.000000, 0.000000)">
                <path d="M15.75,8.25 C15.75,12.471 12.817,14.899 10.619,17.25 C9.303,18.658 8.25,23.25 8.25,23.25 C8.25,23.25 7.2,18.661 5.887,17.257 C3.687,14.907 0.75,12.475 0.75,8.25 C0.75,4.10786438 4.10786438,0.75 8.25,0.75 C12.3921356,0.75 15.75,4.10786438 15.75,8.25 Z" id="Shape"></path>
                <circle id="Oval" cx="8.25" cy="8.25" r="3"></circle>
            </g>
        </g>
    </g>
</svg></i>1a Ozumba Mbadiwe Ave, Victoria Island, Lagos</div>
					</div>
					<div>
            <div className="reviews">
                <span className="rate">0                    /5 Not Rated                </span>
                <span className="summary">
                    No Review                </span>
            </div>
            <div className="price-wrapper">
                <i className="input-icon field-icon fa"><svg width="10px" height="16px" viewBox="0 0 11 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    {/* <!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch --> */}
    
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Hotel-layout" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Room_Only_Detail_1" transform="translate(-135.000000, -4858.000000)" fill="#ffab53" fill-rule="nonzero">
            <g id="nearby-hotel" transform="translate(130.000000, 4334.000000)">
                <g id="h1-g" transform="translate(5.000000, 136.000000)">
                    <g id="hotel-grid">
                        <g id="price" transform="translate(0.000000, 383.000000)">
                            <g id="thunder" transform="translate(0.000000, 5.000000)">
                                <path d="M10.0143234,6.99308716 C9.91102517,6.83252576 9.73362166,6.73708716 9.54386728,6.73708716 L5.61404272,6.73708716 L5.61404272,0.561648567 C5.61404272,0.296666111 5.42877956,0.0676134793 5.16941114,0.0125959355 C4.90555149,-0.0435444154 4.64730587,0.0923152337 4.5395164,0.333718743 L0.0482883306,10.4389819 C-0.0291853536,10.6118942 -0.0123432484,10.8139994 0.0909549973,10.9723152 C0.194253243,11.1317538 0.371656752,11.2283152 0.561411138,11.2283152 L4.4912357,11.2283152 L4.4912357,17.4037538 C4.4912357,17.6687363 4.67649886,17.8977889 4.93586728,17.9528065 C4.97516552,17.9606661 5.01446377,17.9651573 5.05263921,17.9651573 C5.27046377,17.9651573 5.47369184,17.8382801 5.56576201,17.6316837 L10.0569901,7.5264205 C10.133341,7.35238541 10.1187445,7.15252576 10.0143234,6.99308716 Z" id="Shape"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg></i>                from <span className="price">{'\u20A6'}82,000</span><span className="unit">/night</span>
            </div>
        </div>
				</div>
				<div className="col-xs-12 col-sm6 col-md-3">
				<div className="item has-matchHeight">
				<div className="featured-image">
                  <div className="featured">Bestseller</div>
				  <a href="/detail-hotel" className="grid_item small">
							<img src="/images/continental.jpg" alt=""
								className="img-responsive img-full"
							/>
					</a>
				</div>
				<h5>
				<a href="/detail-hotel" 
				className="st-link c-main">Lagos Continental Hotel</a></h5>
				<div className="sub-title">
				<i className="input-icon field-icon fa">
				<svg width="15px" height="15px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    {/* <!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch --> */}
    
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Ico_maps" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g id="Group" transform="translate(4.000000, 0.000000)" stroke="#666666">
            <g id="pin-1" transform="translate(-0.000000, 0.000000)">
                <path d="M15.75,8.25 C15.75,12.471 12.817,14.899 10.619,17.25 C9.303,18.658 8.25,23.25 8.25,23.25 C8.25,23.25 7.2,18.661 5.887,17.257 C3.687,14.907 0.75,12.475 0.75,8.25 C0.75,4.10786438 4.10786438,0.75 8.25,0.75 C12.3921356,0.75 15.75,4.10786438 15.75,8.25 Z" id="Shape"></path>
                <circle id="Oval" cx="8.25" cy="8.25" r="3"></circle>
            </g>
        </g>
    </g>
</svg></i>52a Kofo Abayomi St, Victoria Island 101241, Lagos</div>
					</div>
					<div>
            <div className="reviews">
                <span className="rate">0                    /5 Not Rated                </span>
                <span className="summary">
                    No Review                </span>
            </div>
            <div className="price-wrapper">
                <i className="input-icon field-icon fa"><svg width="10px" height="16px" viewBox="0 0 11 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    {/* <!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch --> */}
    
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Hotel-layout" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Room_Only_Detail_1" transform="translate(-135.000000, -4858.000000)" fill="#ffab53" fill-rule="nonzero">
            <g id="nearby-hotel" transform="translate(130.000000, 4334.000000)">
                <g id="h1-g" transform="translate(5.000000, 136.000000)">
                    <g id="hotel-grid">
                        <g id="price" transform="translate(0.000000, 383.000000)">
                            <g id="thunder" transform="translate(0.000000, 5.000000)">
                                <path d="M10.0143234,6.99308716 C9.91102517,6.83252576 9.73362166,6.73708716 9.54386728,6.73708716 L5.61404272,6.73708716 L5.61404272,0.561648567 C5.61404272,0.296666111 5.42877956,0.0676134793 5.16941114,0.0125959355 C4.90555149,-0.0435444154 4.64730587,0.0923152337 4.5395164,0.333718743 L0.0482883306,10.4389819 C-0.0291853536,10.6118942 -0.0123432484,10.8139994 0.0909549973,10.9723152 C0.194253243,11.1317538 0.371656752,11.2283152 0.561411138,11.2283152 L4.4912357,11.2283152 L4.4912357,17.4037538 C4.4912357,17.6687363 4.67649886,17.8977889 4.93586728,17.9528065 C4.97516552,17.9606661 5.01446377,17.9651573 5.05263921,17.9651573 C5.27046377,17.9651573 5.47369184,17.8382801 5.56576201,17.6316837 L10.0569901,7.5264205 C10.133341,7.35238541 10.1187445,7.15252576 10.0143234,6.99308716 Z" id="Shape"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg></i>                from <span className="price">{'\u20A6'}58,000</span><span className="unit">/night</span>
            </div>
        </div>
				</div>
			</div>
			<div className="main_title_3">
				<span></span>
				<h2>Hot Events</h2>
				{/* <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p> */}
				<a href="/grid-listings-filterscol">See all</a>
			</div>
			<br/>
			<div className="row vc_row wpb_row vc_inner">
				<div className="wpb_column column_container col-md-3">
				<div className="vc_column-inner">
				<div className="wpb_wrapper">
				<div className="st-offer-new st-offer-item-new item has-matchHeight" 
				style={{height: "130px"}}>
		        <p className="st_but">
        	<a href="/detail-hotel" className="btn btn-default">Buy Ticket</a>
        </p>
        <div className="img-cover st_ay"></div>
</div>
<div className="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_sep_color_white"><span className="vc_sep_holder vc_sep_holder_l"><span className="vc_sep_line"></span></span><span className="vc_sep_holder vc_sep_holder_r"><span className="vc_sep_line"></span></span>
</div></div></div>
				</div>
				<div className="wpb_column column_container col-md-3">
				<div className="vc_column-inner">
				<div className="wpb_wrapper">
				<div className="st-offer-new st-offer-item-new item has-matchHeight" 
				style={{height: "130px"}}>
		        <p className="st_but">
        	<a href="/detail-hotel" className="btn btn-default">Buy Ticket</a>
        </p>
        <div className="img-cover st_burna"></div>
</div>
<div className="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_sep_color_white"><span className="vc_sep_holder vc_sep_holder_l"><span className="vc_sep_line"></span></span><span className="vc_sep_holder vc_sep_holder_r"><span className="vc_sep_line"></span></span>
</div></div></div>
				</div>
				<div className="wpb_column column_container col-md-3">
				<div className="vc_column-inner">
				<div className="wpb_wrapper">
				<div className="st-offer-new st-offer-item-new item has-matchHeight" 
				style={{height: "130px"}}>
		        <p className="st_but">
        	<a href="/detail-hotel" className="btn btn-default">Buy Ticket</a>
        </p>
        <div className="img-cover st_eko_atlantic"></div>
</div>
<div className="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_sep_color_white"><span className="vc_sep_holder vc_sep_holder_l"><span className="vc_sep_line"></span></span><span className="vc_sep_holder vc_sep_holder_r"><span className="vc_sep_line"></span></span>
</div></div></div>
				</div>
				<div className="wpb_column column_container col-md-3">
				<div className="vc_column-inner">
				<div className="wpb_wrapper">
				<div className="st-offer-new st-offer-item-new item has-matchHeight" 
				style={{height: "130px"}}>
		        <p className="st_but">
        	<a href="/detail-hotel" className="btn btn-default">Buy Ticket</a>
        </p>
        <div className="img-cover st_wass"></div>
</div>
<div className="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_sep_color_white"><span className="vc_sep_holder vc_sep_holder_l"><span className="vc_sep_line"></span></span><span className="vc_sep_holder vc_sep_holder_r"><span className="vc_sep_line"></span></span>
</div></div></div>
				</div></div>
			<div className="main_title_3">
				<span></span>
				<h2>Tour</h2>
				
				{/* <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p> */}
				<a href="/grid-listings-filterscol">See all</a>
			</div>

			<br/>
			<div className="row ">
				<div className="col-xs-12 col-sm-6 col-md-4 has-matchHeight normal-item" style={{height: "323px"}}>
                    <div className="destination-item">
                        <div className="image">
<a className="st-link" href="https://book24.ng/location/lagos/">
                                <img src="/images/lagos.jpg" className="img-responsive"/>
                            </a>
                            <div className="content">
                                <h4 className="title">
                                    <a href="https://book24.ng/location/lagos/">
                                        Lagos                                    </a>
                                </h4>
                                {/* <div className="desc st_hotel">
								<a href="https://book24.ng/search-hotel-full-map/?location_name=Lagos&amp;location_id=9785">
								4 properties</a></div>    */}                        </div> 
                                                    </div>
                    </div>
                </div>
				<div className="col-xs-12 col-sm-6 col-md-4 has-matchHeight normal-item" style={{height: "323px"}}>
                    <div className="destination-item">
                        <div className="image">
<a className="st-link" href="https://book24.ng/location/lagos/">
                                <img src="/images/abuja.jpg" className="img-responsive"/>
                            </a>
                            <div className="content">
                                <h4 className="title">
                                    <a href="https://book24.ng/location/lagos/">
                                        Abuja                                    </a>
                                </h4>
                                {/* <div className="desc st_hotel">
								<a href="https://book24.ng/search-hotel-full-map/?location_name=Lagos&amp;location_id=9785">
								4 properties</a></div>    */}                        </div> 
                                                    </div>
                    </div>
                </div>
				<div className="col-xs-12 col-sm-6 col-md-4 has-matchHeight normal-item" style={{height: "323px"}}>
                    <div className="destination-item">
                        <div className="image">
<a className="st-link" href="https://book24.ng/location/lagos/">
                                <img src="/images/ph-city.jpg" className="img-responsive"/>
                            </a>
                            <div className="content">
                                <h4 className="title">
                                    <a href="https://book24.ng/location/lagos/">
                                        Port Harcourt                                </a>
                                </h4>
                                {/* <div className="desc st_hotel">
								<a href="https://book24.ng/search-hotel-full-map/?location_name=Lagos&amp;location_id=9785">
								4 properties</a></div>    */}                        </div> 
                                                    </div>
                    </div>
                </div>
				
			</div>
		</div>
		<div className="call_section">
			<div className="wrapper">
				<div className="container margin_80_55">
					<div className="main_title_2">
						<span><em></em></span>
						<h2>How it Works</h2>
						<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="box_how">
								<i className="pe-7s-search"></i>
								<h3>Search Locations</h3>
								<p>An nec placerat repudiare scripserit, temporibus complectitur at sea, vel ignota fierent eloquentiam id.</p>
								<span></span>
							</div>
						</div>
						<div className="col-md-4">
							<div className="box_how">
								<i className="pe-7s-info"></i>
								<h3>View Location Info</h3>
								<p>An nec placerat repudiare scripserit, temporibus complectitur at sea, vel ignota fierent eloquentiam id.</p>
								<span></span>
							</div>
						</div>
						<div className="col-md-4">
							<div className="box_how">
								<i className="pe-7s-like2"></i>
								<h3>Book, Reach or Call</h3>
								<p>An nec placerat repudiare scripserit, temporibus complectitur at sea, vel ignota fierent eloquentiam id.</p>
							</div>
						</div>
					</div>
					<p className="text-center add_top_30 wow bounceIn" data-wow-delay="0.5s"><a href="/account" className="btn_1 rounded">Register Now</a></p>
				</div>
				<canvas id="hero-canvas" width="1920" height="1080"></canvas>
			</div>
		</div>
		<div className="container margin_80_55">
			<div className="main_title_2">
				<span><em></em></span>
				<h2>Sparker App Available</h2>
				<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
			</div>
			<div className="row justify-content-center text-center">
				<div className="col-md-6">
					<images src="images/mobile.svg" alt="" className="images-fluid add_bottom_45"/>
					<div className="app_icons">
						<a href="/#0" className="pr-lg-2"><images src="images/app_android.svg" alt=""/></a>
						<a href="/#0" className="pl-lg-2"><images src="images/app_apple.svg" alt=""/></a>
					</div>
					<div className="add_bottom_15"><small>*An eum dolores tractatos, aeterno menandri deseruisse ut eum.</small></div>
				</div>
			</div>
		</div>
	</main>
	<Footer/>
	</div>
	<SignInModal />	
	<div id="toTop"></div>
    <script src="js/common_scripts.js"></script>
	<script src="js/functions.js"></script>
	<script src="assets/validate.js"></script>
	<script src="js/animated_canvas_min.js"></script>
        {/* <style global jsx>{`
          body {
            background: #fff;
          }
        `}</style> */}
      </div>
    );
  }
}
export default Home;
