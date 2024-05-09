

export default function BoxOfficeThead() {
  return (
    <thead
    className="border-b border-neutral-200 font-medium dark:border-white/10">
     <tr className="bg-teal-900 text-green-300 font-bold">
       <th scope="col" className="px-6 py-3">Rank</th>
       <th scope="col" className="px-6 py-3">Title</th>
       <th scope="col" className="px-6 py-3">Revenue</th>
       <th scope="col" className="px-6 py-3">attendance</th>
       <th scope="col" className="px-6 py-3">Variance</th>
     </tr>
   </thead>
  )
}
