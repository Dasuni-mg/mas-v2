/**
 * v0 by Vercel.
 * @see https://v0.dev/t/l7LeMtdhq4D
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "./ui/dropdown-menu";
import { Checkbox } from "./ui/checkbox";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "./ui/table";
import { Badge } from "./ui/badge";

export default function Component() {
  return (
    <div key="1" className="grid min-h-screen w-full  overflow-hidden">
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 bg-black p-4 md:gap-8 md:p-6 lg:p-8 xl:p-10">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-lg md:text-2xl lg:text-3xl text-white">
              Tasks
            </h1>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <div className="relative">
                <div className="">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <Input
                    className="w-full bg-black shadow-none text-white border rounded-lg pl-8 w-1/3 md:w-2/3 lg:w-full dark:bg-gray-950"
                    placeholder="Search tasks..."
                    type="search"
                  />
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex items-center gap-2" variant="outline">
                    <FilterIcon className="h-4 w-4" />
                    <span className="hidden sm:inline text-white">Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 z-50 bg-black">
                  <DropdownMenuLabel className="text-white">
                    Filter by
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-white">
                    Due Date
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white">
                    Status
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white">
                    Priority
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex items-center gap-2" variant="outline">
                    <ListOrderedIcon className="h-4 w-4" />
                    <span className="hidden sm:inline text-white">Sort</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 z-50 bg-black">
                  <DropdownMenuLabel className="text-white">
                    Sort by
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-white">
                    Due Date
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white">
                    Status
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white">
                    Priority
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-2" variant="outline">
                  <ListOrderedIcon className="h-4 w-4" />
                  <span className="hidden sm:inline text-white">Sort</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 z-50 bg-black">
                <DropdownMenuLabel className="text-white">
                  Sort by
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-white">
                  Due Date
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white">
                  Status
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white">
                  Priority
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="border shadow-sm rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px] hidden sm:table-cell">
                    <Checkbox className="text-white" />
                  </TableHead>
                  <TableHead className="text-white">Task</TableHead>
                  <TableHead className="hidden md:table-cell text-white">
                    Description
                  </TableHead>
                  <TableHead className="hidden lg:table-cell text-white">
                    Due Date
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="hidden sm:table-cell">
                    <Checkbox className="text-white" />
                  </TableCell>
                  <TableCell className="font-medium text-white">
                    Finish the marketing report
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-white">
                    Compile data and create a presentation for the team.
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-white">
                    April 30, 2023
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge
                      className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                      variant="outline"
                    >
                      Completed
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="hidden sm:table-cell">
                    <Checkbox className="text-white" />
                  </TableCell>
                  <TableCell className="font-medium text-white">
                    Finish the marketing report
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-white">
                    Compile data and create a presentation for the team.
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-white">
                    April 30, 2023
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge
                      className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                      variant="outline"
                    >
                      Completed
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="hidden sm:table-cell">
                    <Checkbox className="text-white" />
                  </TableCell>
                  <TableCell className="font-medium text-white">
                    Finish the marketing report
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-white">
                    Compile data and create a presentation for the team.
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-white">
                    April 30, 2023
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge
                      className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                      variant="outline"
                    >
                      Completed
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="hidden sm:table-cell">
                    <Checkbox className="text-white" />
                  </TableCell>
                  <TableCell className="font-medium text-white">
                    Finish the marketing report
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-white">
                    Compile data and create a presentation for the team.
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-white">
                    April 30, 2023
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge
                      className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                      variant="outline"
                    >
                      Completed
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="hidden sm:table-cell">
                    <Checkbox className="text-white" />
                  </TableCell>
                  <TableCell className="font-medium text-white">
                    Finish the marketing report
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-white">
                    Compile data and create a presentation for the team.
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-white">
                    April 30, 2023
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge
                      className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                      variant="outline"
                    >
                      Completed
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="hidden sm:table-cell">
                    <Checkbox className="text-white" />
                  </TableCell>
                  <TableCell className="font-medium text-white">
                    Finish the marketing report
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-white">
                    Compile data and create a presentation for the team.
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-white">
                    April 30, 2023
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge
                      className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                      variant="outline"
                    >
                      Completed
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="hidden sm:table-cell">
                    <Checkbox className="text-white" />
                  </TableCell>
                  <TableCell className="font-medium text-white">
                    Finish the marketing report
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-white">
                    Compile data and create a presentation for the team.
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-white">
                    April 30, 2023
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge
                      className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                      variant="outline"
                    >
                      Completed
                    </Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  );
}

function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  );
}

function CalendarCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function ListOrderedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
