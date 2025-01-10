import { CabinType } from "./cabin";

export type BookingType =
  | {
      id: number;
      created_at: Date | string;
      guestId: number;
      startDate: Date | string;
      endDate: Date | string;
      numNights: number;
      totalPrice: number;
      numGuests: number;
      status: string;
      cabins: Partial<CabinType>;
      observations?: string;
    }
  | [];
