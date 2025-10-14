import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  image?: string;
  title?: string;
  description?: string;
  link?: string;
  skills?: string[];
  tools?: string[];
};

export default function ProjectCard({
  image,
  title,
  description,
  link,
  tools = [],
}: ProjectCardProps) {

  return (
    <Link
      href={link ?? ""}
      target={link !== "/" ? "_blank" : undefined}
      rel="noreferrer noopener"
      className="group relative mb-30 !cursor-grab overflow-hidden rounded-2xl shadow-lg  hover:shadow-purple-500/30 transition-all duration-300"
    >
      {/* ✅ صورة المشروع */}
      <div className="overflow-hidden">
        <Image
          src={image ?? ""}
          alt={title ?? ""}
          width={800}
          height={600}
          className="w-full h-52 object-contain object-top origin-top group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5 bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e]">
        <h2 className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
          {title}
        </h2>
        <p className="mt-3  text-sm text-gray-300 line-clamp-5">
          {description}
        </p>

        {tools.length > 0 && (
          <div className="mt-4 h-20">
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs rounded-full bg-cyan-700/30 text-cyan-300 border border-cyan-500/40"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
