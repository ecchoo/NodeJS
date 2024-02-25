import { DATE_OPTIONS } from "@/constants/dateOptions"

export const convertDate = (date) => {
    const convertedDate = new Date(date)

    return convertedDate.toLocaleString('ru', DATE_OPTIONS)
}