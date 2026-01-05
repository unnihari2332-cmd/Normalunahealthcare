import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageBreadcrumbProps {
  items: BreadcrumbItem[];
}

export const PageBreadcrumb = ({ items }: PageBreadcrumbProps) => {
  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      aria-label="Breadcrumb"
      className="mb-2"
    >
      <ol className="flex items-center flex-wrap gap-1 text-sm">
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center gap-1 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-2 text-primary-foreground/50" />
            {item.path ? (
              <Link
                to={item.path}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gold font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </motion.nav>
  );
};
