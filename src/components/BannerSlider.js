import bannerImage from "../assets/img-2.jpg";

function BannerSlider() {
  return (
    <div className="relative h-screen">
      <img
        src={bannerImage}
        alt="Banner"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-white font-bold text-3xl mb-4">
          Welcome to My Website
        </h1>
        <div className="flex space-x-4">
          <button className="bg-white py-2 px-4 rounded-lg shadow-lg hover:shadow-xl">
            Click Here
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
