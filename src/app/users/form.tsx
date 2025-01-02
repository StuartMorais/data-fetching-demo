import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabaseAdmin } from "@/lib/supabase";

export function Form() {
  async function handleFormSubmission(formData: FormData) {
    'use server';

    const name = formData.get('name')?.toString() ?? '';
    const email = formData.get('email')?.toString() ?? '';
    const password = formData.get('password')?.toString() ?? '';

    try {
      const { error } = await supabaseAdmin.from('users').insert([
        { name, email, password },
      ]);
      if (error) {
        console.error('Error inserting data:', error);
        return;
      }

      console.log('User successfully created:', { name, email });
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  }

  return (
    <div className="grid w-full justify-center gap-1.5 my-8 text-white">
      <form action={handleFormSubmission}>
        <Label htmlFor="name">User Name</Label>
        <Input type="text" id="name" name="name" placeholder="User" required />

        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" placeholder="Email" required />

        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" name="password" placeholder="Password" required />

        <Button type="submit" className="mx-10 my-5">
          Submit
        </Button>
      </form>
    </div>
  );
}
