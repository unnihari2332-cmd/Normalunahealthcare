import { motion } from "framer-motion";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface HeroBannerProps {
  title: string;
  image: string;
  breadcrumbs?: BreadcrumbItem[];
}

export const HeroBanner = ({ title, image, breadcrumbs }: HeroBannerProps) => {
  return (
    <div className="relative h-[280px] md:h-[350px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <PageBreadcrumb items={breadcrumbs} />
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-2"
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
};
