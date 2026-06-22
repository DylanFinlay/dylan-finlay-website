import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  summary?: string;
  href: string;
  date?: string;
  cover?: string;
}

export default function BlogCard({
  title,
  summary,
  href,
  date,
  cover,
}: CardProps) {
  return (
    <Link href={href} className="tile-light-blue-clickable group block">
      <div className="flex gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-xl font-semibold group-hover:text-blue-600">
              {title}
            </h3>
            {date && (
              <p className="text-sm font-medium text-blue-600 whitespace-nowrap">
                {date}
              </p>
            )}
          </div>
          {summary && <p className="line-clamp-2">{summary}</p>}
        </div>
        {cover && (
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-lg overflow-hidden">
            <Image
              src={cover}
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
      </div>
    </Link>
  );
}
