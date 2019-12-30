import { combineReducers } from 'redux';
import VerifyReducer from './verify.reducer';
import RequestReducer from './request.reducer';
import ResetPasswordReducer from './reset.password.reducer';
import LoginReducer from './loginReducer';
import { signupReducer } from './signup.reducer';
import accommodationReducer from './accommodation.reducer';
import MakeTripRequest from './trip.request.reducer';
import destinations, { accomodations } from './destinations.reducer';
import FacebookReducer from './facebookReducer';
import BookingReducer from './booking.reducer';
import AllAcommodation from './allAccomodation';
import SingleAccomodations from './singleAccomodation.reducer';
import AccomodationFeedback from './accomodatiosFeedback.reducer';
import DashbordReducer from './/dashboard.reducer';
import Logout from './logout.reducer';
import ManagerApprovalReducer from './manager.approval.reducer';
import filterRequest from './filter.requester.reducer';
import UserRoleReducer from './user.role.reducer';
import UpdateAccomodation from './update.accomodation.reducer';
import getOneAcc from './singleAccomodation.reducer';
import Booking from './bookings.list.reducer';

const allReducers = combineReducers({
	ResetPasswordReducer,
	Verify: VerifyReducer,
	Request: RequestReducer,
	loginProp: LoginReducer,
	signup: signupReducer,
	accommodation: accommodationReducer,
	MakeTripRequest,
	destSats: destinations,
	accomodations,
	facebook: FacebookReducer,
	bookings: BookingReducer,
	accomodation: AllAcommodation,
	SingleAccomodations,
	AccomodationFeedback,
	profile: DashbordReducer,
	Logout,
	ManagerApprovalReducer,
	filterRequest,
	userRole: UserRoleReducer,
	UpdateAccomodation,
	getOneAcc,
	Booking,
});

export default allReducers;
