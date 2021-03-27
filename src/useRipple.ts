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
  function onClick(event: MouseEvent) {
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
      transform: "scale(0)",
      transition:
        "transform 700ms cubic-bezier(0.05, 0.12, 0.15, 0.06), opacity 400ms cubic-bezier(0.05, 0.12, 0.15, 0.06)",
      transitionDelay: "50ms",
      pointerEvents: "none",
    });

    setTimeout(() => {
      applyCss(ripple, {
        transform: `scale(${largestSide * 0.2}) translate3d(0,0,0)`,
        opacity: "0",
      });

      applyCss(tap, {
        opacity: "0",
        transform: "scale(1) translate3d(0,0,0)",
      });
    }, 16);

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

  rippleContainer.addEventListener("click", onClick, true);

  return {
    destroy() {
      rippleContainer.removeEventListener("click", onClick);
    },
  };
}
