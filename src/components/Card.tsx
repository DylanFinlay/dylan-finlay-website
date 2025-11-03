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
      className="block p-4 border rounded-lg hover:shadow-md transition-shadow"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {date && <p className="text-sm text-gray-500 mb-2">{date}</p>}
      {summary && <p className="text-gray-700">{summary}</p>}
    </Link>
  );
}
