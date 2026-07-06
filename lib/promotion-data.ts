export interface Promotion {
  id: string;
  description: string;
  actionLink: string;
  endTime: Date;
}

// Helper to get a future date for countdown
const getFutureDate = (days: number, hours: number, minutes: number, seconds: number) => {
  const now = new Date();
  now.setDate(now.getDate() + days);
  now.setHours(now.getHours() + hours);
  now.setMinutes(now.getMinutes() + minutes);
  now.setSeconds(now.getSeconds() + seconds);
  return now;
};

export const promotionsData: Promotion[] = [
  {
    id: "promo-1",
    description: "Free Sign Up Bonus up to ₹1000",
    endTime: getFutureDate(2, 23, 59, 34),
    actionLink: "https://gangaclub-app.pages.dev", // Example external link
  },
  {
    id: "promo-2",
    description: "Free Deposit Bonus up to 200%",
    endTime: getFutureDate(4, 23, 59, 34),
    actionLink: "https://gangaclub-app.pages.dev", // Example external link
  },
  {
    id: "promo-3",
    description: "Free Reload Bonus up to 150%",
    endTime: getFutureDate(1, 23, 59, 34),
    actionLink: "https://gangaclub-app.pages.dev", // Example external link
  },
  {
    id: "promo-4",
    description: "Cashback Weekly up to 77%",
    endTime: getFutureDate(6, 23, 59, 34),
    actionLink: "https://gangaclub-app.pages.dev", // Example external link
  },
  {
    id: "promo-5",
    description: "Daily Login Rewards",
    endTime: getFutureDate(0, 12, 30, 0),
    actionLink: "https://gangaclub-app.pages.dev", // Example external link
  },
  {
    id: "promo-6",
    description: "Refer a Friend Bonus - Get ₹500!",
    endTime: getFutureDate(7, 0, 0, 0),
    actionLink: "https://gangaclub-app.pages.dev", // Example external link
  },
  {
    id: "promo-7",
    description: "Special Weekend Tournament - Win Big!",
    endTime: getFutureDate(3, 18, 0, 0),
    actionLink: "https://gangaclub-app.pages.dev", // Example external link
  },
  {
    id: "promo-8",
    description: "Birthday Bonus - Exclusively for You!",
    endTime: getFutureDate(10, 0, 0, 0),
    actionLink: "https://gangaclub-app.pages.dev", // Example external link
  },
  {
    id: "promo-9",
    description: "New Game Launch Bonus - Try Now!",
    endTime: getFutureDate(5, 6, 0, 0),
    actionLink: "https://gangaclub-app.pages.dev", // Example external link
  },
  {
    id: "promo-10",
    description: "VIP Exclusive Offers - Join Our Club!",
    endTime: getFutureDate(14, 0, 0, 0),
    actionLink: "https://gangaclub-app.pages.dev", // Example external link
  },
];
