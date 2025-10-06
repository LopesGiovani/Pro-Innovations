import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-home.jpg"
          alt="Professional construction services"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-background mb-6 leading-tight">
            Building Excellence, Delivering Quality
          </h1>
          <p className="text-background/90 text-lg md:text-xl mb-8 leading-relaxed">
            Professional construction, painting, carpentry, and remodeling services in Connecticut. 
            Transform your vision into reality with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="secondary" className="group">
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background/10 border-background text-background hover:bg-background hover:text-primary backdrop-blur-sm">
              <Link href="/services">
                View Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
