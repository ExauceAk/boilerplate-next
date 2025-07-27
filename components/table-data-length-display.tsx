import { formatDataLength } from "@/lib/utils";

export default function TableDataLengthDisplay({ length }: { length: number }) {
  return (
    <div className="flex items-center justify-center rounded-full border border-primary-neutral-200 bg-primary-brand-50 px-2 text-sm font-semibold text-primary-brand-600">
      {length <= 0 ? "0" : formatDataLength(length)}
    </div>
  );
}
