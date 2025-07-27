"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PasswordInput from "@/components/ui/password-input";
import { toast } from "@/components/ui/use-toast";
import routes from "@/config/routes";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {
  id?: string;
  className?: string;
};

const loginSchema = z.object({
  email: z.string().trim().email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(12, {
      message: "Password must be at least 12 characters long",
    })
    .max(50, {
      message: "Password must be at most 50 characters long",
    })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[?" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"])(?=.{8,})/, {
      message: "Password must contain at least one uppercase, one lowercase, one number and one special character",
    }),
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
      toast({
        variant: "destructive",
        title: "Login",
        // title: response?.error,
        description: response?.error,
      });
      // setIsError(true);
    }
    if (response?.ok) {
      router.push("/dashboard/account");
      toast({
        variant: "success",
        title: "Login",
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
                <Input
                  placeholder="exemple@exemple.com"
                  type="text"
                  {...field}
                />
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
              <FormLabel className="text-[#1D3055]">Mot de passe</FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder="*****"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#344054]">
            <Checkbox />
            Se souvenir de moi
          </div>

          <Link
            className="block text-[#0E49BE]"
            href={routes.forgotPassword}
          >
            Mot de passe oublié
          </Link>
        </div>

        <Button
          className="w-full bg-[#4472CA] font-semibold hover:bg-[#4472CA]"
          type="submit"
          disabled={form.formState.isSubmitting || !form.formState.isValid}
        >
          {form.formState.isSubmitting && (
            <Loader2
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Connexion
        </Button>
      </form>
    </Form>
  );
}
