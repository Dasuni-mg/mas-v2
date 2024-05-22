import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function Component() {
  return (
    <div className="flex p-8 items-center w-full h-screen bg-black">
      <div className="w-1/2 lg:rounded-lg lg:shadow-lg bg-black">
        <div className="w-full">
          <h1 className="text-2xl text-left text-white mb-8">Schedule a meeting</h1>
          <h6 className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus libero ut dolor egestas suscipit sit amet a tellus.</h6>
          <br/>
          <form className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="title" className="text-white">Title</Label>
              <Input
                id="title"
                type="text"
                placeholder="Meeting Title"
                className="text-white"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="tour" className="text-white">Tour</Label>
              <Input
                id="tour"
                type="text"
                placeholder="Tour Information"
                className="text-white"
                required
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="scheduleAt" className="text-white">Schedule At</Label>
                <Input
                  id="scheduleAt"
                  type="datetime-local"
                  className="text-white"
                  required
                />
              </div>
              <div className="flex-1">
                <Label htmlFor="duration" className="text-white">Duration</Label>
                <Input
                  id="duration"
                  type="text"
                  placeholder="Duration"
                  className="text-white"
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-1/4 bg-white text-black">
              Schedule
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
