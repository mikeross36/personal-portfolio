import { useState } from "react";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import Button from "@/components/Button";
import { Link } from "react-router";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden px-4 py-12">
      {/* Background Ambience */}
      <div className="absolute top-10 left-10 sm:left-40 md:left-60 w-20 h-10 flex items-center justify-center rounded-md bg-linear-to-r from-primary to-secondary">
        <Link to="/" className="font-bold uppercase">
          home
        </Link>
      </div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] pointer-events-none" />

      <div
        className="w-full max-w-md bg-surface/50 backdrop-blur-xl border border-white/10 
      rounded-2xl p-8 shadow-2xl relative z-10"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400 mb-2">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-gray-400">
            {isLogin
              ? "Enter your credentials to access your account"
              : "Sign up to start your journey"}
          </p>
        </div>

        <form className="space-y-6">
          {!isLogin && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Full Name
              </label>
              <div className="relative group">
                <User
                  className="absolute left-3 top-3 text-gray-500 group-focus-within:text-primary transition-colors"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 placeholder:text-gray-600"
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Email</label>
            <div className="relative group">
              <Mail
                className="absolute left-3 top-3 text-gray-500 group-focus-within:text-primary transition-colors"
                size={20}
              />
              <input
                type="email"
                placeholder="hello@example.com"
                className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 placeholder:text-gray-600"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
              Password
            </label>
            <div className="relative group">
              <Lock
                className="absolute left-3 top-3 text-gray-500 group-focus-within:text-primary transition-colors"
                size={20}
              />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 placeholder:text-gray-600"
              />
            </div>
          </div>
          <Button className="w-full mx-auto flex items-center justify-center group">
            {isLogin ? "Sign In" : "Sign Up"}
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </Button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-400">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary hover:text-white font-semibold transition-colors hover:underline decoration-primary decoration-2 underline-offset-4"
            >
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
