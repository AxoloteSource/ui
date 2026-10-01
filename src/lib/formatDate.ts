export const formatDate = (date: string | Date): string => {
  const value = typeof date === 'string' ? new Date(date) : date
  return value.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}
