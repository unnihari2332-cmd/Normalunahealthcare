// PageBreadcrumb component - kept for backwards compatibility but no longer displayed
// The new HeroBanner design uses centered title without breadcrumb trail

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageBreadcrumbProps {
  items: BreadcrumbItem[];
}

export const PageBreadcrumb = ({ items: _items }: PageBreadcrumbProps) => {
  // Breadcrumb is no longer displayed in the new design
  return null;
};
