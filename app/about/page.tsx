import { Award, Users, TrendingUp, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We never compromise on quality. Every project is executed with precision and attention to detail.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We work closely with you throughout the entire project.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      description: "We stay updated with the latest techniques and materials to deliver cutting-edge solutions.",
    },
    {
      icon: Heart,
      title: "Integrity & Trust",
      description: "Built on honesty and transparency, we&apos;ve earned the trust of countless Connecticut homeowners.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Image src="/logo.png" alt="Pro Innovations" width={80} height={80} className="mx-auto mb-6" />
              <h1 className="text-primary mb-4">About Pro Innovations</h1>
              <p className="text-muted-foreground text-xl leading-relaxed">
                Building Excellence, Delivering Quality - For over a decade, we&apos;ve been transforming homes 
                and businesses across Connecticut with professional construction and renovation services.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-primary mb-6 text-center">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Pro Innovations was founded with a simple mission: to provide Connecticut homeowners and 
                  businesses with construction and renovation services that exceed expectations. What started 
                  as a small local contractor has grown into a trusted name across the state.
                </p>
                <p>
                  Our team of skilled craftsmen brings decades of combined experience to every project. 
                  Whether it&apos;s new construction, a kitchen remodel, custom carpentry, or a fresh coat of paint, 
                  we approach each job with the same dedication to quality and customer satisfaction.
                </p>
                <p>
                  We believe that your home or business deserves the best. That&apos;s why we use only premium materials, 
                  employ skilled professionals, and stand behind our work with comprehensive warranties. 
                  When you choose Pro Innovations, you&apos;re choosing quality that lasts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-primary mb-4">Our Values</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="border-0 shadow-md hover-lift">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-primary mb-8 text-center">Why Choose Pro Innovations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Licensed & Insured</h3>
                  <p className="text-muted-foreground">
                    Fully licensed, bonded, and insured for your complete protection and peace of mind.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Experienced Team</h3>
                  <p className="text-muted-foreground">
                    Skilled craftsmen with years of experience in all aspects of construction and renovation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Quality Materials</h3>
                  <p className="text-muted-foreground">
                    We use only premium materials from trusted suppliers to ensure lasting results.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
                  <p className="text-muted-foreground">
                    Deep knowledge of Connecticut building codes and local requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export default About;
