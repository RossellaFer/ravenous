const apiKey = "hc9fPhOrXYjGyywz0T-085ZUoWKnyaZm3nnRLG2EwviJ5nfusI-gf48d1B9y_Qv9LNrgH58ZhpoUAA2yYHLkUO8EwLqkaSuW5O0ksPgrdYOr_II0TbK1diY97qffW3Yx";

const Yelp = {
  search(term, location, sortBy) {
  	let endpoint = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
  	return fetch(endpoint, {
  		headers: {
  			Authorization: `Bearer ${apiKey}`
  		}
  	}).then(response => {
  		return response.json();
  	}).then(jsonResponse => {
  		if (jsonResponse.businesses) {
  			return jsonResponse.businesses.map(business => ({
  				id: business.id,
  				imageSrc: business.image_url,
  				name: business.name,
  				address: business.location.address1,
  				city: business.location.city,
  				state: business.location.state,
  				zipCode: business.location.zip_code,
  				category: business.categories[0].title,
  				rating: business.rating,
  				reviewCount: business.review_count
  			}));
  		}
  	});
  }

};

export default Yelp;
