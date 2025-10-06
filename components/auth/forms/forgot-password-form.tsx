"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useForgotPasswordForm from "@/hooks/auth/use-forgot-password-form";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ForgotPasswordForm() {
  const router = useRouter();

  const form = useForgotPasswordForm();

  const onSubmit = async (data: any) => {};

  return (
    <Form {...form}>
      <form className={cn("space-y-6")} onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-[#1D3055]">Email</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className=" flex items-center justify-between">
          <Link className="block text-[#0E49BE]" href="/login">
            Connect
          </Link>
        </div>

        <Button
          className="w-full bg-purple-400 font-semibold hover:bg-purple-400 w-1/3"
          type="submit"
          disabled={form.formState.isSubmitting || !form.formState.isValid}
        >
          {form.formState.isSubmitting && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
          )}
          Submit
        </Button>
      </form>
    </Form>
  );
}
