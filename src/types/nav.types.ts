import {
  SOFTSKILL_TRAINING,
  IN_VENUE_TEAM_BUILDING,
  OUTING_SPECIALS,
  CORPORATE_EVENT,
  FAMILY_GATHERING,
  RETIREMENT_PREPARATION,
} from "@/lib/const";

export type NavMenuItem = {
  title: string;
  href: string;
  blank: boolean;
  arrow: boolean;
  products: ProductNav[];
};

export type ProductNav = {
  title: string;
  href: string;
};

export type ProductFaqDetail = {
  id: number;
  question: string;
  answer: string;
};

export type ProductFaq = {
  id?: number;
  title: string;
  desc: string;
  qa: ProductFaqDetail[];
};

export type ProductNavMenuDropdown = {
  title: string;
  desc: string;
  href: string;
};

export type ProductNavMenuItem = {
  [SOFTSKILL_TRAINING]: ProductNavMenuDropdown;
  [IN_VENUE_TEAM_BUILDING]: ProductNavMenuDropdown;
  [OUTING_SPECIALS]: ProductNavMenuDropdown;
  [CORPORATE_EVENT]: ProductNavMenuDropdown;
  [FAMILY_GATHERING]: ProductNavMenuDropdown;
  [RETIREMENT_PREPARATION]: ProductNavMenuDropdown;
};
