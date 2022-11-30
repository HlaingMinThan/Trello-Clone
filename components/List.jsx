import React from 'react'
import Task from '../components/Task'

export default function List({ list }) {
    return (
        <div className="rounded bg-gray-300  flex-no-shrink w-64 p-2 mr-3">
            <div className="flex justify-between py-1">
                <h3 className="text-sm font-bold">{list.name}</h3>
                <svg className="h-4 fill-current text-grey-dark cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" /></svg>
            </div>
            {list.tasks.map(task => {
                return (
                    <Task task={task} />
                )
            })}
            <div className="mt-2 ml-2 text-grey-dark">Add a card...</div>
        </div>
    )
}
