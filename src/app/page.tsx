import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany()
  const renderedSnippets = snippets.map((snippet) => (
    <Link key={snippet.id} href={`/snippets/${snippet.id}`} className="flex justify-between items-center p-2 border rounded">

      {snippet.title}

      <div>View</div>
    </Link>
  ))


  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link className="border p-2 rounded" href={'/snippets/new'}>New</Link>
      </div>
      <div className="flex flex-col gap-2">
        {renderedSnippets}
      </div>
    </div>
  );
}
