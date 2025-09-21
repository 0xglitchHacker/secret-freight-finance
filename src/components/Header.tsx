import { Button } from "@/components/ui/button";
import { Wallet, Truck, Key } from "lucide-react";
import { WalletConnect } from "./WalletConnect";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-border bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="relative">
              <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Truck className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Secret Freight Finance
              </h1>
              <p className="text-sm text-gray-600">
                FHE-encrypted freight finance platform
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Truck className="h-4 w-4" />
              <span className="text-sm">Dashboard</span>
            </Link>
            <Link to="/learn" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Key className="h-4 w-4" />
              <span className="text-sm">Learn More</span>
            </Link>
          </nav>

          {/* Wallet Connection */}
          <WalletConnect />
        </div>
      </div>
    </header>
  );
};

export default Header;
