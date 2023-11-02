// Filter the restaurant data according input type
export const filterData = (searchText, restaurants) => {
    const resFilterData = restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return resFilterData;
  }

/*export const flterDataByPrice=( restaurants)=>{
  
   //const price = restaurants[0]?.info?.costForTwo;
   const resFilterDataPrice= restaurants.filter((restaurant)=>
   restaurant?.info?.costForTwo?.parseInt(priceString.replace(/\D/g, ''), 10).

   )


}
*/
export const filterDataByPrice = (restaurants, sortBy = 'increasing') => {
  const resFilterDataPrice = restaurants.slice(); // Create a copy to avoid modifying the original data

  resFilterDataPrice.sort((a, b) => {
    const priceA = parseInt(a?.info?.costForTwo.replace(/\D/g, ''), 10);
    const priceB = parseInt(b?.info?.costForTwo.replace(/\D/g, ''), 10);

    if (sortBy === 'increasing') {
      return priceA - priceB;
    } else if (sortBy === 'decreasing') {
      return priceB - priceA;
    } else {
      return 0; // Default to no sorting
    }
  });
   console.log( resFilterDataPrice);
  return resFilterDataPrice;
};
