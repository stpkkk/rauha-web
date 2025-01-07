export type Guest = {
  id?: number;
  created_at?: Date | string;
  fullName?: string | null;
  passportId?: number;
  email?: string | null;
  homeTown?: string;
};