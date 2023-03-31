// import client1 from "../assets/client1.png";
// import client2 from "../assets/client2.png";
// import client3 from "../assets/client3.png";
// import client4 from "../assets/client4.png";
// import client5 from "../assets/client5.png";

// function OurClients() {
//   return (
//     <div className="container mx-auto py-12">
//       <h2 className="text-3xl font-bold mb-4 text-center">
//         Our Valuable Clients
//       </h2>
//       <div className="flex justify-between items-center">
//         <img
//           src={client1}
//           alt="Client 1"
//           className="client-logo h-24 w-24 hover:scale-125 transform transition-all duration-500 ease-in-out mx-2"
//         />
//         <img
//           src={client2}
//           alt="Client 2"
//           className="client-logo h-24 w-24 hover:scale-125 transform transition-all duration-500 ease-in-out mx-2"
//         />
//         <img
//           src={client3}
//           alt="Client 3"
//           className="client-logo h-24 w-24 hover:scale-125 transform transition-all duration-500 ease-in-out mx-2"
//         />
//         <img
//           src={client4}
//           alt="Client 4"
//           className="client-logo h-24 w-24 hover:scale-125 transform transition-all duration-500 ease-in-out mx-2"
//         />
//         <img
//           src={client5}
//           alt="Client 5"
//           className="client-logo h-24 w-24 hover:scale-125 transform transition-all duration-500 ease-in-out mx-2"
//         />
//       </div>
//     </div>
//   );
// }

// export default OurClients;


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";

function OurClients() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Our Valuable Clients
      </h2>
      <Slider {...settings}>
        <img
          src={client1}
          alt="Client 1"
          className="client-logo h-24 w-24 hover:scale-125 transform transition-all duration-500 ease-in-out"
        />
        <img
          src={client2}
          alt="Client 2"
          className="client-logo h-24 w-24 hover:scale-125 transform transition-all duration-500 ease-in-out"
        />
        <img
          src={client3}
          alt="Client 3"
          className="client-logo h-24 w-24 hover:scale-125 transform transition-all duration-500 ease-in-out"
        />
        <img
          src={client4}
          alt="Client 4"
          className="client-logo h-24 w-24 hover:scale-125 transform transition-all duration-500 ease-in-out"
        />
        <img
          src={client5}
          alt="Client 5"
          className="client-logo h-24 w-24 hover:scale-125 transform transition-all duration-500 ease-in-out"
        />
      </Slider>
    </div>
  );
}

export default OurClients;

