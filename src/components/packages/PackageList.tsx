import { PackageCard, PackageCardProps } from "./PackageCard";

const packages: PackageCardProps[] = [
  {
    name: "Starter",
    price: "2,500",
    tagline: "Entry Package",
    color: "text-red-500",
    features: [
      { icon: "🌐", label: "Website Development" },
      {
        icon: "🎨",
        label: "Brand Identity",
        expandable: true,
        description: "Logo, colors & typography",
      },
      { icon: "📧", label: "Domain & Email Setup" },
      { icon: "🔍", label: "SEO Setup" },
      { icon: "📱", label: "Social Kit" },
      { icon: "🛠", label: "Google Tools" },
      { icon: "🧠", label: "Strategy Session" },
      { icon: "🎁", label: "Bonus (Melbourne)" },
    ],
  },
  {
    name: "Growth",
    price: "5,000",
    tagline: "Includes Starter +",
    color: "text-orange-500",
    features: [
      { icon: "🌐", label: "Website Development" },
      { icon: "🎨", label: "Brand Identity" },
      { icon: "📧", label: "Domain & Email Setup" },
      { icon: "🔍", label: "SEO Setup" },
      { icon: "📱", label: "Social Kit" },
      { icon: "🛠", label: "Google Tools" },
      { icon: "✍️", label: "Copywriting" },
      { icon: "📬", label: "Email Automation" },
      { icon: "🧠", label: "Strategy Session" },
      { icon: "🎁", label: "Bonus (Melbourne)" },
    ],
  },
  {
    name: "Pro",
    price: "10,000",
    recommended: true,
    tagline: "Includes Growth +",
    color: "text-blue-500",
    features: [
      { icon: "🌐", label: "Website Development" },
      { icon: "📱", label: "Mobile App Development" },
      { icon: "🎨", label: "Brand Identity" },
      { icon: "📧", label: "Domain & Email Setup" },
      { icon: "🔍", label: "SEO Setup" },
      { icon: "📱", label: "Social Kit" },
      { icon: "🛠", label: "Google Tools" },
      { icon: "✍️", label: "Copywriting" },
      { icon: "📬", label: "Email Automation" },
      { icon: "🧠", label: "Strategy Session" },
      { icon: "🎁", label: "Bonus (Melbourne)" },
    ],
  },
  {
    name: "Scale-Up",
    price: "25,000",
    tagline: "Includes Pro +",
    color: "text-indigo-500",
    features: [
      { icon: "🌐", label: "Website Development" },
      { icon: "📱", label: "Mobile App Development" },
      { icon: "🛒", label: "E-Commerce Platform" },
      { icon: "🎨", label: "Brand Identity" },
      { icon: "📧", label: "Domain & Email Setup" },
      { icon: "🔍", label: "SEO Setup" },
      { icon: "📱", label: "Social Kit" },
      { icon: "🛠", label: "Google Tools" },
      { icon: "✍️", label: "Copywriting" },
      { icon: "📬", label: "Email Automation" },
      { icon: "🧠", label: "Strategy Session" },
      { icon: "🎁", label: "Bonus (Melbourne)" },
    ],
  },
  {
    name: "Enterprise",

    price: "50,000",
    tagline: "Includes Scale-Up +",
    color: "text-purple-600",
    features: [
      { icon: "🖥", label: "Website & SaaS Infrastructure" },
      { icon: "📱", label: "Mobile App Development" },
      { icon: "🛒", label: "E-Commerce Platform" },
      { icon: "🎨", label: "Brand Identity" },
      { icon: "📧", label: "Domain & Email Setup" },
      { icon: "🔍", label: "SEO Setup" },
      { icon: "📱", label: "Social Kit" },
      { icon: "📊", label: "Google Tools & BI" },
      { icon: "🔌", label: "API Integrations" },
      { icon: "🎓", label: "LMS / Portal" },
      { icon: "✍️", label: "Copywriting" },
      { icon: "📬", label: "Email Automation" },
      { icon: "🧠", label: "Strategy Session" },
      { icon: "🎁", label: "Bonus (Melbourne)" },
    ],
  },
];

export default function PackageList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {packages.map((pkg, index) => (
        <PackageCard key={index} {...pkg} />
      ))}
    </div>
  );
}
