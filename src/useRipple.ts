const kTapSize = 32;
const kTapSizeHalf = 16;

function applyCss<T extends HTMLElement>(
  context: T,
  styles: Partial<CSSStyleDeclaration>
): T {
  for (const prop of Object.keys(styles)) {
    context.style[prop] = styles[prop];
  }

  return context;
}

export function ripple(rippleContainer: HTMLElement, color: string) {
  if (rippleContainer.children[0]) {
    applyCss(rippleContainer, {
      borderRadius: getComputedStyle(rippleContainer.children[0]).borderRadius,
    });
  }

  function onClick(event: MouseEvent) {
    // const rippleContainer: HTMLElement | null = node.closest(
    //   ".ripple-container"
    // );

    // if (!rippleContainer) {
    //   console.warn(".ripple-container class not found");
    //   return;
    // }

    const {
      width,
      height,
      top,
      left,
    } = rippleContainer.getBoundingClientRect();

    const largestSide = Math.max(width, height);

    const y = event.y - top;
    const x = event.x - left;

    const initialSize = `${kTapSize}px`;

    const tap = document.createElement("span");

    applyCss(tap, {
      top: `${y - kTapSizeHalf}px`,
      left: `${x - kTapSizeHalf}px`,
      height: initialSize,
      width: initialSize,
      backgroundColor: color,
      opacity: "0.72",
      transform: "scale(0)",
      borderRadius: "50%",
      position: "absolute",
      transition: "all 400ms cubic-bezier(0.05, 0.12, 0.15, 0.06)",
      pointerEvents: "none",
    });

    const ripple = document.createElement("span");

    applyCss(ripple, {
      height: initialSize,
      width: initialSize,
      top: `${y - kTapSizeHalf}px`,
      left: `${x - kTapSizeHalf}px`,
      backgroundColor: color,
      position: "absolute",
      opacity: "0.38",
      borderRadius: "50%",
      transition: "all 350ms cubic-bezier(0.05, 0.12, 0.15, 0.06)",
      transitionDelay: "50ms",
      pointerEvents: "none",
    });

    setTimeout(() => {
      applyCss(ripple, {
        width: `${2 * largestSide}px`,
        height: `${2 * largestSide}px`,
        top: `${y - largestSide}px`,
        left: `${x - largestSide}px`,
        opacity: "0",
      });

      applyCss(tap, {
        opacity: "0",
        transform: "scale(1) translate3d(0,0,0)",
      });
    }, 0);

    rippleContainer.appendChild(ripple);
    rippleContainer.appendChild(tap);

    ripple.addEventListener("transitionend", function listener() {
      // handle only 1 event
      ripple.removeEventListener("transitionend", listener);

      setTimeout(() => {
        ripple.remove();
        tap.remove();
      }, 200);
    });
  }

  rippleContainer.addEventListener("click", onClick);

  return {
    destroy() {
      rippleContainer.removeEventListener("click", onClick);
    },
  };
}
