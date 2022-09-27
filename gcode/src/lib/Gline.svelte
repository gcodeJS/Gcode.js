<script>
  export let x;
  export let y;
  export let prevX;
  export let prevY;
  export let index;
  export let parentOverflow = false;
  export let totalLines;

  const sameX = x === prevX;
  const sameY = y === prevY;

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
      const isPrevXgreater = prevX > x;
      const isPrevYgreater = prevY > y;

      if (isPrevXgreater && sameY) return formula + 180;
      if (isPrevYgreater && isPrevXgreater) return formula - 180;
      if (isPrevXgreater && !isPrevYgreater) return 180 - formula;
      if ((isPrevYgreater && sameX) || (isPrevYgreater && !isPrevXgreater))
        return formula * -1;
      return formula;
    }

    if (sameX) return 90;

    return 0;
  }
</script>

<div
  class="h-px bg-cyan-500 absolute origin-bottom-left"
  style="
  --line-width:{setLineWidth()}px; 
  --prev-x-coord:{prevX}px; 
  --prev-y-coord:{prevY}px; 
  --line-angle:{setLineAngle()}deg;
  --line-delay:{50 * index}ms;
  "
/>

<!-- transition:scale
on:introstart={() => {
  if (index === 0) parentOverflow = true;
}}
on:introend={() => {
  if (index === totalLines.length) parentOverflow = false;
}}
-->
<style>
  div {
    width: var(--line-width);
    transform: translate(var(--prev-x-coord), var(--prev-y-coord))
      rotate(var(--line-angle));
    animation: show var(--line-delay);
  }

  @keyframes show {
    from {
      translate: 0 50vmin;
    }
    to {
      translate: 0;
    }
  }
</style>
