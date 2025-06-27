import { PackageCard, PackageCardProps } from "./PackageCard";

const packages: PackageCardProps[] = [
  {
    name: "Starter",
    price: "2,500",
    tagline: "Entry Package",
    color: "text-red-500",
    features: [
      { label: "Website Development" },
      {
        label: "UI/UX Design Services",
        expandable: true,
        description: [
          "Website & App Interface Design",
          "Mobile-friendly Layouts",
          "Wireframes and Mockups",
          "User Experience Optimization for Conversions",
        ],
      },
      { label: "Hosting & Maintenance" },
      { label: "Online Marketing Integration" },
      { label: "Strategy Session" },
    ],
  },
  {
    name: "Growth",
    price: "5,000",
    tagline: "Includes Starter +",
    color: "text-orange-500",
    features: [
      { label: "Website Development" },
      {
        label: "UI/UX Design Services",
        expandable: true,
        description: [
          "Website & App Interface Design",
          "Mobile-friendly Layouts",
          "Wireframes and Mockups",
          "User Experience Optimization for Conversions",
        ],
      },
      { label: "Hosting & Maintenance" },
      { label: "Online Marketing Integration" },
      { label: "Content Management System (CMS)" },
      { label: "Strategy Session" },
    ],
  },
  {
    name: "Pro",
    price: "10,000",
    recommended: true,
    tagline: "Includes Growth +",
    color: "text-blue-500",
    features: [
      { label: "Website Development" },
      {
        label: "UI/UX Design Services",
        expandable: true,
        description: [
          "Website & App Interface Design",
          "Mobile-friendly Layouts",
          "Wireframes and Mockups",
          "User Experience Optimization for Conversions",
        ],
      },
      { label: "Hosting & Maintenance" },
      { label: "Online Marketing Integration" },
      { label: "Content Management System (CMS)" },
      { label: "Specialized CMS/Ecommerce" },
      { label: "Security & Compliance" },
      { label: "Strategy Session" },
    ],
  },
  {
    name: "Scale-Up",
    price: "25,000",
    tagline: "Includes Pro +",
    color: "text-indigo-500",
    features: [
      { label: "Website Development" },
      {
        label: "UI/UX Design Services",
        expandable: true,
        description: [
          "Website & App Interface Design",
          "Mobile-friendly Layouts",
          "Wireframes and Mockups",
          "User Experience Optimization for Conversions",
        ],
      },
      { label: "Hosting & Maintenance" },
      { label: "Online Marketing Integration" },
      { label: "Content Management System (CMS)" },
      { label: "Specialized CMS/Ecommerce" },
      { label: "Security & Compliance" },
      { label: "API Integration & Backend Systems" },
      { label: "Software & System Solutions" },
      { label: "Strategy Session" },
    ],
  },
  {
    name: "Enterprise",

    price: "50,000",
    tagline: "Includes Scale-Up +",
    color: "text-purple-600",
    features: [
      { label: "Website Development" },
      {
        label: "UI/UX Design Services",
        expandable: true,
        description: [
          "Website & App Interface Design",
          "Mobile-friendly Layouts",
          "Wireframes and Mockups",
          "User Experience Optimization for Conversions",
        ],
      },
      { label: "Hosting & Maintenance" },
      { label: "Online Marketing Integration" },
      { label: "Content Management System (CMS)" },
      { label: "Specialized CMS/Ecommerce" },
      { label: "Security & Compliance" },
      { label: "API Integration & Backend Systems" },
      { label: "Software & System Solutions" },

      { label: "Mobile App Development" },
      { label: "AI & Automation" },

      { label: "Strategy Session" },
    ],
  },
];

export default function PackageList() {
  return (
    <div className="w-full grid gap-6 md:grid-cols-3 xl:grid-cols-5">
      {packages.map((pkg, index) => (
        <PackageCard key={index} {...pkg} />
      ))}
    </div>
  );
}
