import React from "react";
import Datetime from "../../component/calendar/Datetime";

// import Calendar from "../../components/Calender";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

function Nav() {
  // const [value] = useState(new Date());
  return (
    <aside className="menu-area">
      <div className="calendar">
        {/* <Calendar
          calendarType="US"
          // oneWeekCalendar={true}
          // onChange={onChange}
          value={value}
          // defaultView={"century"}
        /> */}

        <Datetime/>

      </div>
    </aside>
  );
}

export default Nav;