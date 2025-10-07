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
        {/* Gradiente mais suave */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl opacity-0 translate-y-8 animate-[fadeInUp_1.2s_ease-out_0.3s_forwards]">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Building Excellence, Delivering Quality
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
            Professional construction, painting, carpentry, and remodeling services in Connecticut. 
            Transform your vision into reality with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105">
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
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
