"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

function LoginData() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter the email");
      return;
    }
    if (!password.trim()) {
      setError("Please enter the password");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json().catch(() => ({}));

      // ❌ login failed
      if (!res.ok) {
        setError(data?.message || "Invalid email or password");
        return;
      }

      // ✅ SIMPLE LOGIN (NO TOKEN)
      // if backend returns success, just mark logged-in and redirect
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("userEmail", email); // optional
      window.location.href = "/";
    } catch (err) {
      console.error(err);
      setError("Something went wrong, please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-[url("/login-bg.png")] h-screen w-screen flex justify-center items-center'>
      <Card className="w-full max-w-sm bg-opacity-70 shadow-xl rounded-xl">
        <CardHeader>
          <CardTitle className="text-white text-2xl">
            Login to your account
          </CardTitle>
          <CardDescription className="text-white">
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Link href={"/Signup/"}>
              <Button variant="link" className="text-white text-xl">
                Sign Up
              </Button>
            </Link>
          </CardAction>
        </CardHeader>

        <form onSubmit={handleLogin}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Sohaib@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  className="text-white"
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <button
                    type="button"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-white"
                    onClick={() =>
                      alert("Forgot password flow not implemented")
                    }
                  >
                    Forgot your password?
                  </button>
                </div>

                <Input
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  autoComplete="current-password"
                  value={password}
                  className="text-white"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                />

                {error && (
                  <p className="text-sm text-red-500 mt-1" role="alert">
                    {error}
                  </p>
                )}
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>

            <Button
              type="button"
              className="w-full"
              onClick={() => alert("Google auth not implemented")}
            >
              Continue with Google
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default LoginData;
