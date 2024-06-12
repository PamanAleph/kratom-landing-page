import BLOG from "@/assets/blog/Blog.jpg";
import SectionText from "@/components/main/SectionText";
import Heading from "@/components/main/Heading";
import Image from "next/image";
import Divider from "../main/Divider";
import BlogCard from "../main/BlogCard";

const blogs = [
    {
      image: BLOG.src,
      title: "Finding the right guitar for your style - 5 tips",
      description: "test",
    },
    {
      image: BLOG.src,
      title: "Finding the right guitar for your style - 5 tips",
      description: "test",
    },
  ];

export default function AboutUs() {
  return (
    <div className="grid grid-cols-2 max-w-7xl mx-auto">
    <div className="grid grid-cols-2">
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
    </div>
    <div className="py-10 ">
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
  )
}
