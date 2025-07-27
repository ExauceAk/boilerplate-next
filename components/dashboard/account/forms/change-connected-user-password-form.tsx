import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import PasswordInput from "@/components/ui/password-input";
import { toast } from "@/components/ui/use-toast";
import useUserPasswordForm, { UseConnectedrPasswordInformation } from "@/hooks/users/use-user-forms";
import { cn } from "@/lib/utils";
import { useResetUserConnectedPassword } from "@/services/api/models/account/hooks";
import { Loader2 } from "lucide-react";
import { signOut } from "next-auth/react";
import { useCallback } from "react";

export default function ChangeConnectedUserPasswordForm() {
  const form = useUserPasswordForm();

  const { mutateAsync } = useResetUserConnectedPassword();

  const handleSuccess = useCallback(() => {
    form.reset();
    toast({
      variant: "success",
      title: "Change Password User",
      description: "User  Password changed successfully",
    });
    signOut();
  }, [form]);

  const onSubmit = useCallback(
    async (values: UseConnectedrPasswordInformation) => {
      await mutateAsync(
        {
          password: values.oldPassword,
          newPassword: values.newPassword,
          confirmPassword: values.confirmPassword,
        },
        {
          onSuccess: () => handleSuccess(),
          onError: (error: any) => {
            toast({
              variant: "destructive",
              title: error ?? "Change Password User",
            });
          },
        },
      );
    },
    [mutateAsync, handleSuccess],
  );

  return (
    <div>
      <Form {...form}>
        <form
          className={cn("space-y-2")}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="oldPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary-neutral-700">Old Password</FormLabel>
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
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary-neutral-700">New Password</FormLabel>
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
                <FormLabel className="text-primary-neutral-700">Confirm Password</FormLabel>
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
            disabled={form.formState.isSubmitting}
            className="w-full bg-primary-brand-500 text-white"
            type="submit"
          >
            {form.formState.isSubmitting && (
              <Loader2
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
            Save Change
          </Button>
        </form>
      </Form>
    </div>
  );
}
