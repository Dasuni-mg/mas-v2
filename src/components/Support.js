import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
export default function Component() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-black">
      <div className="w-full px-7 lg:rounded-lg lg:shadow-lg">
        <div className="flex items-center justify-center h-screen lg:flex-row lg:rounded-lg lg:shadow-lg bg-black">
          <div className="w-full max-w-lg p-8 bg-black lg:rounded-r-lg">
            <div className="w-full">
            <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-white">Login</CardTitle>
        <CardDescription className="text-white">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4" >
          <div className="grid gap-2">
            <Label htmlFor="email"  className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              className="text-white"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password"  className="text-white">Password</Label>
              <a href="#" className="ml-auto inline-block text-gray-500 text-sm underline">
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" required  className="text-white"/>
          </div>
          <Button type="submit" className="w-full text-white">
            Login
          </Button>
          <Button variant="outline" className="w-full rounded rounded-lg bg-white text-black">
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <a href="#" className="underline">
            Sign up
          </a>
        </div>
      </CardContent>
    </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
