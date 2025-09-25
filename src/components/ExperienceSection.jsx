import AnimationLottie from "./helper/animation-lottie";
import experience from "../assets/lottie/code.json";
import { Briefcase } from "lucide-react";
import { experiences } from "./utils/data/experience";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Experience <span className="text-primary">/ Contribution</span>
        </h2>

        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="flex justify-center items-start">
              <div className="w-full h-full">
                <AnimationLottie animationPath={experience} />
              </div>
            </div>

            {/* Right: Experience Cards */}
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="gradient-border p-6 card-hover space-y-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>

                    <div className="text-left">
                      <p className="font-semibold text-lg">
                        {exp.duration}
                      </p>
                      <h4 className="font-semibold text-lg uppercase text-primary">
                        {exp.title}
                      </h4>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  {exp.description && (
                    <div className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {exp.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
