import SectionText from "@/components/main/SectionText";
import Heading from "@/components/main/Heading";
import Image from "next/image";
import Divider from "../main/Divider";
import BlogCard from "../main/BlogCard";
import ABOUT1 from "@/assets/about/about-1.jpg";
import ABOUT2 from "@/assets/about/about-2.jpg";
import ABOUT3 from "@/assets/about/about-3.jpg";
import ABOUT4 from "@/assets/about/about-4.jpg";
import ARTICLE1 from "@/assets/blog/article-1.jpg"
import ARTICLE2 from "@/assets/blog/article-2.jpg"

const blogs = [
  {
    image: ARTICLE1.src,
    title: "Finding the right guitar for your style - 5 tips",
    description: "test",
  },
  {
    image: ARTICLE2.src,
    title: "Finding the right guitar for your style - 5 tips",
    description: "test",
  },
];

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col items-end gap-4">
            <Image
              src={ABOUT1}
              width={1920}
              height={1080}
              className=" h-[194.5px] w-[155.6px] md:w-[340px] md:h-[425px] "
              alt="image"
            />
            <Image
              src={ABOUT3}
              width={1920}
              height={1080}
              className="h-[97.25px] w-[77.8px] md:w-[170px] md:h-[212.5px] "
              alt="image"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src={ABOUT4}
              width={1920}
              height={1080}
              className="h-[97.25px] w-[77.8px] md:w-[170px] md:h-[212.5px] "
              alt="image"
            />
            <Image
              src={ABOUT2}
              width={1920}
              height={1080}
              className="h-[194.5px] w-[155.6px] md:w-[340px] md:h-[425px] "
              alt="image"
            />
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <SectionText title="About Us" />
          <Heading title="The success history of TEA House in 25 years" />
          <Divider width={6} />
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              reverse={index % 2 === 1}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
