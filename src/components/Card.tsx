import Link from "next/link";

interface CardProps {
  title: string;
  summary?: string;
  href: string;
  date?: string;
}

export default function Card({ title, summary, href, date }: CardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-lg border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-blue-200 hover:shadow-lg"
    >
      <h3 className="mb-2 text-xl font-semibold text-slate-900 transition-colors group-hover:text-blue-600">
        {title}
      </h3>
      {date && (
        <p className="mb-3 text-sm font-medium text-slate-500">{date}</p>
      )}
      {summary && <p className="text-slate-600 line-clamp-2">{summary}</p>}
    </Link>
  );
}
