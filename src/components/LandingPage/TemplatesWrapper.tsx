"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { COMPONENTS_LIST_WITH_CATEGORY } from "@/constants/ComponentsCategory";
import { AvailableComponent } from "@/types/editor";

export function InfiniteMovingCardsDemo() {
  const [sidebarComponentsList, setSidebarComponentsList] = useState<
    AvailableComponent[]
  >(COMPONENTS_LIST_WITH_CATEGORY);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const response = await fetch("/api/component-list");
      const data = await response.json();
      if (data.success) {
        console.log("Fetched components list:", data.result);
        setSidebarComponentsList(data.result);
      } else {
        console.error("Failed to fetch components list");
      }
    } catch (error) {
      console.error("Error fetching components list:", error);
    }
  };

  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={sidebarComponentsList[0]?.samples ?? []}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards
        items={sidebarComponentsList[1]?.samples ?? []}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
