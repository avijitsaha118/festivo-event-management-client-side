import bannerImage from "../assets/img-banner.jpg";

function BannerSlider() {
  return (
    <div className="relative h-screen">
      <img
        src={bannerImage}
        alt="Banner"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-75"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-white font-bold text-3xl mb-4">
          Welcome to My Website
        </h1>
        <div className="flex space-x-4">
          <button class="bg-black text-white font-semibold py-2 px-4 border border-white rounded-lg hover:bg-gray-900 focus:outline-none focus:shadow-outline">
            Call Now
          </button>

          <button className="bg-white py-2 px-4 rounded-lg shadow-lg hover:shadow-xl">
            Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}

export default BannerSlider;



// import bannerImage from "../assets/img-banner.jpg";

// function BannerSlider() {
//   return (
//     <div className="relative h-screen">
//       <img
//         src={bannerImage}
//         alt="Banner"
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-75"
//       />
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex flex-col items-center justify-center">
//         <h1 className="text-white font-bold text-3xl mb-4 text-shadow-lg">
//           Welcome to Our Website
//         </h1>
//         <button class="bg-white text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:shadow-outline">
//             Call Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default BannerSlider;



// import bannerImage from '../assets/img-banner.jpg';

// function BannerSlider() {
//   return (
//     <div className="relative flex flex-col md:flex-row items-center justify-center h-screen">
//       <div className="bg-gray-800 text-white text-center md:text-left px-6 py-8 md:w-1/2">
//         <h1 className="text-4xl font-bold mb-4">
//           Best Event Management in Your City
//         </h1>
//         <p className="text-xl mb-4">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod
//           cursus bibendum.
//         </p>
//         <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl mr-2">
//           Learn More
//         </button>
//         <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl">
//           Contact Us
//         </button>
//       </div>
//       <div className="md:w-1/2">
//         <img
//           src={bannerImage}
//           alt="Banner"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// }

// export default BannerSlider;



