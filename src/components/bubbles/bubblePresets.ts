export interface BubbleConfig {
  className: string;
  speed?: "slow" | "medium" | "fast";
}

export type BubblePresetKey = "team" | "presentation";

export const bubblePresets: Record<BubblePresetKey, BubbleConfig[]> = {
  team: [
    // Bottom left large soft bubble
    {
      className:
        "absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#8e77ff] to-transparent opacity-50 bottom-[-260px] left-[100px]",
      speed: "slow",
    },

    // Blurred background circles
    {
      className:
        "absolute w-[200px] h-[200px] rounded-full bg-[#ff88d1] opacity-20 bottom-[-50px] left-[-50px] blur-2xl",
      speed: "fast",
    },
    {
      className:
        "absolute w-[200px] h-[200px] rounded-full bg-[#ff88d1] opacity-20 top-[-70px] right-[-50px] blur-2xl",
      speed: "fast",
    },

    // Top left subtle bubble
    {
      className:
        "absolute w-[500px] h-[500px] rounded-full bg-gradient-to-b from-[#4ca1e9] via-[#6150eb] to-transparent opacity-50 top-40 left-[-100px]",
      speed: "medium",
    },

    // Right side overlapping bubbles
    {
      className:
        "absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#4ca1e9] via-[#6150eb] to-transparent opacity-40 top-[-100px] right-[-200px]",
      speed: "slow",
    },
    {
      className:
        "absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#4ca1e9] to-transparent opacity-20 top-[0px] right-[-150px]",
      speed: "medium",
    },
    {
      className:
        "absolute w-[800px] h-[800px] rounded-full bg-gradient-to-t from-[#c840b6] via-[#6150eb] to-transparent opacity-60 bottom-[-80px] right-[-200px]",
      speed: "medium",
    },

    // Accent rings
    {
      className:
        "absolute w-[130px] h-[130px] border-[3px] border-white rounded-full opacity-20 bottom-[180px] left-[-80px] shadow-[0_0_25px_5px_rgba(255,255,255,0.3)]",
      speed: "slow",
    },
    {
      className:
        "absolute w-[300px] h-[300px] border-[3px] border-white rounded-full opacity-20 bottom-[200px] right-[-180px] shadow-[0_0_25px_5px_rgba(255,255,255,0.3)]",
      speed: "medium",
    },

    // Small glowing dots
    {
      className:
        "absolute w-[10px] h-[10px] bg-blue-500 rounded-full opacity-30 top-[80px] left-[10%]",
      speed: "fast",
    },
    {
      className: "absolute w-[6px] h-[6px] bg-white rounded-full opacity-20 top-[300px] left-[45%]",
      speed: "medium",
    },
    {
      className:
        "absolute w-[12px] h-[12px] bg-[#4ca1e9] rounded-full opacity-20 top-[350px] left-[35%]",
      speed: "medium",
    },
    {
      className:
        "absolute w-[8px] h-[8px] bg-white rounded-full opacity-25 bottom-[100px] left-[30%]",
      speed: "fast",
    },
    {
      className:
        "absolute w-[10px] h-[10px] bg-purple-400 rounded-full opacity-30 bottom-[280px] right-[10%]",
      speed: "slow",
    },

    // Medium glowing dot
    {
      className:
        "absolute w-[40px] h-[40px] bg-white rounded-full opacity-10 bottom-[30px] right-[100px]",
      speed: "medium",
    },
    {
      className:
        "absolute w-[10px] h-[10px] bg-white rounded-full opacity-30 bottom-[280px] right-[10%]",
      speed: "fast",
    },
  ],

  presentation: [
    // Bottom left large soft bubble
    {
      className:
        "absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#8e77ff] to-transparent opacity-50 bottom-[-260px] left-[100px]",
      speed: "slow",
    },

    // Blurred background circles
    {
      className:
        "absolute w-[200px] h-[200px] rounded-full bg-[#ff88d1] opacity-20 bottom-[-50px] left-[-50px] blur-2xl",
      speed: "fast",
    },
    {
      className:
        "absolute w-[200px] h-[200px] rounded-full bg-[#ff88d1] opacity-20 top-[-70px] right-[-50px] blur-2xl",
      speed: "fast",
    },

    // Top left subtle bubble
    {
      className:
        "absolute w-[500px] h-[500px] rounded-full bg-gradient-to-b from-[#dc52ff] via-[#6150eb] to-transparent opacity-50 top-40 left-[-100px]",
      speed: "medium",
    },

    // Right side overlapping bubbles
    {
      className:
        "absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#dc52ff] via-[#6150eb] to-transparent opacity-40 top-[-100px] right-[-200px]",
      speed: "slow",
    },
    {
      className:
        "absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#dc52ff] to-transparent opacity-20 top-[0px] right-[-150px]",
      speed: "medium",
    },
    {
      className:
        "absolute w-[800px] h-[800px] rounded-full bg-gradient-to-t from-[#c840b6] via-[#6150eb] to-transparent opacity-60 bottom-[-80px] right-[-200px]",
      speed: "medium",
    },

    // Accent rings
    {
      className:
        "absolute w-[130px] h-[130px] border-[3px] border-white rounded-full opacity-20 bottom-[180px] left-[-80px] shadow-[0_0_25px_5px_rgba(255,255,255,0.3)]",
      speed: "slow",
    },
    {
      className:
        "absolute w-[300px] h-[300px] border-[3px] border-white rounded-full opacity-20 bottom-[200px] right-[-180px] shadow-[0_0_25px_5px_rgba(255,255,255,0.3)]",
      speed: "medium",
    },

    // Small glowing dots
    {
      className:
        "absolute w-[10px] h-[10px] bg-blue-500 rounded-full opacity-30 top-[80px] left-[10%]",
      speed: "fast",
    },
    {
      className: "absolute w-[6px] h-[6px] bg-white rounded-full opacity-20 top-[300px] left-[45%]",
      speed: "medium",
    },
    {
      className:
        "absolute w-[12px] h-[12px] bg-[#4ca1e9] rounded-full opacity-20 top-[350px] left-[35%]",
      speed: "medium",
    },
    {
      className:
        "absolute w-[8px] h-[8px] bg-white rounded-full opacity-25 bottom-[100px] left-[30%]",
      speed: "fast",
    },
    {
      className:
        "absolute w-[10px] h-[10px] bg-purple-400 rounded-full opacity-30 bottom-[280px] right-[10%]",
      speed: "slow",
    },

    // Medium glowing dot
    {
      className:
        "absolute w-[40px] h-[40px] bg-white rounded-full opacity-10 bottom-[30px] right-[100px]",
      speed: "medium",
    },
    {
      className:
        "absolute w-[10px] h-[10px] bg-white rounded-full opacity-30 bottom-[280px] right-[10%]",
      speed: "fast",
    },
  ],
};
