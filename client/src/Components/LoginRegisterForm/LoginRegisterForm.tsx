/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { useHistory } from "react-router-dom";

interface LoginRegisterFormProps {
  loginUser: Function;
  auth: {
    isAuthenticated: Boolean;
    user:{
      userType: String;
    }
  };
  errors: Object;
}

const LoginRegisterForm: React.FC<LoginRegisterFormProps> = ({
  loginUser,
  auth,
  errors,
}) => {
  const history = useHistory();
  const [signup, setSignup] = useState(false);
  // eslint-disable-next-line
  const signUpSetup = () => {
    setSignup(!signup);
  };

  const initialState = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialState);

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginUser(values);
    
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      if(auth.user.userType === 'admin'){
        history.push("/admin/dashboard");
      } else {
        history.push("/user/dashboard"); // push user to dashboard when they login
      }
    }
  }, [auth, history]);

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-2 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              {signup === false
                ? "Sign in to your account"
                : "Sign up to ABC Bank"}
            </h2>
            {/* <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <b
                onClick={signUpSetup}
                className="font-medium text-blue-800 hover:text-blue-700 cursor-pointer"
              >
                {signup === false
                  ? "Create a new account"
                  : "Sign in to your exisiting account"}
              </b>
            </p> */}
          </div>
          {signup === false ? (
            <form
              className="mt-8 space-y-6"
              name="SignInForm"
              noValidate
              onSubmit={submitForm}
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={changeInput}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border rounded-t-md border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={changeInput}
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              {/* <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-800 focus:ring-blue-700 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="https://bank-landing-page.web.app/"
                    className="font-medium text-blue-800 hover:text-blue-700"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div> */}

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                >
                  Sign in
                </button>
              </div>
            </form>
          ) : (
            <div>
              {/* <form
              className="mt-8 space-y-6"
              action="#"
              name="SignUpForm"
              method="POST"
            > */}
              {/* <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label className="block text-left">
                    <select className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm">
                      <option disabled>You are...(select)</option>
                      <option>A Company (Limited / LLP)</option>
                      <option>A Partnership</option>
                      <option>A Proprietorship</option>
                      <option>A Freelancer</option>
                      <option>An Employee</option>
                      <option>Other</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label className="block text-left">
                    <select className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm">
                      <option disabled>Country</option>
                      <option>India</option>
                      <option>Country 1</option>
                      <option>Country 2</option>
                      <option>Country 3</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="phone"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <label htmlFor="password1" className="sr-only">
                    Retype Password
                  </label>
                  <input
                    id="password1"
                    name="password1"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm"
                    placeholder="Retype Password"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-800 focus:ring-blue-700 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    I agree to{" "}
                    <a href="#" className="text-blue-800">
                      T&C
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-800">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                >
                  Sign up
                </button>
              </div> */}
              {/* </form> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: { auth: any; errors: any }) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(LoginRegisterForm);

// export default LoginRegisterForm;
