import { CabinType } from "./cabin";

export type BookingType =
  | {
      id: number;
      guestId: number;
      startDate: Date | string;
      endDate: Date | string;
      numNights: number;
      totalPrice: number;
      numGuests: number;
      status: string;
      created_at: Date | string;
      cabins: Partial<CabinType>;
    }
  | [];
