"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";
// import { useForgetPassword } from "@/services/api/models/users/hooks";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import useForgotPasswordForm, { ForgetPasswordFormValue } from "../../../hooks/auth/use-forgot-password-form";

type Props = {
  id?: string;
  className?: string;
};

export default function ForgotPasswordForm({ id, className }: Props) {
  const form = useForgotPasswordForm();
  const router = useRouter();
  // const { mutateAsync: forgetPasswordMutateAsync, isPending } = useForgetPassword();

  const onSubmit = useCallback(
    async (values: ForgetPasswordFormValue) => {
      // await forgetPasswordMutateAsync(
      //   {
      //     email: values.email,
      //   },
      //   {
      //     onSuccess: () => {
      //       router.push(routes.signin);
      //       toast({
      //         variant: "success",
      //         title: "Reset password link sent",
      //       });
      //     },
      //   },
      // );
    },
    // [forgetPasswordMutateAsync, router],
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-[#1D3055]">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="exemple@exemple.com"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          // disabled={isPending}
          className="w-full bg-[#4472CA] font-semibold hover:bg-[#4472CA]"
          type="submit"
        >
          {/* {isPending && (
            <Loader2
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )} */}
          Reset password
        </Button>
      </form>
    </Form>
  );
}
