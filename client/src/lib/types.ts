export interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

// export const sampleUserData: UserData = {
//   id: 123456,
//   first_name: "John",
//   last_name: "Doe",
//   // username: "johndoe",
//   language_code: "en",
//   is_premium: false,
//   completedTasks: [],
//   referralCode: "ABC123",
//   referrals: [],
// };
