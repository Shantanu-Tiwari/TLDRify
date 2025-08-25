import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoginPage from "@/components/LoginPage";

const SignIn = () => {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section id="login">
        <LoginPage />
        </section>
        <Footer />
      </div>
    );
  };

export default SignIn;