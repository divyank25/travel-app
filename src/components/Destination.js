import Mountain1 from "../assest/20.jpg";
import Mountain2 from "../assest/21.jpeg";
import DestinationData from "./DestinationData";
import Mountain3 from "../assest/22.jpeg";
import Mountain4 from "../assest/23.jpeg";
import Mountain5 from "../assest/24.jpeg";
import Mountain6 from "../assest/25.jpeg";

import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p> Tours give you the oppurtunity to see a lot, within a time frame.</p>

      <DestinationData
        className="first-des"
        heading="Jhansi"
        text="Jhansi is a beautiful city located in the northern Indian state of
        Uttar Pradesh, known for its rich cultural and historical heritage.
        One of the main attractions of the city is its historic
        significance, particularly during the Indian Rebellion of 1857, when
        Rani Lakshmi Bai, the queen of Jhansi, bravely fought against the
        British forces. Apart from its historical significance, Jhansi also
        offers visitors a range of other attractions, including beautiful
        temples, such as the Jhansi Ki Rani Temple and the Ganesh Mandir
        Temple, and stunning palaces like the Rani Mahal and the Orchha
        Fort."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Kerala"
        text="Kerala is a beautiful state located in the southwestern region of India, known for its pristine beaches, tranquil backwaters, lush green forests, and rich cultural heritage. Kerala tourism is a popular destination for travelers looking 
        for a unique and diverse experience. Visitors can also explore the rich cultural heritage of Kerala
         by visiting its ancient temples, such as the Padmanabhaswamy Temple in Thiruvananthapuram and the Guruvayur Temple in Thrissur. Kerala's delicious cuisine, which includes traditional dishes like appam, puttu,
          and fish curry, is also a major draw for visitors."
        img1={Mountain3}
        img2={Mountain4}
      />

      <DestinationData
        className="first-des"
        heading="Haridwar"
        text="Haridwar is a popular tourist destination located in the 
        northern Indian state of Uttarakhand, known for its spiritual 
        significance and natural beauty. The city is situated on the banks of the holy river Ganges, and visitors can take part in the famous Ganga Aarti ceremony held every evening, which is a breathtaking spectacle. Haridwar is also home to several ancient temples, including the Mansa Devi Temple, Chandi Devi Temple, and Har Ki Pauri, which are visited by thousands of devotees every year. The city is surrounded by beautiful hills and forests, 
        making it an ideal destination for trekking and hiking enthusiasts."
        img1={Mountain5}
        img2={Mountain6}
      />
    </div>
  );
};

export default Destination;
