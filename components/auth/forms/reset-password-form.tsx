"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import PasswordInput from "@/components/ui/password-input";
import useResetPasswordForm, { ResetPasswordInformation } from "@/hooks/auth/use-reset-password-form";

import { cn } from "@/lib/utils";
// import { useResetPassword } from "@/services/api/models/users/hooks";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

type Props = {
  id?: string;
  className?: string;
  Token?: string;
};

export default function ResetPasswordForm({ id, className, Token }: Props) {
  const form = useResetPasswordForm();

  const router = useRouter();
  // const { mutateAsync: resetPasswordMutateAsync } = useResetPassword();

  const onSubmit = useCallback(
    async (values: ResetPasswordInformation) => {
      // await resetPasswordMutateAsync(
      //   {
      //     password: values.newPassword,
      //     confirmPassword: values.confirmPassword,
      //     token: Token || "",
      //   },
      //   {
      //     onSuccess: () => {
      //       router.push(routes.signin);
      //       toast({
      //         variant: "success",
      //         description: "Password reseted successfully",
      //       });
      //     },
      //   },
      // );
    },
    // [Token, resetPasswordMutateAsync, router],
    [],
  );

  return (
    <Form {...form}>
      <form
        id={id}
        className={cn("space-y-6", className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-[#1D3055]">New Password</FormLabel>
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
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-[#1D3055]">Confirm new Password</FormLabel>
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

        <Button
          disabled={form.formState.isSubmitting || !form.formState.isValid}
          className="w-full bg-[#4472CA] font-semibold hover:bg-[#4472CA]"
          type="submit"
        >
          {form.formState.isSubmitting && (
            <Loader2
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Valide
        </Button>
      </form>
    </Form>
  );
}
