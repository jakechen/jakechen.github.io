import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "./types";
import { classNames } from "../util/lang";

const HomeLink: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "home-link-container")}>
      <a
        href="/"
        class="home-link"
        data-router-ignore="true"
        aria-label="Back to resume"
      >
        <svg
          class="home-link-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M19 12H5" />
          <path d="m12 19-7-7 7-7" />
        </svg>
        <span class="home-link-text">Resume</span>
      </a>
    </div>
  );
};

export default (() => HomeLink) satisfies QuartzComponentConstructor;
