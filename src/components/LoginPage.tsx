import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Lock } from "lucide-react";

const LoginPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="items-center">
          <div className="lg:col-span-3 lg:justify-self-end w-full text-center">
            <div className="bg-surface-soft border border-border/50 rounded-2xl p-8 w-full max-w-md mx-auto">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                  Sign In to TLDRify
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Welcome back, enter your email and password to continue.
                </p>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full h-14 pl-12 pr-4 bg-background border border-border rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all duration-150"
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full h-14 pl-12 pr-4 bg-background border border-border rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all duration-150"
                  />
                </div>

                {/* Submit */}
                <Button className="w-full" size="lg">
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                {/* Divider */}
                <div className="pt-4 border-t border-border/30">
                  <p className="text-xs text-muted-foreground mb-3">Don't Known Your Password ?</p>
                  <div className="flex gap-2 justify-center">
                    <p className="text-primary cursor-pointer hover:underline">Forgot Password</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
