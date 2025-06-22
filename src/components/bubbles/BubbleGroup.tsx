"use client";

import Bubble from "./Bubble";
import { bubblePresets, BubblePresetKey } from "./bubblePresets";

interface BubbleGroupProps {
  preset?: BubblePresetKey;
}

export default function BubbleGroup({ preset = "team" }: BubbleGroupProps) {
  const config = bubblePresets[preset];

  return (
    <div className="absolute inset-0 z-0">
      {config.map((bubble, index) => (
        <Bubble key={index} className={bubble.className} speed={bubble.speed} />
      ))}
    </div>
  );
}
