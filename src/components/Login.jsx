import React from "react";
import { useForm } from "react-hook-form";

const Login = (props) => {
    const users = [
        { username: "Abdullah Feroz", email: "feroz@gmail.com", password: "password1" },
        { username: "Ali Raza", email: "ali.raza@gmail.com", password: "password2" },
        { username: "Fatima Khan", email: "fatima.khan@gmail.com", password: "password3" },
        { username: "Usman Ahmed", email: "usman.ahmed@gmail.com", password: "password4" },
        { username: "Sara Malik", email: "sara.malik@gmail.com", password: "password5" },
      ];
      
      const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm();
        

        const onSubmit = (data) => {
            const loggedInUser = users.find(user => user.email === data.email && user.password === data.password)
            if(loggedInUser){
                alert(`Welcome ${loggedInUser.username}`)
                props.onAuthentication(loggedInUser, true)
    }else{
        alert("Invalid email or password")
        props.onAuthentication("", false)
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-500">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
          </div>
        </form>
        {/* Footer */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
