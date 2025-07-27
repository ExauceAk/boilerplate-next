import Image from "next/image";

export default function AuthBgSvg({ className }: { className?: string }) {
  return (
    <>
      {/* <Image
				src="/images/dental-braces-1.png"
				alt="dental-braces-1-img"
				height={400}
				width={400}
				className="hidden md:block absolute top-36 right-16 2xl:right-24 z-40"
			/> */}
      <Image
        src="/images/auth.svg"
        alt="dental-braces-2-img"
        height={400}
        width={400}
        className={` h-full w-full ${className} `}
      />
    </>
  );
}
