import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";

export default function DateRangeCalendarCalendarsProp() {
  return (
    <div className="h-screen flex justify-center">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateRangeCalendar", "DateRangeCalendar"]}>
          <DemoItem label="1 calendar">
            <DateRangeCalendar calendars={1} />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
