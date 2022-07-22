import ForYou1 from "./ForYouImg";
import ForYou2 from "./ForYouImg2";
import ForYou3 from "./ForYouImg3";
import StarRating from "./StarRating2";

function BookSlider() {
  return (
    <>
      <div className="col-12">
        <h2>This Front page is not active, go to Admin</h2>
        <small>Here will be slider someday...</small>
      </div>

      <div className="slider-item slider-item1  col-12 col-md-hidden col-lg-4 ">
        <div className="slider-image">
          <ForYou1 />
        </div>
        <div className="slider-content">
          <h4>The Summer of Broken Things</h4>
          <h6 className="slider-a">Margaret Peterson Hadex</h6>
          <StarRating />
        </div>
      </div>
      <div className="slider-item slider-item2 col-12 col-md-6 col-lg-4">
        <div className="slider-image">
          <ForYou2 />
        </div>
        <div className="slider-content">
          <h4>Clique Bait</h4>
          <h6 className="slider-a">Ann Valett</h6>
          <StarRating />
        </div>
      </div>
      <div className="slider-item slider-item3 col-12 col-md-6 col-lg-4">
        <div className="slider-image">
          <ForYou3 />
        </div>
        <div className="slider-content">
          <h4>Something Better</h4>
          <h6 className="slider-a">Lana Khan</h6>
          <StarRating />
        </div>
      </div>
    </>
  );
}

export default BookSlider;
