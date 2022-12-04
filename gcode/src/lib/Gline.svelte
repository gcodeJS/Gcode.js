<script>
  export let x;
  export let y;
  export let prevX;
  export let prevY;
  export let index;
  export let animationSpeed;

  const sameX = x === prevX;
  const sameY = y === prevY;

  const isPrevXgreater = prevX > x;
  const isPrevYgreater = prevY > y;

  const isMovingXaxisOnly = !sameX && sameY;
  const isMovingYaxisOnly = !sameY && sameX;
  const hasRotation = !sameX && !sameY;
  const isSameCoord = sameX && sameY;

  function calcLinearLength(thisCoord, prevCoord) {
    const smallest = Math.min(thisCoord, prevCoord);
    const largest = Math.max(thisCoord, prevCoord);
    const difference = largest - smallest;
    return difference;
  }

  function calcRotatedLength() {
    return Math.hypot(calcLinearLength(x, prevX), calcLinearLength(y, prevY));
  }

  function setLineWidth() {
    if (hasRotation) return calcRotatedLength();
    if (isMovingXaxisOnly) return calcLinearLength(x, prevX);
    if (isMovingYaxisOnly) return calcLinearLength(y, prevY);
    if (isSameCoord) return 0;
  }

  function setLineAngle() {
    if (hasRotation) {
      const formula =
        (Math.asin(calcLinearLength(y, prevY) / setLineWidth()) * 180) /
        Math.PI;

      if (isPrevXgreater && sameY) return formula + 180;
      if (isPrevYgreater && isPrevXgreater) return formula - 180;
      if (isPrevXgreater && !isPrevYgreater) return 180 - formula;
      if ((isPrevYgreater && sameX) || (isPrevYgreater && !isPrevXgreater))
        return formula * -1;
      return formula;
    }

    if (sameX) return 90;
    if(isPrevXgreater) return 180; // TODO: test this line properly :)

    return 0;
  }
  
  function setLineTransformOrigin() {
    if (isPrevXgreater || isPrevYgreater) return "center left";
    return "bottom left";
  }
</script>

<div
  class="h-px bg-cyan-500 absolute"
  style="
  --line-width:{setLineWidth()}px; 
  --prev-x-coord:{prevX}px; 
  --prev-y-coord:{prevY}px; 
  --line-angle:{setLineAngle()}deg;
  --line-delay:{animationSpeed * index}ms;
  --line-transform-origin:{setLineTransformOrigin()};
  "
/>

<style>
  div {
    width: var(--line-width);
    transform: translate(var(--prev-x-coord), var(--prev-y-coord))
      rotate(var(--line-angle));
    transform-origin: var(--line-transform-origin);
    animation: show var(--line-delay);
  }

  @keyframes show {
    from {
      translate: 0 -100cqmin;
    }
  }
</style>
