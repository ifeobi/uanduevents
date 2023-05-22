import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIcon style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIcon style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimonial = () => {
  const reviewData = [
    {
      id: 1,
      name: "Sarah Thompson",
      message:
        "The event decor provided by your team was absolutely stunning! It transformed our venue into a magical wonderland. Our guests couldn't stop talking about how beautiful everything looked. Thank you for making our event truly unforgettable!",
      event: "Wedding Reception",
      date: "May 10, 2023",
    },
    {
      id: 2,
      name: "John Evans",
      message:
        "I want to express my sincere gratitude for the exceptional event decor your team created for our corporate gala. The attention to detail and creativity were beyond our expectations. The ambiance you created added a touch of elegance and sophistication to the entire event. We received numerous compliments from our guests, and it wouldn't have been possible without your expertise.",
      event: "Corporate Gala",
      date: "April 28, 2023",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      message:
        "I can't thank you enough for the fabulous event decor you provided for my daughter's sweet sixteen party. The theme was perfectly executed, and every element was well-coordinated. The entire venue looked like it came straight out of a fairytale. My daughter was thrilled, and all her friends were amazed. You truly made her dreams come true!",
      event: "Sweet Sixteen Party",
      date: "March 15, 2023",
    },
    {
      id: 4,
      name: "Michael Carter",
      message:
        "Your Christmas tree decor services were outstanding! The tree you decorated for our office was breathtaking. The attention to detail and the festive atmosphere you created truly enhanced our holiday spirit. We received so many compliments from our clients and employees. Thank you for making our Christmas unforgettable!",
      event: "Corporate Christmas Celebration",
      date: "December 20, 2022",
    },
    {
      id: 5,
      name: "Sophia Lewis",
      message:
        "I am beyond impressed with the Christmas tree decor provided by your team. The tree was beautifully adorned with stunning ornaments and lights. It became the centerpiece of our family gathering, and everyone was in awe. The atmosphere you created made our Christmas celebration truly magical. Thank you for your exceptional work!",
      event: "Family Christmas Party",
      date: "December 24, 2022",
    },
    {
      id: 6,
      name: "Daniel Anderson",
      message:
        "Your Christmas tree decor services exceeded my expectations. The tree you decorated for our charity event was a sight to behold. The combination of elegance and holiday cheer was perfect. Your team's professionalism and creativity were commendable. The event was a huge success, and we are grateful for your contribution.",
      event: "Charity Christmas Fundraiser",
      date: "December 15, 2022",
    },
  ];
  return (
    <div className="testimonial" style={{ textAlign: "center" }}>
      <h1>Reviews</h1>
      <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
        {reviewData.map((review) => (
          <Card
            key={review.id}
            name={review.name}
            message={review.message}
            event={review.event}
            date={review.date}
          />
        ))}
      </Slider>
    </div>
  );
};

const Card = ({ name, message }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
        justifyContent: "center",
      }}
    >
      <p>{message}</p>
      <p className="name">{name}</p>
    </div>
  );
};

export default Testimonial;
