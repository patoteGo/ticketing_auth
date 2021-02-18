import axios from 'axios';

const LandingPage = ({ currentUser }) => {
	console.log(currentUser);
	const base =
		'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local';
	axios.get(`${base}/api/users/currentuser`);

	return <h1>Landing Page</h1>;
};

// LandingPage.getInitialProps = async () => {
//   const response = await axios.get('/api/users/currentuser');

//   return response.data;
// };

export default LandingPage;
