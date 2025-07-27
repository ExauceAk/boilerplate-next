"use client";

import { Button } from "@/components/ui/button";
import { CustomSlider } from "@/components/ui/custom-slider";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Image } from "lucide-react";
import React, { Dispatch, SetStateAction, useState } from "react";
import Cropper, { Area } from "react-easy-crop";
import { ControllerRenderProps } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

export default function TheCropModal({
  children,
  setSelectedFile,
  setBase64Image,
  field,
}: {
  children: React.ReactNode;
  selectedFile: File | null;
  setSelectedFile: Dispatch<SetStateAction<File | null>>;
  base64Image: string | undefined;
  setBase64Image: Dispatch<SetStateAction<string | undefined>>;
  field?: ControllerRenderProps<any>;
}) {
  const [base64Images, setBase64Images] = useState<string | undefined>();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBase64Images(e.target?.result as string);
        field?.onChange(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onCropComplete = (_croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const getCroppedImage = async () => {
    if (!base64Images || !croppedAreaPixels) return null;

    const canvas = document.createElement("canvas");
    const image = new window.Image();
    image.src = base64Images;

    return new Promise<{ file: File; base64: string }>((resolve, reject) => {
      image.onload = () => {
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;

        canvas.width = croppedAreaPixels.width;
        canvas.height = croppedAreaPixels.height;

        const ctx = canvas.getContext("2d");

        if (!ctx) {
          reject(new Error("Failed to get 2D context"));
          return;
        }

        ctx.drawImage(
          image,
          croppedAreaPixels.x * scaleX,
          croppedAreaPixels.y * scaleY,
          croppedAreaPixels.width * scaleX,
          croppedAreaPixels.height * scaleY,
          0,
          0,
          croppedAreaPixels.width,
          croppedAreaPixels.height,
        );

        canvas.toBlob((blob) => {
          if (blob) {
            const uniqueId = uuidv4();
            const croppedFile = new File([blob], `croppedImage-${uniqueId}${Date.now()}.jpeg`, {
              type: "image/jpeg",
            });
            const base64 = canvas.toDataURL("image/jpeg");
            resolve({ file: croppedFile, base64 });
          }
        }, "image/jpeg");
      };
    });
  };

  const handleCrop = async () => {
    const croppedImage = await getCroppedImage();
    if (croppedImage) {
      setSelectedFile(croppedImage.file);
      setBase64Image(croppedImage.base64);
      setBase64Images(undefined);
    }
  };

  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="cursor-pointer"
      >
        {children}
      </DialogTrigger>
      <DialogContent className=" w-[600px] max-w-[9999px] bg-background p-9">
        <div className="">
          <div>
            {base64Images ? (
              <div className="my-2">
                <div className="relative h-72  w-full">
                  <label
                    htmlFor="SPAFile"
                    className="absolute right-1 top-1 z-20 cursor-pointer rounded-sm bg-[#F0F8E6] p-1 text-[#1D3055]"
                  >
                    <input
                      type="file"
                      id="SPAFile"
                      accept="image/*"
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                    <Image size={18} />
                  </label>

                  <Cropper
                    image={base64Images}
                    crop={crop}
                    zoom={zoom}
                    aspect={4 / 4}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                  />
                </div>
              </div>
            ) : (
              <div className="my-2 flex h-72 w-full items-center justify-center bg-[#EEF0F2]">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-sm text-[#686868]">Please select an image</p>
                  <label
                    htmlFor="SPAFile"
                    className=""
                  >
                    <input
                      type="file"
                      id="SPAFile"
                      accept="image/*"
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                    <div className="mx-auto flex cursor-pointer justify-center rounded-sm bg-white p-2 text-sm font-medium text-[#4472CA] hover:bg-white">
                      Upload
                    </div>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={cn("mt-4 flex", base64Images !== undefined ? "justify-between" : "justify-center")}>
          {base64Images !== undefined && (
            <div className="flex w-44 items-center">
              <CustomSlider
                min={1}
                max={3}
                step={0.1}
                value={[zoom]}
                aria-labelledby="Zoom"
                onValueChange={(e) => {
                  setZoom(e[0]);
                }}
              />
            </div>
          )}
          <div className="flex justify-center space-x-3">
            <DialogClose asChild>
              <Button
                type="button"
                onClick={() => setBase64Images(undefined)}
                className="border-primary-500 text-primary-600 hover:text-primary-600 border bg-background hover:bg-background"
              >
                Cancel
              </Button>
            </DialogClose>

            <DialogClose asChild>
              <Button
                type="button"
                disabled={base64Images === undefined}
                onClick={handleCrop}
                className="hover:bg-primary-500"
              >
                Crop & save
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
