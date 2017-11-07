import FetchingData from '%/factory/fetchingData'

var srpData = (params = {}) => {
	return {
		filters: {
			sortBy: '',
			type: params.carType ? params.carType : 'used',
			distance: params.distance ? params.distance : 0,
			price: params.price ? params.price : { min: 0, max: 0 },
			milesRange: params.milesRange ? params.milesRange : { min: 0, max: 0 },
			deals: '',
			maker: params.selectedMake ? params.selectedMake : '',
			model: params.selectedModel ? params.selectedModel : '',
			year: 0,
			sellerType: '',
			color: {},
			transmission: '',
			body: '',
			trim: '',
			dirvetrain: '',
			cylinders: 0,
			fuel: '',
			dealerRatings: 0,
			features: {
				blueatooth: false,
				rearCam: false,
				allowWheels: false,
				navigation: false,
				airConditioner: false
			},
			listedDate: 0
		},
		location: {
			address: params.address ? params.address : '',
			latitude: params.latitude ? params.latitude : '',
			longitude: params.longitude ? params.longitude : ''
		},
		dealsList: {},
		modelsList: {}
	}
}

export default srpData
