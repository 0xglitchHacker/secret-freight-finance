import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Truck, Key, FileText, DollarSign, Shield, Clock } from "lucide-react";
import { useSecretFreightFinance } from "../hooks/useSecretFreightFinance";
import { useAccount } from "wagmi";

const FreightDashboard = () => {
  const { address, isConnected } = useAccount();
  const { createInvoice, payInvoice } = useSecretFreightFinance();
  const [isLoading, setIsLoading] = useState(false);

  const [invoiceForm, setInvoiceForm] = useState({
    origin: "",
    destination: "",
    amount: "",
    weight: "",
    distance: "",
  });

  const handleCreateInvoice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) {
      alert("Please connect your wallet first");
      return;
    }

    setIsLoading(true);
    try {
      await createInvoice(
        invoiceForm.origin,
        invoiceForm.destination,
        parseFloat(invoiceForm.amount),
        parseFloat(invoiceForm.weight),
        parseFloat(invoiceForm.distance)
      );
      alert("Invoice created successfully!");
      setInvoiceForm({ origin: "", destination: "", amount: "", weight: "", distance: "" });
    } catch (error) {
      console.error("Failed to create invoice:", error);
      alert("Failed to create invoice");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePayInvoice = async (invoiceId: number, amount: number) => {
    if (!isConnected) {
      alert("Please connect your wallet first");
      return;
    }

    setIsLoading(true);
    try {
      await payInvoice(invoiceId, amount);
      alert("Invoice paid successfully!");
    } catch (error) {
      console.error("Failed to pay invoice:", error);
      alert("Failed to pay invoice");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Freight Finance Dashboard</h1>
          <p className="text-lg text-gray-600">
            Manage your encrypted freight transactions with FHE technology
          </p>
        </div>

        {!isConnected && (
          <Card className="mb-8 border-orange-200 bg-orange-50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-orange-600" />
                <p className="text-orange-800">
                  Please connect your wallet to access freight finance features
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        <Tabs defaultValue="invoices" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="invoices">Freight Invoices</TabsTrigger>
            <TabsTrigger value="loans">Secure Loans</TabsTrigger>
            <TabsTrigger value="claims">Insurance Claims</TabsTrigger>
          </TabsList>

          <TabsContent value="invoices" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Create Invoice Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    Create Freight Invoice
                  </CardTitle>
                  <CardDescription>
                    Create an encrypted freight invoice with FHE protection
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleCreateInvoice} className="space-y-4">
                    <div>
                      <Label htmlFor="origin">Origin</Label>
                      <Input
                        id="origin"
                        value={invoiceForm.origin}
                        onChange={(e) => setInvoiceForm({ ...invoiceForm, origin: e.target.value })}
                        placeholder="e.g., New York, NY"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="destination">Destination</Label>
                      <Input
                        id="destination"
                        value={invoiceForm.destination}
                        onChange={(e) => setInvoiceForm({ ...invoiceForm, destination: e.target.value })}
                        placeholder="e.g., Los Angeles, CA"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="amount">Amount (USD)</Label>
                      <Input
                        id="amount"
                        type="number"
                        value={invoiceForm.amount}
                        onChange={(e) => setInvoiceForm({ ...invoiceForm, amount: e.target.value })}
                        placeholder="1000"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="weight">Weight (lbs)</Label>
                      <Input
                        id="weight"
                        type="number"
                        value={invoiceForm.weight}
                        onChange={(e) => setInvoiceForm({ ...invoiceForm, weight: e.target.value })}
                        placeholder="500"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="distance">Distance (miles)</Label>
                      <Input
                        id="distance"
                        type="number"
                        value={invoiceForm.distance}
                        onChange={(e) => setInvoiceForm({ ...invoiceForm, distance: e.target.value })}
                        placeholder="2500"
                        required
                      />
                    </div>
                    <Button type="submit" disabled={!isConnected || isLoading} className="w-full">
                      {isLoading ? (
                        <>
                          <Clock className="h-4 w-4 mr-2 animate-spin" />
                          Creating...
                        </>
                      ) : (
                        <>
                          <Key className="h-4 w-4 mr-2" />
                          Create Encrypted Invoice
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Invoice List */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-green-600" />
                    Recent Invoices
                  </CardTitle>
                  <CardDescription>
                    Your encrypted freight invoices
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center text-gray-500 py-8">
                      <Truck className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>No invoices yet. Create your first encrypted invoice above.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="loans" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  Secure Loans
                </CardTitle>
                <CardDescription>
                  Apply for encrypted freight financing with FHE protection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center text-gray-500 py-8">
                  <Key className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Secure loan functionality coming soon. All data will be encrypted using FHE technology.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="claims" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-purple-600" />
                  Insurance Claims
                </CardTitle>
                <CardDescription>
                  Submit encrypted insurance claims with FHE protection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center text-gray-500 py-8">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Insurance claim functionality coming soon. All data will be encrypted using FHE technology.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FreightDashboard;
