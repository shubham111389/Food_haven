import { IMG_CDN_URL } from "../Utils/contants";

/*const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4>Rupees: {price / 100}</h4>
    </div>
  );
};
*/
const FoodItem  = ({name,imageId,price,description,ratings})=>{
  const rate=ratings?.aggregatedRating?.rating ;
  return(
<div className="card">       
   <img
                src={
                 imageId ? (IMG_CDN_URL + imageId) : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/39cd5e4824e5c011ffaf56ddc39891e8"
                }
                alt=""
                className="w-33 h-25 rounded object-cover"
              />
          
          <h3 className="font-semibold">{name}</h3>
          <span className="font-semibold">&#8377;{!price ? '250' : price/100}</span>
          <h5 className="text-sm text-gray-600">{description}</h5>
          <span>
        <h4
      
          >
          <i className="fa-solid fa-star"></i>
          Rate : {rate} ⭐⭐⭐⭐
        </h4>
        
        <h4>{ '₹500 for two'}</h4>
      </span>
          
      </div>
  )
};


//export default RestaurantCard;

export default FoodItem;
