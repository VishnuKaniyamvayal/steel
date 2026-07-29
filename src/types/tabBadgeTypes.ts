import type { RequestMethod } from "@/sections/sidebar/collections/components/explorer/request";

export type TabBadge =
	| {
			badgeType: "REQUEST";
			method: RequestMethod;
	  }
	| {
			badgeType: "ENV";
	  };

export const TabBadges = ["REQUEST", "ENV"] as const;

export type TabBadgeName = (typeof TabBadges)[number];
