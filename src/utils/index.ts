import dayjs from "dayjs";
import type { Message } from "../types";

/** Định dạng ngày theo format truyền vào.
 * Mặc định format: 'DD/MM/YYYY'.
 * VD: formatDate('2025-06-22') // '22/06/2025'
 */
export const formatDate = (
  date: string | Date | dayjs.Dayjs,
  format = "HH:mm:ss DD/MM/YYYY",
): string => {
  const d = dayjs(date);

  if (!d.isValid()) {
    return "";
  }

  return d.format(format);
};

export const buildMessagesWithDate = (messages: Message[]) => {
  const result: Message[] = [];

  messages.forEach((msg, index) => {
    const currentDate = msg.timeStamp.split(" ")[1];
    const prevDate =
      index > 0 ? messages[index - 1].timeStamp.split(" ")[1] : null;

    // Nếu là message đầu tiên hoặc khác ngày
    if (currentDate !== prevDate) {
      result.push({
        from: "date",
        text: currentDate,
        timeStamp: currentDate,
      });
    }

    result.push({
      ...msg,
    });
  });

  return result;
};
