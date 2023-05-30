import envelop from "../../assets/icons/envelop.png";
import envelop_white from "../../assets/icons/envelop_white.png";

export default function Footer() {
  return (
    <footer className="footer items-center text-neutral-content mx-auto max-w-7xl p-4 px-2 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center sm:items-start w-full">
        <picture>
          <source
            srcSet="https://runtimeverification.com/assets/img/rv-logo-dark.png"
            media="(prefers-color-scheme: dark)"
          />
          <img
            className="h-[32px]"
            src="https://runtimeverification.com/assets/img/rv-logo.png"
            alt="Runtime Verification logo"
          />
        </picture>
        <p className="mt-2 text-md-left copyright link link-primary no-underline">
          <a href="https://goo.gl/maps/5iu2nhbUA48fs7fP6" target="_blank">
            <picture>
              <source
                srcSet={`${envelop_white}`}
                media="(prefers-color-scheme: dark)"
              />
              <img
                className="h-[14px] inline mr-1 fill-red-800"
                src={`${envelop}`}
                alt="Runtime Verification logo"
              />
            </picture>
            333 North Green Street, Chicago, IL
          </a>
        </p>
      </div>
      <div className="text-gray-600 w-full">
        <p className="text-center w-full">
          {`${new Date().getFullYear()} © all rights reserved | `}
          <a
            href="https://runtimeverification.com/privacy-policy"
            className="link-primary"
          >
            privacy policy
          </a>
          {" | "}
          <a
            href="https://runtimeverification.com/terms-of-use"
            className="link-primary"
          >
            terms of use
          </a>
        </p>
      </div>
      <div className="grid-flow-col gap-2 justify-self-center md:justify-self-end">
        <a href="https://github.com/runtimeverification" target="_blank">
          <picture>
            <source
              srcSet="https://runtimeverification.com/assets/img/footer/footer-github-dark.png"
              media="(prefers-color-scheme: dark)"
            />
            <img
              className="w-[24px] h-[24px] ml-1 mr-1"
              src="https://runtimeverification.com/assets/img/footer/footer-github.png"
              alt="GitHub logo"
            />
          </picture>
        </a>
        <a href="https://discord.gg/CurfmXNtbN " target="_blank">
          <picture>
            <source
              srcSet="https://runtimeverification.com/assets/img/footer/footer-discord-dark.png"
              media="(prefers-color-scheme: dark)"
            />
            <img
              className="w-[24px] h-[24px] ml-1 mr-1"
              src="https://runtimeverification.com/assets/img/footer/footer-discord.png"
              alt="Discord logo"
            />
          </picture>
        </a>
        <a href="https://t.me/rv_inc" target="_blank">
          <picture>
            <source
              srcSet="https://runtimeverification.com/assets/img/footer/footer-telegram-dark.png"
              media="(prefers-color-scheme: dark)"
            />
            <img
              className="w-[24px] h-[24px] ml-1 mr-1"
              src="https://runtimeverification.com/assets/img/footer/footer-telegram.png"
              alt="Telegram logo"
            />
          </picture>
        </a>
        <a href="https://twitter.com/rv_inc" target="_blank">
          <picture>
            <source
              srcSet="https://runtimeverification.com/assets/img/footer/footer-twitter-dark.png"
              media="(prefers-color-scheme: dark)"
            />
            <img
              className="w-[24px] h-[24px] ml-1 mr-1"
              src="https://runtimeverification.com/assets/img/footer/footer-twitter.png"
              alt="Twitter logo"
            />
          </picture>
        </a>
        <a href="https://runtimeverification.medium.com/" target="_blank">
          <picture>
            <source
              srcSet="https://runtimeverification.com/assets/img/footer/footer-medium-dark.png"
              media="(prefers-color-scheme: dark)"
            />
            <img
              className="w-[24px] h-[24px] ml-1 mr-1"
              src="https://runtimeverification.com/assets/img/footer/footer-medium.png"
              alt="Medium logo"
            />
          </picture>
        </a>
        <a
          href="https://www.youtube.com/channel/UCZeDdn8F5ARtK5LmRngiLnA"
          target="_blank"
        >
          <picture>
            <source
              srcSet="https://runtimeverification.com/assets/img/footer/footer-youtube-dark.png"
              media="(prefers-color-scheme: dark)"
            />
            <img
              className="w-[24px] h-[24px] ml-1 mr-1"
              src="https://runtimeverification.com/assets/img/footer/footer-youtube.png"
              alt="YouTube logo"
            />
          </picture>
        </a>
        <a
          href="https://www.facebook.com/RuntimeVerificationInc"
          target="_blank"
        >
          <picture>
            <source
              srcSet="https://runtimeverification.com/assets/img/footer/footer-facebook-dark.png"
              media="(prefers-color-scheme: dark)"
            />
            <img
              className="w-[24px] h-[24px] ml-1 mr-1"
              src="https://runtimeverification.com/assets/img/footer/footer-facebook.png"
              alt="Facebook logo"
            />
          </picture>
        </a>
        <a href="https://www.linkedin.com/company/3142238/" target="_blank">
          <picture>
            <source
              srcSet="https://runtimeverification.com/assets/img/footer/footer-linkedin-dark.png"
              media="(prefers-color-scheme: dark)"
            />
            <img
              className="w-[24px] h-[24px] ml-1 mr-1"
              src="https://runtimeverification.com/assets/img/footer/footer-linkedin.png"
              alt="Linkedin logo"
            />
          </picture>
        </a>
      </div>
    </footer>
  );
}
