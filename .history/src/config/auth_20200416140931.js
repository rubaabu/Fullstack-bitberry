
const Auth = () => {
    return true;
}


const Auth = {
  isAuthenticated: false,
  authenticate() {
    this.isAuthenticated = true;
  },

  getAuth() {
    return this.isAuthenticated;
  },
};
export default Auth;
