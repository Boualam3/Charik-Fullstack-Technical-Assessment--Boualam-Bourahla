import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import isToday from 'dayjs/plugin/isToday';

dayjs.extend(relativeTime);
dayjs.extend(isToday);



const now = dayjs();  // Current date and time

export const displayDate = (nativeDate:string):string => {

    const createdAt = dayjs(nativeDate); 
    let shownDate

    // If the date is today, show time
    if (createdAt.isToday()) {
        shownDate = `today, ${createdAt.format('HH:mm')}`; // e.g., " today, 10:15"
    }
    // If yesterday
    else if (now.diff(createdAt, 'day') === 1) {
        shownDate = `yesterday, ${createdAt.format('HH:mm')}`; // e.g., "yesterday, 10:15"
    }
    // If the date is within the last 7 days, show "X days ago"
    else if (now.diff(createdAt, 'day') <= 7) {
        shownDate = createdAt.fromNow();  // e.g., "2 days ago"
    }
    // If the date is older than 7 days, show the exact day and month
    else {
        shownDate = createdAt.format('D MMMM');  // e.g., "4 September"
    }

    return shownDate
}