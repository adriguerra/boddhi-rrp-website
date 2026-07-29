type CalendarMockProps = {
  eventLabel: string;
  duration: string;
  monthLabel: string;
  weekdays: string[];
  /** Grid of day numbers; use `null` for empty cells */
  days: (number | null)[];
  selectedDay: number;
  timesLabel: string;
  times: string[];
  selectedTime: string;
};

/**
 * Decorative booking calendar mock for the contact section.
 * Visual only — not a live scheduler.
 */
export function CalendarMock({
  eventLabel,
  duration,
  monthLabel,
  weekdays,
  days,
  selectedDay,
  timesLabel,
  times,
  selectedTime,
}: CalendarMockProps) {
  return (
    <div className="cal-mock" aria-hidden="true">
      <div className="cal-mock__head">
        <div className="cal-mock__event">
          <span className="cal-mock__event-name">{eventLabel}</span>
          <span className="cal-mock__event-meta">{duration}</span>
        </div>
        <p className="cal-mock__month">{monthLabel}</p>
      </div>

      <div className="cal-mock__weekdays">
        {weekdays.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      <div className="cal-mock__grid">
        {days.map((day, i) =>
          day === null ? (
            <span key={`empty-${i}`} className="cal-mock__day cal-mock__day--empty" />
          ) : (
            <span
              key={day}
              className={[
                "cal-mock__day",
                day === selectedDay ? "cal-mock__day--selected" : "",
                day < selectedDay ? "cal-mock__day--muted" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {day}
            </span>
          ),
        )}
      </div>

      <div className="cal-mock__times">
        <p className="cal-mock__times-label">{timesLabel}</p>
        <div className="cal-mock__slots">
          {times.map((time) => (
            <span
              key={time}
              className={[
                "cal-mock__slot",
                time === selectedTime ? "cal-mock__slot--selected" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {time}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
