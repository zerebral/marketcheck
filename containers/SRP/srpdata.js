import FetchingData from '%/factory/fetchingData'

var srpData = (params = {}) => {
	return {
		filters: {
			sortBy: '',
			type: params.carType ? params.carType : 'used',
			radius: params.distance ? params.distance : 40,
			ref_price: params.price ? params.price[0] : 4000,
			ref_price_dt: params.price ? params.price[1] : 50000,
			ref_miles: params.milesRange ? params.milesRange[0] : 4000,
			ref_miles_dt: params.milesRange ? params.milesRange[1] : 50000,
			deal: params.dealRating ? params.dealRating : '',
			maker: params.selectedMake ? params.selectedMake : 'Ford',
			model: params.modelList ? params.modelList : '',
			year: parseInt(params.year ? params.year : 2010),
			sellerType: params.sellerType ? params.sellerType : 'fsbo',
			color: 'Silver',
			transmission: params.transmission ? params.transmission : 'automatic',
			body_type: params.bodyType ? params.bodyType : 'Sedan',
			trim: '',
			dirvetrain: '',
			cylinders: 4,
			fuel: '',
			features: [],
			listedDate: '',
		    start: 0,
		    rows: 11,
		},
		location: {
			address: params.address ? params.address : '',
			latitude: params.latitude ? params.latitude : '',
			longitude: params.longitude ? params.longitude : ''
		},
		dealsList: {},
		modelsList: params.models
	}
}

export default srpData
