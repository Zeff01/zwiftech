import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export interface FeatureItem {
  icon: string;
  label: string;
  expandable?: boolean;
  description?: string;
}

export interface PackageCardProps {
  name: string;
  icon: string;
  value: string;
  price: string;
  tagline: string;
  color?: string;
  features: FeatureItem[];
}

export const PackageCard: React.FC<PackageCardProps> = ({
  name,
  icon,
  value,
  price,
  tagline,
  color = "text-red-500",
  features,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="rounded-2xl h-full">
      <Card className="flex border-0 bg-custom-white shadow-sm flex-col h-full">
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-lg flex items-center justify-center gap-1">
            <span>{icon}</span> {name}
          </CardTitle>
          <p className="text-sm text-muted-foreground">{`Value: ${value}`}</p>
          <p className={`text-xl font-bold ${color}`}>{price}</p>
          <p className="text-sm font-semibold">{tagline}</p>
        </CardHeader>

        <CardContent className="flex-1 space-y-2">
          {features.map((feature, index) => (
            <Collapsible key={index}>
              <div className="flex justify-between items-center border-b py-1">
                <div className="flex items-center gap-2">
                  <span>{feature.icon}</span>
                  <span>{feature.label}</span>
                </div>
                {feature.expandable && (
                  <CollapsibleTrigger className="text-sm text-gray-500 hover:text-black">
                    +
                  </CollapsibleTrigger>
                )}
              </div>
              {feature.expandable && feature.description && (
                <CollapsibleContent className="pl-6 text-sm text-muted-foreground">
                  {feature.description}
                </CollapsibleContent>
              )}
            </Collapsible>
          ))}
        </CardContent>

        <CardFooter>
          <Button className="w-full bg-gradient-to-r from-indigo-400 to-indigo-500 text-white hover:brightness-110">
            Get Started!
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
