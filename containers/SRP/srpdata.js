import FetchingData from '%/factory/fetchingData'

var srpData = (params = {}) => {
	return {
		filters: {
			car_type: params.carType ? params.carType : 'used',
			radius: params.distance ? params.distance : 10,
			price_range: (params.price ? params.price.min : 1000) + "-" + (params.price ? params.price.max : 50000),
			miles_rage: (params.milesRange ? params.milesRange.min : 1000) + "-" + (params.milesRange ? params.milesRange.max : 50000),
			deal: params.dealRating ? params.dealRating : '',
			maker: params.selectedMake ? params.selectedMake : 'Ford',
			model: params.modelList ? params.modelList : params.selectedModel ? params.selectedModel : 'Fiesta',
			year: params.year ? parseInt(params.year) : '',
			seller_type: params.sellerType ? params.sellerType : '',
			color: params.color ? params.color : '',
			transmission: params.transmission ? params.transmission : '',
			body_type: params.bodyType ? params.bodyType : '',
			trim: params.trim ? params.trim : '',
			drivetrain: params.dirvetrain ? params.dirvetrain : '',
			cylinders: params.cylinders ? params.cylinders : '',
			fuel_type: params.fuelType ? params.fuelType : '',
			features: [],
			last_seen_at: params.dayListed ? params.dayListed : 0,
		    facets: 'transmission,trim,drivetrain,cylinders,fuel_type,body_type',
		    stats: 'miles,price',
		    start: 0,
		    rows: 11,
		    sort_by: params.sort_by ? params.sort_by : '',
			sort_order: params.sort_order ? params.sort_order : ''
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
