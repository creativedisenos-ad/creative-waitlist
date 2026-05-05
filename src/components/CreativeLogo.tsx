export default function CreativeLogo({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 250 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`h-10 w-auto ${className}`}
    >
      {/* Circles */}
      <circle cx="45" cy="25" r="15" fill="currentColor" />
      <circle cx="25" cy="45" r="10" fill="currentColor" />
      <circle cx="40" cy="60" r="6" fill="currentColor" />
      
      {/* Text */}
      <text 
        x="70" 
        y="40" 
        fill="currentColor" 
        fontFamily="Helvetica Neue, Arial, sans-serif" 
        fontWeight="bold" 
        fontSize="24"
        letterSpacing="-0.5"
      >
        CreativeDiseños
      </text>
      <text 
        x="72" 
        y="62" 
        fill="currentColor" 
        fontFamily="Helvetica Neue, Arial, sans-serif" 
        fontWeight="300" 
        fontSize="16"
        letterSpacing="0.5"
      >
        academy
      </text>
    </svg>
  );
}
