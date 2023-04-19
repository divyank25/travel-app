import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assest/30.jpeg";
import Trip2 from "../assest/31.jpeg";
import Trip3 from "../assest/32.jpeg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maps</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Mumbai Trip"
          text="Mumbai is a vibrant destination with cultural diversity, 
        rich history, iconic landmarks like the Gateway of India and
         Chhatrapati Shivaji Terminus, serene Marine Drive, and delicious 
         street food. The city is also home to the world-renowned Bollywood 
         film industry, making it a must-visit 
        destination for any traveler seeking to experience the magic of India."
        />

        <TripData
          image={Trip2}
          heading="Agra Trip"
          text="Agra is a popular tourist destination in India known for the iconic Taj Mahal and Agra Fort, both UNESCO World Heritage Sites, as well as its mouth-watering street food and rich Mughal heritage. The city's hospitality and cultural charm make it a must-visit destination for any traveler seeking to experience the grandeur of India."
        />

        <TripData
          image={Trip3}
          heading="Delhi Trip"
          text="Delhi, the capital city of India, offers a range of historic and cultural attractions such as the Red Fort, Qutub Minar, and Humayun's Tomb, as well as bustling markets and delicious street food. Its hospitable and lively atmosphere make it a must-visit destination for any traveler looking to experience the heart and soul of India."
        />
      </div>
    </div>
  );
}

export default Trip;
