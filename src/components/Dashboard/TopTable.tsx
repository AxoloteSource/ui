import Card from '../Card'
import CardTitle from '../Card/partials/CardTitle'

export interface TopTableProps {
  title: string
  columns: string[]
  rows: { id: number | string; cells: React.ReactNode[] }[]
}

const TopTable = ({ title, columns, rows }: TopTableProps) => {
  return (
    <Card className="rounded-xl p-5">
      <CardTitle>{title}</CardTitle>
      <div className="overflow-hidden rounded-lg border border-gray-100 dark:border-gray-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-xs tracking-wide text-gray-500 uppercase dark:bg-gray-800/60 dark:text-gray-400">
            <tr>
              {columns.map((col) => (
                <th key={col} className="px-4 py-2 font-semibold">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {rows.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="px-4 py-4 text-center text-gray-400 dark:text-gray-500">
                  Sin registros para mostrar
                </td>
              </tr>
            )}
            {rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/40">
                {row.cells.map((cell, i) => (
                  <td key={i} className="px-4 py-2.5 text-gray-700 dark:text-gray-300">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default TopTable
