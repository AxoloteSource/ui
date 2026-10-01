import * as React from "react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker, type CaptionLabelProps } from "react-day-picker"

import { cn } from "../../lib/utils"
import { buttonVariants } from "./button"

type CalendarView = "days" | "months" | "years"

type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  enableMonthYearPicker?: boolean
}

const arrowButtonClass = cn(
  buttonVariants({ variant: "outline" }),
  "size-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute"
)

const cellButtonClass = cn(
  buttonVariants({ variant: "ghost" }),
  "h-8 p-0 text-sm font-normal"
)

const selectedCellClass =
  "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  enableMonthYearPicker = false,
  ...props
}: CalendarProps) {
  const [view, setView] = React.useState<CalendarView>("days")
  const [month, setMonth] = React.useState<Date>(() => props.month ?? props.defaultMonth ?? new Date())
  const [yearPageStart, setYearPageStart] = React.useState<number>(
    () => Math.floor((props.month ?? props.defaultMonth ?? new Date()).getFullYear() / 10) * 10
  )

  React.useEffect(() => {
    if (props.month) {
      setMonth(props.month)
    }
  }, [props.month])

  const mergedClassNames = {
    months: "flex flex-col sm:flex-row gap-2",
    month: "flex flex-col gap-4",
    caption: "flex justify-center pt-1 relative items-center w-full",
    caption_label: "text-sm font-medium",
    nav: "flex items-center gap-1",
    nav_button: cn(
      buttonVariants({ variant: "outline" }),
      "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
    ),
    nav_button_previous: "absolute left-1",
    nav_button_next: "absolute right-1",
    table: "w-full border-collapse space-x-1",
    head_row: "w-full",
    head_cell:
      "text-center text-muted-foreground font-normal text-[0.8rem] py-1",
    row: "w-full mt-2",
    cell: cn(
      "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-primary/10 dark:[&:has([aria-selected])]:bg-white/10 [&:has([aria-selected].day-range-end)]:rounded-r-md",
      props.mode === "range"
        ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md"
        : "[&:has([aria-selected])]:rounded-md"
    ),
    day: cn(
      buttonVariants({ variant: "ghost" }),
      "size-8 p-0 font-normal aria-selected:opacity-100"
    ),
    day_range_start:
      "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground aria-selected:rounded-l-md",
    day_range_end:
      "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground aria-selected:rounded-r-md",
    day_selected:
      "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
    day_today: "ring-1 ring-primary",
    day_outside:
      "day-outside text-muted-foreground aria-selected:text-muted-foreground",
    day_disabled: "text-muted-foreground opacity-50",
    day_range_middle:
      "aria-selected:bg-primary/20 aria-selected:text-foreground dark:aria-selected:bg-white/15 aria-selected:rounded-none",
    day_hidden: "invisible",
    ...classNames,
  }

  const baseComponents = {
    IconLeft: ({ className, ...iconProps }: { className?: string }) => (
      <ChevronLeft className={cn("size-4", className)} {...iconProps} />
    ),
    IconRight: ({ className, ...iconProps }: { className?: string }) => (
      <ChevronRight className={cn("size-4", className)} {...iconProps} />
    ),
  }

  if (!enableMonthYearPicker) {
    return (
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn("p-3", className)}
        classNames={mergedClassNames}
        components={baseComponents}
        {...props}
      />
    )
  }

  const handleMonthChange = (next: Date) => {
    setMonth(next)
    props.onMonthChange?.(next)
  }

  const selectYear = (year: number) => {
    handleMonthChange(new Date(year, month.getMonth(), 1))
  }

  const selectMonth = (monthIndex: number) => {
    handleMonthChange(new Date(month.getFullYear(), monthIndex, 1))
    setView("days")
  }

  const CaptionLabel = ({ displayMonth, id }: CaptionLabelProps) => (
    <span
      id={id}
      className={cn("flex items-center justify-center gap-1", mergedClassNames.caption_label)}
    >
      <button
        type="button"
        onClick={() => setView("months")}
        className={cn(buttonVariants({ variant: "ghost" }), "h-7 px-2 text-sm font-medium")}
      >
        {format(displayMonth, "MMMM", { locale: es })}
      </button>
      <button
        type="button"
        onClick={() => {
          setYearPageStart(Math.floor(month.getFullYear() / 10) * 10)
          setView("years")
        }}
        className={cn(buttonVariants({ variant: "ghost" }), "h-7 px-2 text-sm font-medium")}
      >
        {format(displayMonth, "yyyy")}
      </button>
    </span>
  )

  if (view === "months") {
    return (
      <div className={cn("p-3 pt-4 w-[15.75rem]", className)}>
        <div className={cn(mergedClassNames.caption, "mb-2")}>
          <button
            type="button"
            aria-label="Año anterior"
            onClick={() => selectYear(month.getFullYear() - 1)}
            className={cn(arrowButtonClass, "left-1")}
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Seleccionar año"
            onClick={() => {
              setYearPageStart(Math.floor(month.getFullYear() / 10) * 10)
              setView("years")
            }}
            className={cn(buttonVariants({ variant: "ghost" }), "text-sm font-medium")}
          >
            {month.getFullYear()}
          </button>
          <button
            type="button"
            aria-label="Año siguiente"
            onClick={() => selectYear(month.getFullYear() + 1)}
            className={cn(arrowButtonClass, "right-1")}
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 12 }, (_, monthIndex) => {
            const isSelected = month.getMonth() === monthIndex
            return (
              <button
                key={monthIndex}
                type="button"
                aria-current={isSelected ? "date" : undefined}
                onClick={() => selectMonth(monthIndex)}
                className={cn(cellButtonClass, isSelected && selectedCellClass)}
              >
                {format(new Date(2024, monthIndex, 1), "MMMM", { locale: es })}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  if (view === "years") {
    return (
      <div className={cn("p-3 pt-4 w-[15.75rem]", className)}>
        <div className={cn(mergedClassNames.caption, "mb-2")}>
          <button
            type="button"
            aria-label="Década anterior"
            onClick={() => setYearPageStart((start) => start - 10)}
            className={cn(arrowButtonClass, "left-1")}
          >
            <ChevronLeft className="size-4" />
          </button>
          <span aria-current="date" className="text-sm font-medium">
            {yearPageStart} - {yearPageStart + 9}
          </span>
          <button
            type="button"
            aria-label="Década siguiente"
            onClick={() => setYearPageStart((start) => start + 10)}
            className={cn(arrowButtonClass, "right-1")}
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
        <div className="grid grid-cols-5 gap-1">
          {Array.from({ length: 10 }, (_, index) => {
            const year = yearPageStart + index
            const isSelected = month.getFullYear() === year
            return (
              <button
                key={year}
                type="button"
                aria-current={isSelected ? "date" : undefined}
                onClick={() => {
                  selectYear(year)
                  setView("months")
                }}
                className={cn(cellButtonClass, isSelected && selectedCellClass)}
              >
                {year}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <DayPicker
      {...props}
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={mergedClassNames}
      components={{ ...baseComponents, ...props.components, CaptionLabel }}
      month={month}
      onMonthChange={handleMonthChange}
    />
  )
}

export { Calendar }
