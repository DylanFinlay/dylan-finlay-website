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
      <h3 className="mb-2 text-xl font-semibold group-hover:text-primary-600">
        {title}
      </h3>
      {date && (
        <p className="mb-3 text-sm font-medium text-primary-600">{date}</p>
      )}
      {summary && <p className="line-clamp-2">{summary}</p>}
    </Link>
  );
}
