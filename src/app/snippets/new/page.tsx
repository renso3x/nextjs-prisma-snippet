'use client'
import * as actions from '@/actions';
import { useFormState } from 'react-dom';

export default function SnippetCreatePage() {
  const [formState, action] = useFormState(actions.createSnippet, { message: '' })

  return (
    <form action={action}>
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

        {formState.message ?
          <div className='my-2 p-2 bg-red-200 border rounded border-red-400'>{formState.message}</div> : null}

        <button className=" rounded p-2 bg-blue-200" type="submit">
          Create
        </button>
      </div>
    </form>

  )
}