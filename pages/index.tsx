import Head from "next/head";
import GithubCorner from "@/components/github-corner";
import SlackButton from "@/components/slack-button";
import Image from "next/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Myha</title>
      </Head>
      <GithubCorner url="https://github.com/MTDR-dev/myha" />

      <main className="flex flex-col space-y-5 items-center justify-center min-h-screen max-h-screen py-10 sm:pb-20">
        <div className="relative w-[422px] h-[66px] sm:w-[633px] sm:h-[100px]">
          <Image
            src="/banner.png"
            alt="Myha"
            layout="fill"
          />
        </div>
        <div className="text-center max-w-md sm:max-w-lg space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Myha
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Predict and prevent workplace burnout.
          </p>
        </div>

        <div
          className="relative w-full max-w-2xl border border-gray-200 drop-shadow-md
         sm:rounded-lg overflow-hidden"
        >
          <LiteYouTubeEmbed
            id="gBCIaf200oQ"
            adNetwork={true}
            playlist={false}
            title="Myha"
            noCookie={true}
            thumbnail="/screenshot.png"
            aspectHeight={10}
          />
        </div>
        <div className="flex flex-col text-center space-y-2">
          <SlackButton
            text="Add to Slack"
            url={`https://slack.com/oauth/v2/authorize?scope=${process.env.SCOPES}&client_id=${process.env.CLIENT_ID}`}
          />
          <a
            href="https://github.com/MTDR-dev/myha"
            className="text-gray-500 hover:text-black text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Looking to self-host instead?
          </a>
        </div>
        <div className="flex space-x-4 absolute bottom-2 right-4">
          <Link href="/support">
            <a className="text-gray-500 text-sm hover:text-black">Support</a>
          </Link>
          <a
            className="text-gray-500 text-sm hover:text-black"
            href="/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
        </div>
      </main>
    </div>
  );
}
