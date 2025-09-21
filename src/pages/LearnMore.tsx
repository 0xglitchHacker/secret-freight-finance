import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Key, Shield, Lock, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Learn About FHE Technology
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover how Fully Homomorphic Encryption revolutionizes freight finance 
            with complete privacy and security.
          </p>
        </div>

        {/* What is FHE Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What is Fully Homomorphic Encryption?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Key className="h-6 w-6 text-blue-600" />
                  Complete Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  FHE allows computations on encrypted data without ever decrypting it. 
                  Your sensitive financial information remains completely private while 
                  still enabling secure transactions and verifications.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-green-600" />
                  Secure Processing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  All freight finance operations are performed on encrypted data. 
                  Even the smart contracts never see your actual financial information, 
                  ensuring maximum security and compliance.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefits for Freight Finance
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="p-3 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Encrypted Invoices</h3>
              <p className="text-gray-600 text-sm">
                Freight invoices are encrypted end-to-end, protecting sensitive pricing 
                and trade information from competitors and unauthorized access.
              </p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="p-3 bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Key className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Loans</h3>
              <p className="text-gray-600 text-sm">
                Loan applications and credit assessments are processed on encrypted data, 
                ensuring borrower privacy while maintaining lender security.
              </p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="p-3 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Lock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Private Claims</h3>
              <p className="text-gray-600 text-sm">
                Insurance claims are processed with complete confidentiality, 
                protecting sensitive incident details while ensuring fair settlements.
              </p>
            </Card>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How FHE Works in Freight Finance
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="p-3 bg-blue-100 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Data Encryption</h3>
              <p className="text-gray-600 text-sm">
                Your financial data is encrypted using FHE before being sent to the blockchain.
              </p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="p-3 bg-green-100 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Encrypted Processing</h3>
              <p className="text-gray-600 text-sm">
                Smart contracts perform calculations on encrypted data without ever decrypting it.
              </p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="p-3 bg-purple-100 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Verification</h3>
              <p className="text-gray-600 text-sm">
                Results are verified and validated while maintaining complete privacy.
              </p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="p-3 bg-orange-100 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Private Results</h3>
              <p className="text-gray-600 text-sm">
                Only authorized parties can decrypt and view the final results.
              </p>
            </Card>
          </div>
        </section>

        {/* Security Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Security Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold">End-to-End Encryption</h3>
                  <p className="text-gray-600 text-sm">
                    All data is encrypted from the moment it's created until it's processed.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Zero-Knowledge Proofs</h3>
                  <p className="text-gray-600 text-sm">
                    Verify transactions without revealing sensitive information.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Decentralized Architecture</h3>
                  <p className="text-gray-600 text-sm">
                    No single point of failure or data breach vulnerability.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Regulatory Compliance</h3>
                  <p className="text-gray-600 text-sm">
                    Built to meet financial privacy regulations and standards.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Audit Trail</h3>
                  <p className="text-gray-600 text-sm">
                    Complete transaction history while maintaining privacy.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Quantum Resistance</h3>
                  <p className="text-gray-600 text-sm">
                    Future-proof encryption against quantum computing threats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Secure Freight Finance?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start using FHE-encrypted freight finance today.
          </p>
          <Link to="/dashboard">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Truck className="h-5 w-5 mr-2" />
              Get Started Now
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default LearnMore;
