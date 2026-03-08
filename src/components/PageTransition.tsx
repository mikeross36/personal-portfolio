interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <div className="animate-in slide-in-from-right-8 fade-in duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]">
      {children}
    </div>
  );
};

export default PageTransition;
