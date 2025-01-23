"use client";

import {
  createContext,
  useState,
  ReactNode,
  use,
  Dispatch,
  SetStateAction,
} from "react";
import { DateRange } from "react-day-picker";

type ReservationContextType = {
  range: DateRange | undefined;
  setRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  resetRange: () => void;
  setHasBreakfast: Dispatch<SetStateAction<boolean>>;
  hasBreakfast: boolean;
  numGuests: number;
  setNumGuests: Dispatch<SetStateAction<number>>;
};

type ReservationProviderProps = {
  children: ReactNode;
};

const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined,
);

const initialState: DateRange = {
  from: undefined,
  to: undefined,
};

function ReservationProvider({ children }: ReservationProviderProps) {
  const [range, setRange] = useState<DateRange | undefined>(initialState);
  const [hasBreakfast, setHasBreakfast] = useState<boolean>(false);
  const [numGuests, setNumGuests] = useState<number>(1);

  const resetRange = () => {
    setRange(initialState);
  };

  return (
    <ReservationContext.Provider
      value={{
        range,
        setRange,
        resetRange,
        hasBreakfast,
        setHasBreakfast,
        numGuests,
        setNumGuests,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = use(ReservationContext);
  if (context === undefined) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
}

export { ReservationProvider, useReservation };
