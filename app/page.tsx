import { LinkButton } from "@/components/link-button";
import { Separator } from "@/components/ui/separator";
import { authorList, institutionList } from "@/config/author";

export default function IndexPage() {
  return (
    <>
      <div className="container px-12 mt-24 prose max-w-none w-fit">
        {/* Title */}
        <div className="max-w-[986px]">
          <h1 id="title">
            <div className="text-6xl font-bold leading-relaxed">
              <span>M</span>
              <span className="text-neutral-400 tracking-tighter">usculo</span>
              <span>S</span>
              <span className="text-neutral-400 tracking-tighter">keletal</span>
              <span>-</span>
              <span className="tracking-tight">MANO</span>
            </div>
            <div className="text-4xl text-neutral-700 font-medium tracking-[-0.02em]">
              Enabling Hand Pose Tracking with Biomechanical Constraints
            </div>
            {/* <Separator /> */}
          </h1>
          <div className="flex text-xl text-black space-x-4">
            {authorList.map((author, index) => (
              <div key={index}>
                <div className="font-semibold leading-loose tracking-tight">
                  {author.name}
                  <sup>{author.sup}</sup>
                </div>
              </div>
            ))}
          </div>
          <div className="flex space-x-4">
            {institutionList.map((institution, index) => (
              <div key={index} className="text-lg">
                <sup>{institution.id}</sup>
                {institution.name}
              </div>
            ))}
          </div>
        </div>

        <div className="py-12 max-w-[986px]">
          <Separator className="my-0.5 h-[1.5px]" />
          <div className="flex justify-start space-x-6">
            <LinkButton label="Read Paper" href="/paper" />
            <LinkButton label="View Code" href="/code" />
            <LinkButton label="Watch Video" href="/video" />
            <LinkButton label="Supplementary Materials" href="/supp" />
          </div>
          <Separator className="my-0.5 h-[1.5px]" />
        </div>

        {/* abstract */}
        <div className="max-w-[1030px] flex">
          <h2 className="mt-0 mr-32">Abstract</h2>
          <div className="text-xl leading-snug text-black text-justify font-serif mr-12">
            This work proposes a novel learning framework for visual hand
            dynamics analysis that takes into account the physiological aspects
            of hand motion. The existing models, which are simplified
            joint-actuated systems, often produce unnatural motions. To address
            this, we integrate a musculoskeletal system with a learnable
            parametric hand model, MANO, to create a new model, MS-MANO. This
            model emulates the dynamics of muscles and tendons to drive the
            skeletal system, imposing physiologically realistic constraints on
            the resulting torque trajectories. We further propose a
            simulation-in-the-loop pose refinement framework, BioPR, that
            refines the initial estimated pose through a multi-layer perceptron
            (MLP) network. Our evaluation of the accuracy of MS-MANO and the
            efficacy of the BioPR is conducted in two separate parts. The
            accuracy of MS-MANO is compared with MyoSuite, while the efficacy of
            BioPR is benchmarked against two large-scale public datasets and two
            recent state-of-the-art methods. The results demonstrate that our
            approach consistently improves the baseline methods both
            quantitatively and qualitatively.
          </div>
        </div>
      </div>
    </>
  );
}
