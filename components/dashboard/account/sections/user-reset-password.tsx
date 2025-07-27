import TheCropModal from "@/components/the-crop-modal";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { useUserConnectedChangeImage } from "@/services/api/models/account/hooks";
import { UserConnected } from "@/services/api/types/users";
import { ImagePlus, Pen } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import ChangeConnectedUserPasswordForm from "../forms/change-connected-user-password-form";

type Props = {
  user: UserConnected;
};

export default function UserResepasswordSection({ user }: Props) {
  // console.log(user);

  const [base64Image, setBase64Image] = useState<string | undefined>(user?.userImage ?? undefined);
  useEffect(() => {
    setBase64Image(user?.userImage);
  }, [user?.userImage]);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { mutateAsync } = useUserConnectedChangeImage();

  useEffect(() => {
    const changeImage = async () => {
      if (selectedFile) {
        await mutateAsync(
          {
            userAvatar: selectedFile!,
          },
          {
            onSuccess: () => {
              toast({
                variant: "success",
                title: "Updated",
                description: "Profile picture updated with sucess",
              });
            },
            onError: () => {
              toast({
                variant: "destructive",
                title: "Updated",
                description: "Profile picture update failed",
              });
            },
          },
        );
      }
    };
    changeImage();
    setSelectedFile(null);
  }, [selectedFile, mutateAsync]);

  return (
    <div>
      <div className="h-auto space-y-5 rounded-lg bg-white p-5 shadow-md">
        <div className="flex flex-col items-center justify-center">
          <div className=" relative mt-4 flex h-[92px] w-[92px] items-center justify-center rounded-full bg-[#E4E7EC]">
            {base64Image ? (
              <Image
                width={100}
                height={100}
                alt=""
                className="h-[92px] w-[92px]  rounded-full "
                src={base64Image}
              />
            ) : (
              <ImagePlus />
            )}
            <div className="absolute bottom-2 right-1">
              <div className=" rounded-full bg-white p-1  text-[#101828] shadow-lg">
                <TheCropModal
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
          <div className="mt-3 space-y-3 text-sm font-medium">
            <div className="text-primary-neutral-900">
              {user?.fullName} <span className="text-primary-neutral-500">(@{user?.username})</span>
            </div>
            <div className="text-primary-neutral-900">{user?.email}</div>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-y-2">
          <div className="text-sm font-medium text-primary-brand-500">Change password</div>
          <div>
            <ChangeConnectedUserPasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
}
