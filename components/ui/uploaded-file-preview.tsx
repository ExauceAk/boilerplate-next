import { formatBytes } from "@/lib/utils";
import { FileIcon, X } from "lucide-react";
import Image from "next/image";
import { Progress } from "./progress";

type Props = {
  defaultValue?: File | null;
  file: File;
  handleRemoveFile: (e: any) => void;
  uploadProgress: number;
};

export default function UploadedFilePreview({ defaultValue, file, handleRemoveFile, uploadProgress }: Props) {
  // console.log(defaultValue);
  // @ts-ignore

  return (
    <div className="rounded-xl border p-2">
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex flex-1 items-center gap-x-3">
            {defaultValue === null && file.type && file.type.startsWith("image") && (
              <div className="flex size-11 items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  height={50}
                  width={50}
                  className="size-full object-cover"
                />
              </div>
            )}
            {defaultValue !== null && (
              <div className="flex size-11 flex-none items-center justify-center rounded-lg border border-slate-300 p-1">
                <FileIcon className="size-5 text-slate-400" />
              </div>
            )}
            <div className="flex max-w-[250px] flex-col items-start overflow-hidden">
              <p className="line-clamp-1 text-sm font-medium text-primary-neutral-700">{file.name}</p>
              <span className="text-xs">{file.size && formatBytes(file.size)}</span>
            </div>
          </div>
          <div
            onClick={handleRemoveFile}
            className="ease flex size-6 cursor-pointer items-center justify-center rounded-md  transition-colors hover:bg-slate-100"
          >
            <X className="size-4 text-primary-neutral-500" />
          </div>
        </div>
        {!defaultValue && (
          <div className="flex items-center gap-x-5">
            <Progress
              value={uploadProgress}
              className="h-1.5 w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
}
