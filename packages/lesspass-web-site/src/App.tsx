import "./App.css";
import GooglePlayBadge from "./images/google-play-badge.png";
import ApplePlayBadge from "./images/download-on-the-App-Store.png";
import FDroidBadge from "./images/get-it-on-fdroid.png";
import ChromeBadge from "./images/get-chrome-badge.png";
import AMOBadge from "./images/get-amo-badge.png";
import CLIBadge from "./images/cli-badge.png";
import HowItWorks from "./images/HowItWorks.png";
import GuillaumeVincent from "./images/guillaumevincent.png";
import { LessPassWebComponent } from "lesspass-web-component";

export function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
              Stateless password manager
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Stop wasting your time synchronizing your encrypted vault.
              Remember one master password to access your passwords, anywhere,
              anytime, from any device. No sync needed.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="https://blog.lesspass.com/2016-10-19/how-does-it-work"
                className="text-sm/6 font-semibold text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
            <div
              className="mx-auto max-w-full overflow-y-scroll rounded-md border border-gray-800 bg-white dark:bg-gray-900 dark:text-white"
              style={{ width: "481px", minHeight: "500px" }}
            >
              <LessPassWebComponent />
            </div>
            <p className="text-sm text-gray-500">
              For your security, it's better to use the browser extension
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HowDoesItWork() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                Compute your password offline
              </h2>
              <p className="mt-6 text-lg/8 text-gray-300">
                LessPass computes a unique password using a site, login, and a
                master password. You don't need to sync a password vault across
                every device or to the cloud, because LessPass works offline!
              </p>
            </div>
          </div>
          <div className="flex h-full items-center">
            <img
              alt="How it works"
              src={HowItWorks}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function OpenSource() {
  return (
    <div className="bg-white pt-24 pb-5 sm:pt-32 sm:pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <a
            href="https://github.com/lesspass/lesspass"
            className="text-base/7 font-semibold text-blue-500"
          >
            See on github
          </a>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            LessPass is Open Source
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            To us, a password manager is only as secure as it is transparent.
            That's why LessPass is fully open source. Don't just take our word
            for it, take a peek under the hood and see for yourself!
          </p>
        </div>
      </div>
    </div>
  );
}

export function Stats() {
  const stats = [
    { id: 1, name: "Commits", value: "2200+" },
    { id: 2, name: "Contributors", value: "50+" },
    { id: 3, name: "Stars", value: "5k+" },
  ];
  return (
    <div className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base/7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export function UseItEveryWhere() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
          Use it everywhere.
        </h2>
        <p className="mt-2 text-base/7 font-semibold">It's free</p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
        <div className="col-span-1 flex justify-center px-8 py-8">
          <a href="https://play.google.com/store/apps/details?id=com.lesspass.android&hl=en">
            <img
              className="max-h-20"
              src={GooglePlayBadge}
              alt="Google Play badge"
            />
          </a>
        </div>
        <div className="col-span-1 flex justify-center px-8 py-8">
          <a href="https://apps.apple.com/app/id1531215924">
            <img
              className="max-h-20"
              src={ApplePlayBadge}
              alt="Apple Play badge"
            />
          </a>
        </div>
        <div className="col-span-1 flex justify-center px-8 py-8">
          <a href="https://f-droid.org/en/packages/com.lesspass.android/">
            <img className="max-h-20" src={FDroidBadge} alt="FDroid badge" />
          </a>
        </div>
        <div className="col-span-1 flex justify-center px-8 py-8">
          <a href="https://chrome.google.com/webstore/detail/lesspass/lcmbpoclaodbgkbjafnkbbinogcbnjih">
            <img className="max-h-20" src={ChromeBadge} alt="Chrome badge" />
          </a>
        </div>
        <div className="col-span-1 flex justify-center px-8 py-8">
          <a href="https://addons.mozilla.org/en-US/firefox/addon/lesspass/">
            <img className="max-h-16" src={AMOBadge} alt="AMO badge" />
          </a>
        </div>
        <div className="col-span-1 flex justify-center px-8 py-8">
          <a href="https://github.com/lesspass/lesspass#cli">
            <img className="max-h-16" src={CLIBadge} alt="Cli badge" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function LastArticles() {
  const posts = [
    {
      id: 1,
      title: "Decommissioning LessPass Database",
      href: "https://blog.lesspass.com/2022-12-29/decommissioning-lesspass-database",
      description:
        "LessPass Database server will be turned off on March 1th, 2023. The static version of LessPass, the web extension and the mobile versions remain in place.",
      date: "December 29, 2022",
      datetime: "2022-12-29",
      category: { title: "News" },
      author: {
        name: "Guillaume Vincent",
        role: "Founder",
        href: "https://www.linkedin.com/in/guillaumevincentcom",
        imageUrl: GuillaumeVincent,
      },
    },
    {
      id: 2,
      title: "Why LessPass changed its license?",
      href: "https://blog.lesspass.com/2016-11-10/why-lesspass-change-license",
      description:
        "An open community starts with a good license. That’s why we decided to change LessPass license from MIT to GPLv3.",
      date: "November 10, 2016",
      datetime: "2016-11-10",
      category: { title: "News" },
      author: {
        name: "Guillaume Vincent",
        role: "Founder",
        href: "https://www.linkedin.com/in/guillaumevincentcom",
        imageUrl: GuillaumeVincent,
      },
    },
    {
      id: 3,
      title: "LessPass How Does It Work?",
      href: "https://blog.lesspass.com/2016-10-19/how-does-it-work",
      description:
        "Managing your Internet passwords is not easy. You probably use a password manager to help you. The system is simple, the tool generates random passwords whenever you need them and saves them into a file protected with a strong password. This system is very robust, you only need to remember one password to rule them all! Now you have a unique password for each site on the Internet.",
      date: "November 10, 2016",
      datetime: "2016-10-19",
      category: { title: "News" },
      author: {
        name: "Guillaume Vincent",
        role: "Founder",
        href: "https://www.linkedin.com/in/guillaumevincentcom",
        imageUrl: GuillaumeVincent,
      },
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Recent publications
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Read the latest blog posts from LessPass.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {post.category.title}
                </p>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  alt=""
                  src={post.author.imageUrl}
                  className="size-10 rounded-full bg-gray-50"
                />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="https://twitter.com/guillaume20100"
          className="text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Twitter</span>
          <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
        <a
          href="https://github.com/lesspass/lesspass/"
          className="text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Github</span>
          <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
      <p className="mt-8 text-center text-base text-gray-400">
        &copy; 2015-{currentYear} LessPass. All rights reserved.
      </p>
    </footer>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowDoesItWork />
      <OpenSource />
      <Stats />
      <UseItEveryWhere />
      <LastArticles />
      <Footer />
    </>
  );
}
