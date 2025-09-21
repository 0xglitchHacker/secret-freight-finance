import Header from "../components/Header";
import { Truck, Key, Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Secret Freight Finance
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Revolutionizing freight finance with Fully Homomorphic Encryption (FHE) technology. 
            Secure, private, and transparent financial transactions for the freight industry.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Truck className="h-5 w-5 mr-2" />
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              <Key className="h-5 w-5 mr-2" />
              Learn More
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Core Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Truck className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>FHE-Encrypted Transactions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  All financial data remains encrypted during computation, ensuring complete privacy 
                  while enabling secure freight finance operations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Key className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Smart Contract Automation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Automated freight financing with encrypted data processing, reducing manual 
                  intervention and improving efficiency.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Privacy-First Architecture</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Complete data confidentiality without compromising functionality, built on 
                  decentralized architecture for transparency.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="p-3 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Freight Invoices</h3>
              <p className="text-gray-600 text-sm">
                Encrypted invoice management for secure freight transactions
              </p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="p-3 bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Key className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Loans</h3>
              <p className="text-gray-600 text-sm">
                FHE-encrypted lending and borrowing mechanisms
              </p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="p-3 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Insurance Claims</h3>
              <p className="text-gray-600 text-sm">
                Private claim processing with FHE encryption
              </p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="p-3 bg-orange-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Lock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Credit Scoring</h3>
              <p className="text-gray-600 text-sm">
                Encrypted risk assessment and reputation tracking
              </p>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Freight Finance?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the future of secure, private freight financing with FHE technology.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            <Truck className="h-5 w-5 mr-2" />
            Start Your Journey
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Truck className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold">Secret Freight Finance</span>
          </div>
          <p className="text-gray-400">
            Built with FHE technology for secure, private freight financing
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
