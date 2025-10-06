"use client";

import PasswordInput from "@/components/password-input";
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
import useResetPasswordForm from "@/hooks/auth/use-reset-password-form";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ResetPasswordForm() {
  const router = useRouter();

  const form = useResetPasswordForm();

  const onSubmit = async (data: any) => {};

  return (
    <Form {...form}>
      <form className={cn("space-y-6")} onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#1D3055]">Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="*****" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#1D3055]">Confirm password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="*****" {...field} />
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
          Register
        </Button>
      </form>
    </Form>
  );
}
