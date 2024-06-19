import { LinkButton } from "@/components/link-button";
import { ResultImage } from "@/components/result-image";
import { Separator } from "@/components/ui/separator";
import { authorList, institutionList } from "@/config/author";
import { bannerImages, resultImages } from "@/config/image";
import Image from "next/image";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <div className="container px-12 mb-64 mt-20 xl:mt-32 max-w-none w-fit">
        <div className="max-w-[1024px]">
          {/* Title */}
          <div>
            <div>
              <div className="w-1/6 flex items-end gap-4">
                {/* <Image
                  src="/cvpr.svg"
                  alt="CVPR 2024"
                  width={0}
                  height={0}
                  className="inline-block mt-0 mb-1 w-5/6"
                /> */}
                <div className="font-semibold pl-0.5 text-lg text-black">
                  CVPR&apos;24
                </div>
              </div>

              <h1 id="title">
                <div className="text-6xl font-bold mt-1">
                  <span>M</span>
                  <span className="bg-gradient-to-r from-gray-500  to-gray-200 bg-clip-text text-transparent tracking-tighter">
                    usculo
                  </span>
                  <span>S</span>
                  <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tighter">
                    keletal
                  </span>
                  <span>-</span>
                  <span className="tracking-tight">MANO</span>
                </div>
                <div className="text-4xl text-black font-medium tracking-[-0.02em] mt-4 ">
                  Enabling Hand Pose Tracking with Biomechanical Constraints
                </div>
              </h1>
            </div>

            <div className="mt-12">
              <div className="flex flex-wrap text-2xl text-black">
                {authorList.map((author, index) => (
                  <div key={index} className="flex-shrink-0 mr-4">
                    {author.href ? (
                      <Link href={author.href} target="_blank">
                        <div className="font-semibold leading-loose tracking-tight hover:drop-shadow-md">
                          <span className="underline">{author.name}</span>
                          <sup>{author.sup}</sup>
                        </div>
                      </Link>
                    ) : (
                      <div className="font-semibold leading-loose tracking-tight">
                        {author.name}
                        <sup>{author.sup}</sup>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex space-x-4">
                {institutionList.map((institution, index) => (
                  <div key={index} className="text-xl">
                    <sup>{institution.id}</sup>
                    {institution.name}
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="text-lg mt-10 font-normal"></div> */}
          </div>

          {/* Links */}
          <div className="flex items-end mt-24 ">
            <div className="flex-1 mr-6">
              <Separator className="my-0.5 h-[0.5px] bg-black" />
              <div className="flex justify-center gap-5">
                <LinkButton
                  label="Read Paper"
                  href="https://arxiv.org/abs/2404.10227"
                />
                <LinkButton
                  label="Code Release"
                  href="https://github.com/panoanx/ms-mano-unity"
                  disabled={false}
                  hint="In Progress"
                />
                <LinkButton
                  label="Watch Video"
                  href="https://youtu.be/jKzsa3sahAE?si=3DIbOzrnR21Bp5s6"
                  disabled={false}
                />
                <LinkButton
                  label="View Poster"
                  href="/poster.pdf"
                  disabled={false}
                />
                <LinkButton
                  label="Browse Slides"
                  href="/slides.pdf"
                  disabled={false}
                />
              </div>
              <Separator className="my-0.5 h-[0.5px] bg-black" />
            </div>
          </div>

          {/* abstract */}
          <div className="flex mt-16">
            <h2 className="mt-1 w-1/4 flex-shrink-0 text-3xl font-semibold">
              Abstract
            </h2>
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

          {/* Images */}
          <div className="w-auto flex space-x-12 mt-36 mr-6">
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
                <div className="not-prose text-gray-950 text-center text-balance w-fit mx-auto mt-6 text-md">
                  {image.caption}
                </div>
              </div>
            ))}
          </div>

          <div className="flex mt-40">
            <h2 className="mt-1 w-1/4 flex-shrink-0 text-3xl font-semibold">
              Pipeline
            </h2>
            <Image
              src="/pipeline.svg"
              alt="pipeline"
              width={0}
              height={0}
              className="flex-1 pr-4"
            />
          </div>

          <div className="flex mt-24">
            <h2 className="mt-0 w-1/4 flex-shrink-0 text-3xl font-semibold">
              Results
            </h2>

            <div className="w-full grid grid-cols-2 mr-4 gap-x-4 gap-y-6">
              <ResultImage imageData={resultImages} />
            </div>
          </div>

          {/* Video */}
          <div className="flex mt-16">
            <h2 className="mt-0 w-1/4 flex-shrink-0 text-3xl font-semibold">
              Video
            </h2>
            <div className="text-xl flex-1 leading-normal text-black text-justify font-serif mr-6">
              <iframe
                // width="560"
                // height="315"
                className="w-full h-[320px] lg:h-[430px]"
                src="https://www.youtube.com/embed/jKzsa3sahAE?si=8aV_3GCvnOKvnzSs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="flex mt-24">
            <h2 className="mt-0 w-1/4 flex-shrink-0 text-3xl font-semibold">
              Contact
            </h2>
            <div className="text-xl leading-normal text-black text-justify font-serif mr-6">
              If you have any inquiries or require further clarification
              regarding the paper, its associated code, or any other related
              questions, we encourage you to get in touch with us. Please feel
              free to send your questions via email to{" "}
              <code className="text-sm mx-1">xiepf2002 at gmail dot com</code>.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
