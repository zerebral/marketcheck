import FetchingData from '%/factory/fetchingData'

var srpData = {
	filters: {
		sortBy: '',
		location: '',
		type: '',
		distance: {
			min: 0,
			max: 0
		},
		price: {
			min: 0,
			max: 0
		},
		milesRange: {
			min: 0,
			max: 0
		},
		deals: '',
		maker: '',
		model: '',
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
		address: '',
		latitude: 0,
		longitude: 0
	},
	dealsList: {},
	modelsList: {}
}

export default srpData
