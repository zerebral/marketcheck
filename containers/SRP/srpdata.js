import FetchingData from '%/factory/fetchingData'

var srpData = (params = {}) => {
	return {
		filters: {
			type: params.carType ? params.carType : 'used',
			radius: params.distance ? params.distance : 40,
			ref_price: params.price ? params.price[0] : 4000,
			ref_price_dt: params.price ? params.price[1] : 50000,
			ref_miles: params.milesRange ? params.milesRange[0] : 4000,
			ref_miles_dt: params.milesRange ? params.milesRange[1] : 50000,
			deal: params.dealRating ? params.dealRating : '',
			maker: params.selectedMake ? params.selectedMake : 'Ford',
			model: params.modelList ? params.modelList : params.selectedModel ? params.selectedModel : '',
			year: parseInt(params.year ? params.year : 2010),
			sellerType: params.sellerType ? params.sellerType : 'dealer',
			color: params.color ? params.color : '',
			transmission: params.transmission ? params.transmission : 'manual',
			body_type: params.bodyType ? params.bodyType : 'Sedan',
			trim: params.trim ? params.trim : '',
			dirvetrain: params.dirvetrain ? params.dirvetrain : '',
			cylinders: params.cylinders ? params.cylinders : 4,
			fuel_type: params.fuelType ? params.fuelType : '',
			features: [],
			last_seen_at: params.dayListed ? params.dayListed : 0,
		    facets: 'trim,drivetrain,cylinders,fuel_type',
		    stats: 'miles,price',
		    start: 0,
		    rows: 11,
			sort_order: params.sortOrder ? params.sortOrder : 'desc'
		},
		location: {
			address: params.address ? params.address : '',
			latitude: params.latitude ? params.latitude : '',
			longitude: params.longitude ? params.longitude : ''
		},
		modelsList: params.models ? params.models : {},
	}
}

export default srpData
