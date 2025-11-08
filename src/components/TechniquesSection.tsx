import { Syringe, User, Award, Heart } from "lucide-react";

export const TechniquesSection = () => {
  const techniques = [
    {
      icon: Syringe,
      title: "Preservation Rhinoplasty",
    },
    {
      icon: User,
      title: "Ethnic Structure Specialist",
    },
    {
      icon: Award,
      title: "Revision Rhinoplasty",
    },
    {
      icon: Heart,
      title: "Non-Surgical Options",
    },
  ];

  return (
    <section className="py-16 lg:py-20 px-4 bg-primary/10" id="techniques">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-primary">
          Our Rhinoplasty Techniques
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {techniques.map((technique, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-primary flex items-center justify-center mb-4 shadow-xl hover:scale-105 transition-transform">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-accent flex items-center justify-center">
                  <technique.icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
                </div>
              </div>
              <h3 className="text-primary font-semibold text-sm lg:text-base px-2">
                {technique.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

