"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PasswordInput from "@/components/ui/password-input";
import useRegisterForm, { CreateUserFormValues } from "@/hooks/auth/use-register-form";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

type Props = {
  id?: string;
  className?: string;
};

export default function RegisterForm({ id, className }: Props) {
  // const { mutateAsync: createUsernameMutateAsync } = useCreateUsername();

  const form = useRegisterForm();

  const isValidFullname = (fullname: string): boolean => {
    // Expression régulière pour vérifier l'email
    const fullnameRegex: RegExp = /^.{5,}$/;
    return fullnameRegex.test(fullname);
  };

  const [isValid, setIsValid] = useState<boolean>(false);

  const [isValidUserName, setIsValidUserName] = useState<boolean>(false);
  const [usernameResponse, setUsernameResponse] = useState("");

  // const { data: allDep } = useAllDepartmentsData();
  const allDep = [];

  const [base64Image, setBase64Image] = useState<string | undefined>();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const router = useRouter();

  // const { mutateAsync: createUserMutateAsync } = useCreateUser();

  const onSubmit = useCallback(
    async (values: CreateUserFormValues) => {
      // await createUserMutateAsync(
      //   {
      //     image: selectedFile,
      //     username: values.username,
      //     department: values.department,
      //     password: values.password,
      //     confirmPassword: values.confirmPassword,
      //     email: values.email,
      //     fullname: values.fullname,
      //   },
      //   {
      //     onSuccess: () => {
      //       router.push(routes.signin);
      //       toast({
      //         variant: "success",
      //         title: "Registered",
      //         description: "Registered successfully",
      //       });
      //     },
      //     onError: (error: any) => {
      //       toast({
      //         variant: "destructive",
      //         title: error.message ?? "Registration failed",
      //       });
      //     },
      //   },
      // );
    },
    // [createUserMutateAsync, router, selectedFile],
    [],
  );
  // console.log("selectedFile", form.watch("file"));
  return (
    <Form {...form}>
      <form
        id={id}
        className={cn("space-y-6", className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-2 items-center gap-4">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-[#1D3055]">Full name</FormLabel>
                <FormControl>
                  <div>
                    <Input
                      placeholder="Full name"
                      type="text"
                      {...field}
                    />
                    <span
                      className={`text-sm text-transparent ${usernameResponse === "Username available" ? "text-green-500" : "text-red-500"}`}
                    >
                      {usernameResponse && usernameResponse}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-[#1D3055]">Username</FormLabel>
                <FormControl>
                  <div>
                    <Input
                      placeholder="username"
                      {...field}
                    />
                    <span
                      className={`text-xs text-gray-500 ${usernameResponse === "Username available" ? "text-green-500" : "text-red-500"}`}
                    >
                      {usernameResponse && usernameResponse}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#1D3055]">Confirmez le mot de passe</FormLabel>
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
          className="w-full"
          type="submit"
        >
          {form.formState.isSubmitting && (
            <Loader2
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          S&apos;inscrire
        </Button>
      </form>
    </Form>
  );
}
