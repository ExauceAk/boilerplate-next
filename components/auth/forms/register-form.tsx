"use client";

import TheCropModal from "@/components/the-crop-modal";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PasswordInput from "@/components/ui/password-input";
import { toast } from "@/components/ui/use-toast";
import routes from "@/config/routes";
import useRegisterForm, { CreateUserFormValues } from "@/hooks/auth/use-register-form";
import { cn } from "@/lib/utils";
import { useAllDepartmentsData } from "@/services/api/models/department/hooks";
import { useCheckUsername, useCreateUser, useCreateUsername } from "@/services/api/models/users/hooks";
import { ImagePlus, Loader2, Pen } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

type Props = {
  id?: string;
  className?: string;
};

export default function RegisterForm({ id, className }: Props) {
  ///username auto

  const { mutateAsync: createUsernameMutateAsync } = useCreateUsername();

  const form = useRegisterForm();

  const isValidFullname = (fullname: string): boolean => {
    // Expression régulière pour vérifier l'email
    const fullnameRegex: RegExp = /^.{5,}$/;
    return fullnameRegex.test(fullname);
  };

  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    setIsValid(isValidFullname(form.watch("fullname")));
  }, [form.watch("fullname")]);

  useEffect(() => {
    const fetchData = async () => {
      if (isValid) {
        try {
          await createUsernameMutateAsync(
            {
              fullname: form.watch("fullname"),
            },
            {
              onSuccess: (data) => {
                form.setValue("username", data.username);
              },
            },
          );
        } catch (error) {
          // console.error("Error:", error);
        }
      }
    };

    fetchData();
  }, [form.watch("fullname"), isValid]);

  // Create Username section
  const { mutateAsync: checkUsernameMutateAsync } = useCheckUsername();

  const isValidUsername = (username: string): boolean => {
    const emailRegex: RegExp = /^.{3,}$/;
    return emailRegex.test(username);
  };

  const [isValidUserName, setIsValidUserName] = useState<boolean>(false);
  const [usernameResponse, setUsernameResponse] = useState("");

  useEffect(() => {
    setIsValidUserName(isValidUsername(form.watch("username")));
  }, [form.watch("username")]);

  useEffect(() => {
    const fetchData = async () => {
      if (isValidUserName) {
        try {
          await checkUsernameMutateAsync(
            {
              username: form.watch("username"),
            },
            {
              onSuccess: (data) => {
                // console.log("data", data);
                setUsernameResponse(data.message);
              },
            },
          );
        } catch (error) {
          // console.error("Error:", error);
        }
      }
    };

    fetchData();
  }, [form.watch("username"), isValid]);

  // Create username

  const { data: allDep } = useAllDepartmentsData();

  const [base64Image, setBase64Image] = useState<string | undefined>();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const router = useRouter();

  const { mutateAsync: createUserMutateAsync } = useCreateUser();

  const onSubmit = useCallback(
    async (values: CreateUserFormValues) => {
      await createUserMutateAsync(
        {
          image: selectedFile,
          username: values.username,
          department: values.department,
          password: values.password,
          confirmPassword: values.confirmPassword,
          email: values.email,
          fullname: values.fullname,
        },

        {
          onSuccess: () => {
            router.push(routes.signin);
            toast({
              variant: "success",
              title: "Registered",
              description: "Registered successfully",
            });
          },
          onError: (error: any) => {
            toast({
              variant: "destructive",
              title: error.message ?? "Registration failed",
            });
          },
        },
      );
    },
    [createUserMutateAsync, router, selectedFile],
  );
  // console.log("selectedFile", form.watch("file"));
  return (
    <Form {...form}>
      <form
        id={id}
        className={cn("space-y-6", className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className=" relative mt-4 flex h-[92px] w-[92px] items-center justify-center rounded-full bg-[#E4E7EC]">
                  {base64Image ? (
                    <Image
                      width={100}
                      height={100}
                      alt=""
                      className="h-[92px] w-[92px] rounded-full "
                      src={base64Image}
                    />
                  ) : (
                    <ImagePlus />
                  )}
                  <div className="absolute bottom-2 right-1">
                    <div className=" rounded-full bg-white p-1  text-[#101828] shadow-lg">
                      <TheCropModal
                        //@ts-ignore
                        field={field}
                        base64Image={base64Image}
                        setBase64Image={setBase64Image}
                        selectedFile={selectedFile}
                        setSelectedFile={setSelectedFile}
                      >
                        <Pen size={16} />
                      </TheCropModal>
                    </div>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
              <span>
                {form.getFieldState("file").invalid ||
                (form.getFieldState("file").isTouched && form.getValues("file") === "")
                  ? "Profile image is required"
                  : ""}
              </span>
            </FormItem>
          )}
        />

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
