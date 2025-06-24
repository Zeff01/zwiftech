import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export interface FeatureItem {
  icon?: string;
  label: string;
  description?: string[];
  expandable?: boolean;
}

export interface PackageCardProps {
  name: string;
  color: string; // e.g. "text-red-500"
  price: string;
  tagline: string;
  features: FeatureItem[];
  recommended?: boolean;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  name,
  color,
  price,
  tagline,
  features,
  recommended,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const borderClass = color.replace("text-", "border-");

  const getGradientClass = () => {
    if (color.includes("orange")) return "from-orange-400 to-orange-500";
    if (color.includes("red")) return "from-red-400 to-red-500";
    if (color.includes("purple")) return "from-purple-400 to-purple-500";
    if (color.includes("indigo")) return "from-indigo-400 to-indigo-500";
    if (color.includes("blue")) return "from-blue-400 to-blue-500";
    return "from-gray-400 to-gray-500";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`rounded-2xl border-2 ${borderClass} relative flex flex-col justify-between w-full max-w-[300px] h-full mx-auto px-2`}>
      {recommended && (
        <div
          className={`${borderClass} bg-blue-500 text-white text-sm font-semibold text-center absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full shadow-md z-10`}>
          Recommended
        </div>
      )}
      <Card className="border-none shadow-none flex flex-col h-full">
        <CardHeader className="text-left space-y-1 px-5 pt-6 pb-2">
          <CardTitle className={`text-2xl font-bold ${color}`}>{name}</CardTitle>
          <p className="text-sm text-muted-foreground">{tagline}</p>
          <p className="text-2xl font-bold text-black">₱{price}</p>
        </CardHeader>

        <CardContent className="space-y-1 text-sm flex-1 px-5 pb-4 min-h-[200px]">
          {features.map((feature, index) => (
            <div key={index} className="border-t py-2">
              <div
                className="flex items-center justify-between text-gray-700 cursor-pointer"
                onClick={() => feature.expandable && toggleIndex(index)}>
                <span>{feature.label}</span>
                {feature.expandable && (
                  <span className="text-lg text-gray-400">{openIndex === index ? "–" : "+"}</span>
                )}
              </div>
              <AnimatePresence>
                {feature.expandable && openIndex === index && feature.description && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-500 mt-2 pl-5 list-disc space-y-1 break-words overflow-hidden">
                    {feature.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </CardContent>

        <CardFooter className="mt-auto px-5 pb-6 pt-3">
          <Button
            className={`w-full text-white font-semibold flex justify-center items-center gap-2 py-3 rounded-full bg-gradient-to-r ${getGradientClass()}`}>
            Get Started →
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
