import { db } from '@/db'
import { redirect } from 'next/navigation';

export default function SnippetCreatePage() {


  async function createSnippet(formData: FormData) {
    // This needs to be a server action
    'use server';

    // Check the users' input make sure the're valid
    const title = formData.get('title') as string
    const code = formData.get('code') as string

    // Create a new record in the database
    const newSnippet = await db.snippet.create({
      data: {
        title,
        code
      }
    })

    // Redirect to the snippet list
    redirect('/')
  }


  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">Title</label>
          <input type="text" name="title" className="border rounded p-2 w-full" />
        </div>
        <div className="flex gap-4">
          <label htmlFor="code" className="w-12">Code</label>
          <textarea name="code" className="border rounded p-2 w-full" />
        </div>
        <button className=" rounded p-2 bg-blue-200" type="submit">
          Create
        </button>
      </div>
    </form>

  )
}