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
      name: "Jill",
      message:
        "Ugochi is quite knowledgeable and very experienced. She will make every penny of your budget stretch while delivering an exquisite, detailed work. You will definitely not be disappointed. It is nice working with someone who truly cares and values your opinions at all times.",
      event: "Wedding Reception",
      date: "Sep 06, 2018",
    },
    {
      id: 2,
      name: "Jessica",
      message:
        "Best company for event planning! Owner took time to understand and accommodate my unique requests! Took all the stress away! Thank you so very much! My family appreciates you!",
      event: "Corporate Gala",
      date: "April 28, 2023",
    },
    {
      id: 3,
      name: "Ofure",
      message:
        "Ugochi is very professional!! She works with your budget. Very polite and reliable. Thank you so much for all your help coordinating and planning my event. I cannot express how appreciative I am for her and I will be sure to recommend her to others. She will deliver and always understand the assigment.",
      event: "Sweet Sixteen Party",
      date: "March 15, 2023",
    },
    {
      id: 4,
      name: "Kemi",
      message:
        "U&U Designs made our event a memorable one. She took the vision and brought it to life in a beautiful way. Multiple guests commented on how nice the setup was.",
      event: "Corporate Christmas Celebration",
      date: "December 20, 2022",
    },
    {
      id: 5,
      name: "Sophia",
      message:
        "I am beyond impressed with the Christmas tree decor provided by your team. The tree was beautifully adorned with stunning ornaments and lights. It became the centerpiece of our family gathering, and everyone was in awe. The atmosphere you created made our Christmas celebration truly magical. Thank you for your exceptional work!",
      event: "Family Christmas Party",
      date: "December 24, 2022",
    },
    {
      id: 6,
      name: "Daniel",
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
