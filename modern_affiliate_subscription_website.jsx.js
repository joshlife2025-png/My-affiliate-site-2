// NEXT.JS 14 APP ROUTER – DEPLOYMENT-READY AFFILIATE SUBSCRIPTION SITE
// Framework: Next.js + React + Tailwind + Framer Motion
// Ready for Vercel deployment

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-extrabold leading-tight">
            Discover the <span className="text-emerald-400">Best Products</span><br /> Without the Guesswork
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            We research, compare, and curate top products across multiple categories.
            Members get exclusive picks, deals, and insights.
          </p>
          <div className="mt-8 flex gap-4">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-black px-8 py-6 text-lg rounded-2xl">
              Join Now – $9.99/month
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg rounded-2xl">
              View Products
            </Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="bg-gray-800/60 border-gray-700 rounded-3xl shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Why Members Love Us</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2"><Check className="text-emerald-400" /> Curated product lists</li>
                <li className="flex items-center gap-2"><Check className="text-emerald-400" /> Honest comparisons</li>
                <li className="flex items-center gap-2"><Check className="text-emerald-400" /> Monthly premium picks</li>
                <li className="flex items-center gap-2"><Check className="text-emerald-400" /> Cancel anytime</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-black/40 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-gray-800 border-gray-700 rounded-3xl">
                <CardContent className="p-6">
                  <div className="h-40 bg-gray-700 rounded-2xl mb-4" />
                  <h3 className="text-xl font-semibold">Top Rated Product</h3>
                  <p className="text-gray-400 mt-2">Hand-picked for quality, value, and performance.</p>
                  <div className="flex items-center gap-1 mt-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                  <Button className="mt-5 w-full bg-emerald-500 hover:bg-emerald-600 text-black rounded-xl">
                    View on Amazon
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Membership Access</h2>
          <p className="text-gray-300 mb-12">Premium recommendations and exclusive insights.</p>
          <Card className="bg-gray-800 border-gray-700 rounded-3xl max-w-md mx-auto">
            <CardContent className="p-10">
              <h3 className="text-3xl font-bold mb-2">Premium</h3>
              <p className="text-emerald-400 text-4xl font-extrabold mb-6">$9.99/mo</p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>✔ Unlimited product access</li>
                <li>✔ Monthly exclusive deals</li>
                <li>✔ Early access</li>
                <li>✔ Cancel anytime</li>
              </ul>
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black py-6 text-lg rounded-2xl">
                Subscribe Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="bg-gray-900 py-12">
        <div className="max-w-5xl mx-auto px-6 text-sm text-gray-400">
          <p>
            <strong>Affiliate Disclosure:</strong> This website contains affiliate links. If you purchase
            products through links on our site, we may earn a commission at no additional cost to you.
            As an Amazon Associate and participant in other affiliate programs, we earn from qualifying purchases.
          </p>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Affiliate Picks. All rights reserved.
      </footer>
    </main>
  );
}
