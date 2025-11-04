import Link from "next/link";

interface CardProps {
  title: string;
  summary?: string;
  href: string;
  date?: string;
}

export default function BlogCard({ title, summary, href, date }: CardProps) {
  return (
    <Link href={href} className="tile-light-blue-clickable group block">
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
    </Link>
  );
}
