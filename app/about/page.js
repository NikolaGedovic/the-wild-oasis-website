import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";
import { getCabins } from "../_lib/data-service";

export const revalidate = 86400;

export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div className="flex flex-col gap-y-16 md:gap-y-32">
      {/* First section: text left, image right */}
      <div className="flex flex-col md:grid md:grid-cols-5 md:gap-x-24 md:items-center">
        <div className="space-y-8 md:col-span-3">
          <h1 className="mb-4 text-3xl font-medium md:text-4xl text-accent-400">
            Welcome to The Wild Oasis
          </h1>
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&apos;s not just about the luxury
            cabins. It&apos;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <p>
            Our {cabins.length} luxury cabins provide a cozy base, but the real
            freedom and peace you&apos;ll find in the surrounding mountains.
            Wander through lush forests, breathe in the fresh air, and watch the
            stars twinkle above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>

        <div className="md:col-span-2">
          <Image
            src={image1}
            alt="Family sitting around a fire pit in front of cabin"
            placeholder="blur"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Second section: text first on mobile, image right on desktop */}
      <div className="flex flex-col md:grid md:grid-cols-5 md:gap-x-24 md:items-center">
        {/* Text */}
        <div className="flex flex-col justify-between order-first space-y-8 md:col-span-3 md:order-none">
          <div>
            <h1 className="mb-4 text-3xl font-medium md:text-4xl text-accent-400">
              Managed by our family since 1962
            </h1>
            <p>
              Since 1962, The Wild Oasis has been a cherished family-run
              retreat. Started by our grandparents, this haven has been nurtured
              with love and care, passing down through our family as a testament
              to our dedication to creating a warm, welcoming environment.
            </p>
            <p>
              Over the years, we&apos;ve maintained the essence of The Wild
              Oasis, blending the timeless beauty of the mountains with the
              personal touch only a family business can offer. Here, you&apos;re
              not just a guest; you&apos;re part of our extended family. So join
              us at The Wild Oasis soon, where tradition meets tranquility, and
              every visit is like coming home.
            </p>
          </div>

          {/* Button for desktop */}
          <div className="hidden mt-4 md:flex">
            <a
              href="/cabins"
              className="inline-block px-8 py-5 text-lg font-semibold transition-all bg-accent-500 text-primary-800 hover:bg-accent-600"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="order-last md:col-span-2 md:order-none">
          <Image
            src={image2}
            alt="Family that manages The Wild Oasis"
            placeholder="blur"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Button for mobile */}
      <div className="flex justify-center mt-8 md:hidden">
        <a
          href="/cabins"
          className="inline-block px-8 py-5 text-lg font-semibold transition-all bg-accent-500 text-primary-800 hover:bg-accent-600"
        >
          Explore our luxury cabins
        </a>
      </div>
    </div>
  );
}
