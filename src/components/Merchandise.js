import React from 'react';
import './Merchandise.css';
import video from '../assets/video-filter-cup.mp4';
import poster from '../assets/image-coffee-shop.jpg';
import totebag from "../assets/tote-bag.png";
import tumbler from "../assets/tumblerbg.png";
import giftbox from  "../assets/gift_box1.jpg";
import coasters from "../assets/coasters.jpg";
import mug from "../assets/mug.png";
import dripcoffee from "../assets/drip_coffee-bg.png";

export default function Merchandise() {
	return (
		<>
			<section className="merch-hero">
				<div className="hero-container container">
					<h1 className="hero-title">
						Love our coffee <br />
						Enjoy our merch <br />
					</h1>
					<p className="hero-text">Toucan Coffee shop</p>
					<video
						src={video}
						type="video/mp4"
						poster={poster}
						autoPlay
						loop
						muted
						webkit-playsinline
						playsinline
						className="hero-video"></video>
					<div className="hero-overlay"></div>
				</div>
			</section>
			<section className="merch">
				<div className="merch-container">
						<div className="merch-card">
							<img src={totebag} alt="totebag" />
								<div className="merch-card-text">
									<div className="merch-text">
										<h4>Canvas Totebag</h4>
										<p>$5.99</p>
									</div>
									<button id="add">Add to Cart</button>
								</div>
						</div>

						<div className="merch-card">
							<img src={giftbox} alt="giftbox" />
								<div className="merch-card-text">
									<div className="merch-text">
										<h4>Giftbox</h4>
										<p>$12.99</p>
									</div>
									<button id="add">Add to Cart</button>
								</div>
						</div>

						<div className="merch-card">
							<img src={tumbler} alt="tumbler" />
								<div className="merch-card-text">
									<div className="merch-text">
										<h4>Tumbler</h4>
										<p>$7.99</p>
									</div>
									<button id="add">Add to Cart</button>
								</div>
						</div>

						<div className="merch-card">
							<img src={coasters} alt="coasters" />
								<div className="merch-card-text">
									<div className="merch-text">
										<h4>Coasters</h4>
										<p>$8.43</p>
									</div>
									<button id="add">Add to Cart</button>
								</div>
						</div>

						<div className="merch-card">
							<img src={mug} alt="mug" />
								<div className="merch-card-text">
									<div className="merch-text">
										<h4>Coffee Mug</h4>
										<p>$35.99</p>
									</div>
									<button id="add">Add to Cart</button>								
								</div>
						</div>

						<div className="merch-card">
							<img src={dripcoffee} alt="drip-coffee"/>
								<div className="merch-card-text">
									<div className="merch-text">
										<h4>Coffee Maker</h4>
										<p>$15.64</p>
									</div>
									<button id="add">Add to Cart</button>
								</div>
						</div>
				</div>
			</section>
		</>
	);
}
