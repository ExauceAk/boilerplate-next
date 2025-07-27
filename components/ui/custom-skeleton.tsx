// import { Skeleton } from "@/components/ui/skeleton";

// export function CustomSkeleton() {
//   return (
//     <div className="mt-2 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

//       <div className="shadow-ta rounded-2xl bg-white">
//         <div className="p-4">
//           <div className="border-b p-2">
//             <p className="text-[17px] font-bold">
//               <Skeleton />
//             </p>
//           </div>
//           <div className="flex justify-between p-2">
//             <p className="mt-2 text-[13px]">
//               <span>
//                 <Skeleton />
//               </span>
//               <span className="text-gray-400">
//                 {" "}
//                 <Skeleton />
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { Skeleton } from "@/components/ui/skeleton";

export function CustomSkeleton() {
  return (
    <div className="mt-2 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <div className="shadow-ta w-[400px] rounded-2xl bg-white">
        <div className="p-4">
          <div className="border-b p-2">
            <Skeleton className="h-[22px] w-[250px]" />
          </div>
          <div className="flex justify-between p-2">
            <Skeleton className="h-[22px] w-[250px]" />

            <Skeleton className="h-[17px] w-[17px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
