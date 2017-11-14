import FetchingData from '%/factory/fetchingData'

var srpData = (params = {}) => {
	return {
		filters: {
			type: params.carType ? params.carType : 'used',
			radius: params.distance ? params.distance : 40,
			price_range: (params.price ? params.price.min : 4000) + "-" + (params.price ? params.price.max : 50000),
			miles_rage: (params.milesRange ? params.milesRange.min : 4000) + "-" + (params.milesRange ? params.milesRange.max : 50000),
			deal: params.dealRating ? params.dealRating : '',
			maker: params.selectedMake ? params.selectedMake : 'Ford',
			model: params.modelList ? params.modelList : params.selectedModel ? params.selectedModel : 'Any',
			year: parseInt(params.year ? params.year : 2008),
			seller_type: params.sellerType ? params.sellerType : 'dealer',
			color: params.color ? params.color : '',
			transmission: params.transmission ? params.transmission : 'manual',
			body_type: params.bodyType ? params.bodyType : 'Sedan',
			trim: params.trim ? params.trim : '',
			drivetrain: params.dirvetrain ? params.dirvetrain : '',
			cylinders: params.cylinders ? params.cylinders : 4,
			fuel_type: params.fuelType ? params.fuelType : '',
			features: [],
			last_seen_at: params.dayListed ? params.dayListed : 0,
		    facets: 'trim,drivetrain,cylinders,fuel_type',
		    stats: 'miles,price',
		    start: 0,
		    rows: 11,
		    sort_by: params.sort_by ? params.sort_by : 'miles',
			sort_order: params.sort_order ? params.sort_order : 'desc'
		},
		location: {
			address: params.address ? params.address : '',
			latitude: params.latitude ? params.latitude : '',
			longitude: params.longitude ? params.longitude : ''
		},
		modelsList: params.models ? params.models : [],
	}
}

export default srpData
