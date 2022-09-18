<script>
  export let x;
  export let y;
  export let prevX;
  export let prevY;

  const sameX = x === prevX;
  const sameY = y === prevY;

  const isMovingXaxisOnly = !sameX && sameY;
  const isMovingYaxisOnly = !sameY && sameX;
  const hasRotation = !sameX && !sameY;
  const isSameCoord = sameX && sameY;

  const calcLinearLength = (thisCoord, prevCoord) => {
    const smallest = Math.min(thisCoord, prevCoord);
    const largest = Math.max(thisCoord, prevCoord);
    const difference = largest - smallest;
    return difference;
  };

  const calcRotatedLength = () => {
    return Math.hypot(calcLinearLength(x, prevX), calcLinearLength(y, prevY));
  };

  function setLineWidth() {
    if (hasRotation) return calcRotatedLength();
    if (isMovingXaxisOnly) return calcLinearLength(x, prevX);
    if (isMovingYaxisOnly) return calcLinearLength(y, prevY);
    if (isSameCoord) return 0;
  }

  function setLineAngle() {
    if (hasRotation)
      return (
        (Math.asin(calcLinearLength(y, prevY) / setLineWidth()) * 180) / Math.PI
      );
    return 0;
  }
</script>

<div
  class="h-1 bg-cyan-500 absolute"
  style="width:{setLineWidth()}px; transform:translate({x}px, {y}px) rotate({setLineAngle()}deg);"
/>
