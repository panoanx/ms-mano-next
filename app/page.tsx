import { LinkButton } from "@/components/link-button";
import { Separator } from "@/components/ui/separator";
import { authorList, institutionList } from "@/config/author";
import { bannerImages } from "@/config/image";
import Image from "next/image";

export default function IndexPage() {
  return (
    <>
      <div className="container px-12 mb-24 xl:mt-24 2xl:mt-36 prose max-w-none w-fit">
        <div className="max-w-[986px]">
          {/* Title */}
          <div>
            <h1 id="title">
              <div className="text-6xl font-bold leading-relaxed">
                <span>M</span>
                <span className="bg-gradient-to-r from-gray-600 to-gray-300 bg-clip-text text-transparent tracking-tighter">
                  usculo
                </span>
                <span>S</span>
                <span className="bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent tracking-tighter">
                  keletal
                </span>
                <span>-</span>
                <span className="tracking-tight">MANO</span>
              </div>
              <div className="text-4xl text-gray-800 font-medium tracking-[-0.02em]">
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

            <div className="pt-12 flex items-end space-x-6"></div>
          </div>

          {/* Links */}
          <div className="flex items-end mb-12">
            {/* <div className="w-1/4">
              <Image
                src="/cvpr.svg"
                alt="CVPR 2024"
                width={0}
                height={0}
                className="inline-block mt-0 mb-1 w-5/6"
              />
            </div> */}
            <div className="flex-1 mr-6">
              <Separator className="my-0.5 h-[1px]" />
              <div className="flex justify-start space-x-6">
                <LinkButton label="Read Paper" href="/paper" />
                <LinkButton label="View Code" href="/code" />
                <LinkButton label="Watch Video" href="/video" />
                <LinkButton label="Supplementary Materials" href="/supp" />
              </div>
              <Separator className="my-0.5 h-[1px]" />
            </div>
          </div>

          {/* Images */}
          <div className="w-auto flex space-x-12 my-32 mr-6">
            {bannerImages.map((image, index) => (
              <div className="flex-1 drop-shadow-2xl" key={index}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={0}
                  height={0}
                  className="w-auto not-prose"
                  unoptimized
                />
                <div className="not-prose text-gray-500 w-fit mx-auto mt-6 text-md font-bold">
                  {image.caption}
                </div>
              </div>
            ))}
          </div>
          {/* abstract */}
          <div className="flex mb-16">
            <h2 className="mt-0 w-1/4 flex-shrink-0 text-2xl">Abstract</h2>
            <div className="text-xl leading-normal text-black text-justify font-serif mr-6">
              This work proposes a novel learning framework for visual hand
              dynamics analysis that takes into account the physiological
              aspects of hand motion. The existing models, which are simplified
              joint-actuated systems, often produce unnatural motions. To
              address this, we integrate a musculoskeletal system with a
              learnable parametric hand model, MANO, to create a new model,
              MS-MANO. This model emulates the dynamics of muscles and tendons
              to drive the skeletal system, imposing physiologically realistic
              constraints on the resulting torque trajectories. We further
              propose a simulation-in-the-loop pose refinement framework, BioPR,
              that refines the initial estimated pose through a multi-layer
              perceptron (MLP) network. Our evaluation of the accuracy of
              MS-MANO and the efficacy of the BioPR is conducted in two separate
              parts. The accuracy of MS-MANO is compared with MyoSuite, while
              the efficacy of BioPR is benchmarked against two large-scale
              public datasets and two recent state-of-the-art methods. The
              results demonstrate that our approach consistently improves the
              baseline methods both quantitatively and qualitatively.
            </div>
          </div>

          <div className="flex">
            <h2 className="mt-0 w-1/4 flex-shrink-0">Pipeline</h2>
            <Image
              src="/pipeline.svg"
              alt="pipeline"
              width={0}
              height={0}
              className="flex-1 pr-4"
            />
          </div>
        </div>
      </div>
    </>
  );
}
