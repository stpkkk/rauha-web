import { CabinType } from "./cabin";

export type BookingType = {
  id: number;
  created_at: Date | string;
  guestId: number;
  startDate: Date | string;
  endDate: Date | string;
  numNights: number;
  totalPrice: number;
  numGuests: number;
  status?: string;
  cabins:
    | Pick<CabinType, "name" | "image">
    | Array<Pick<CabinType, "name" | "image">>;
  observations?: string;
  cabinId: number;
  hasBreakfast: boolean;
};