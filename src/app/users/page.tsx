import { Form } from "@/app/users/form";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/lib/supabase";
import { format } from "date-fns";

export default async function UsersPage() {
  const { data: users, error } = await supabase.from("users").select("*");
  if (error) {
    console.error(error);
    return <div className="text-red-500">Error fetching users data</div>;
  }
  return (
    <div className="overflow-x-auto p-4 justify-center grid">
      {/* Table showing users */}
      <div className="Table">
        <Table className="min-w-full border border-gray-700 text-white">
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Password</TableHead>
              <TableHead>Date Hour</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.password}</TableCell>
                <TableCell> {user.date_hour ? format(new Date(user.date_hour), "dd-MM-yyyy HH:mm:ss") : "N/A"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* form to add users to the table */}
      <div className="Form">
        <Form />
      </div>
    </div>
  );
}
