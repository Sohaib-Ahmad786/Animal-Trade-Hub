'use client';
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link';

function SignupData() {
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");

  const handleSignUp=async(e)=>{
    e.preventDefault();
    if(password!==confirmPassword){
      alert("Passwords do not match!");
      return;
    }
    try {
      const res = await fetch("http://localhost:3001/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      console.log(data);

      if (res.ok) {
        // alert("Signup successful!");
        // optional: redirect to login page
        window.location.href = "/Login";
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  }

  return (
    <div className='bg-[url("/login-bg.png")] h-screen w-screen flex justify-center items-center'>
      <Card className="w-full max-w-sm bg-opacity-70 shadow-xl rounded-xl">
        <CardHeader>
          <CardTitle className="text-white text-2xl">Create a new account</CardTitle>
          <CardDescription className="text-white">
            Enter your details to create a new account
          </CardDescription>
          <CardAction>
            <Link href={"/Login/"}><Button variant="link" className="text-white text-xl">Login</Button></Link>
          </CardAction>
        </CardHeader>

        {/* FORM START */}
        <form onSubmit={handleSignUp}>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="grid gap-2">
                <Label htmlFor="text" className="text-white">Username</Label>
                <Input
                  id="text"
                  type="text"
                  placeholder="Enter Your Username"
                  className="text-white"
                  required
                  autoComplete="off"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Sohaib@example.com"
                  required
                  autoComplete="off"
                  className="text-white"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-white">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="Enter Password"
                  value={password}
                  autoComplete="new-password"
                  className="text-white"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword" className="text-white mt-4">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  required
                  placeholder="Enter confirm Password"
                  value={confirmPassword}
                  className="text-white"
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
            <Button variant="outline" className="w-full">
              Sign Up with Google
            </Button>
          </CardFooter>
        </form>
        {/* FORM END */}
      </Card>
    </div>
  )
}

export default SignupData;
