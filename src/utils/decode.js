import { jwtDecode } from 'jwt-decode';
function saveToken(token) {
	if (typeof window !== 'undefined') {
		localStorage.setItem('access_token', token)
	}
}
let local = null;
if (typeof window !== 'undefined') {
  local = localStorage.getItem('access_token');
}
function getToken() {
	try {
		if(local){
			return jwtDecode(local);
		}
	} catch (error) {
		console.log(error)
	}
}
function destroyToken() {
	let local = null;
	if (typeof window !== 'undefined') {
	local = localStorage.removeItem('access_token');
	}
}
export { saveToken, destroyToken, getToken }
