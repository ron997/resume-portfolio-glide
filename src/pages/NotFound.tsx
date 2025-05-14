
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 max-w-md bg-white rounded-lg shadow-md">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">
          Oops! The page you're looking for doesn't exist
        </p>
        <p className="text-gray-600 mb-8">
          The requested path <code className="bg-gray-100 px-2 py-1 rounded">{location.pathname}</code> could not be found.
        </p>
        <Button 
          onClick={() => window.location.href = '/'}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Return to Homepage
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
