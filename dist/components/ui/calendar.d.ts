import { DayPicker } from 'react-day-picker';
import * as React from "react";
type CalendarProps = React.ComponentProps<typeof DayPicker> & {
    enableMonthYearPicker?: boolean;
};
declare function Calendar({ className, classNames, showOutsideDays, enableMonthYearPicker, ...props }: CalendarProps): React.JSX.Element;
export { Calendar };
