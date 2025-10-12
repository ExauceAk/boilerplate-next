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
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type Props = {
  id?: string;
  className?: string;
};

const loginSchema = z.object({
  email: z.email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters long",
    })
    .max(50, {
      message: "Password must be at most 50 characters long",
    })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[?" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"])(?=.{8,})/,
      {
        message:
          "Password must contain at least one uppercase, one lowercase, one number and one special character",
      }
    ),
});

type Credentials = z.infer<typeof loginSchema>;

export default function LoginForm({ id, className }: Props) {
  const router = useRouter();

  const form = useForm<Credentials>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const onSubmit = async (data: Credentials) => {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    // console.log("response of log ==>", response);
    if (response?.status !== 201) {
      toast("Login", {
        description: response?.error,
      });
    }
    if (response?.ok) {
      router.push("/");
      toast("Login", {
        description: "Connected successfully!",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        id={id}
        className={cn("space-y-6", className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
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

        <FormField
          control={form.control}
          name="password"
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

        <div className=" flex items-center justify-between">
          <Link className="block text-[#0E49BE]" href="/forgot-password">
            Password forgotten?
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
          Login
        </Button>
      </form>
    </Form>
  );
}
